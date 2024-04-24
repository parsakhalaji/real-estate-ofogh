import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowLocation from "../../Modules/Location/ShowLocation";

function SingleHouse() {
    const { houseID } = useParams();
    const [currentHouse, setCurrentHouse] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/houses/${houseID}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCurrentHouse(data);
            });
    }, []);
    return (
        <div className="container">
            <div className="single-house">
                <div className="single-house__info">
                    <div className="single-house__details"></div>
                    <ShowLocation />
                </div>
            </div>
        </div>
    );
}

export default SingleHouse;
