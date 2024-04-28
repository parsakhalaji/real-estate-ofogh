import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { useParams } from "react-router-dom";
import UserHouseCard from "../../Modules/UserHouseCard/UserHouseCard";
import { Link } from "react-router-dom";

function Home() {
    const [houses, setHouses] = useState([]);
    const { userID } = useParams();

    useEffect(() => {
        fetch("http://localhost:4000/houses")
            .then((res) => res.json())
            .then((data) => {
                const userHouses = data.filter(
                    (house) => house.userID == userID
                );
                setHouses(userHouses);
                console.log("userhouses: ", userHouses);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="home">
                {!houses.length ? (
                    <div>
                        <h1 className="home__notFound">You have not added any houses yet :((</h1>
                        <button className="btn">
                            <Link to="/addnewhouse" > Add new house</Link>
                        </button>
                    </div>
                ) : (
                    <div className="home__content">
                        <ul className="home__houses">
                            {houses.map((house) => (
                                <li key={house.id} className="home__house">
                                    <UserHouseCard data={house} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
