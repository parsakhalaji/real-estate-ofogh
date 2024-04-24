import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleHouse() {
    const { houseID } = useParams();
    const [currenHouse, setCurrentHouse] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/houses/${houseID}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCurrentHouse(data);
            });
    }, []);
    return (
        <div className="single-house">
            <h2></h2>
        </div>
    );
}

export default SingleHouse;
