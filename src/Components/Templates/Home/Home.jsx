import React, { useEffect, useState } from "react";
import HouseCard from "../../Modules/HouseCard/HouseCard";
import "./Home.css";

function Home() {
    const [houses, setHouses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:4000/houses?_limit=4&_page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                setHouses(data);
                // console.log("data: ", data);
            })
            .catch((err) => console.log(err));
    }, [currentPage]);

    useEffect(() => {
        fetch("http://localhost:4000/houses")
            .then((res) => res.json())
            .then((data) => {
                const totalHouses = data.length;
                setTotalPages(Math.ceil(totalHouses / 4));
            });
    }, [houses]);

    const previousPageHandler = () => {
        setCurrentPage((prev) => prev - 1);
    };
    const nextPageHandler = () => {
        setCurrentPage((prev) => prev + 1);
    };

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
                        <div className="home__btns">
                            <button
                                disabled={currentPage === 1}
                                onClick={previousPageHandler}
                                className="btn"
                            >
                                Previous
                            </button>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={nextPageHandler}
                                className="btn"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
