import React, { useEffect, useState } from "react";
import HouseCard from "../../Modules/HouseCard/HouseCard";
import "../Home/Home.css";
import { useParams } from "react-router-dom";

function Search() {
    const [houses, setHouses] = useState([]);
    const { searchParam } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/houses`)
            .then((res) => res.json())
            .then((data) => {
                const targetHouses = data.filter(
                    (house) =>
                        house.address
                            .replace(/\s+/g, "-")
                            .includes(searchParam) ||
                        house.desc.replace(/\s+/g, "-").includes(searchParam) ||
                        house.address.replace(/\s/g, "").includes(searchParam)
                );
                setHouses(targetHouses);
            })
            .catch((err) => console.log(err));
    }, [searchParam]);

    return (
        <div className="container">
            <div className="home">
                {!houses.length ? (
                    <h1 className="home__notFound">No house found</h1>
                ) : (
                    <div className="home__content">
                        <ul className="home__houses">
                            {houses.map((house) => (
                                <li key={house.id} className="home__house">
                                    <HouseCard data={house} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
