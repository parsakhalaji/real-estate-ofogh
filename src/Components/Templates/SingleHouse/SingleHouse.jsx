import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShowLocation from "../../Modules/Location/ShowLocation";
import "./SingleHouse.css";

function SingleHouse() {
    const { houseID } = useParams();
    const [currentHouse, setCurrentHouse] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/houses/${houseID}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setCurrentHouse(data);
            })
            .catch((err) => console.log(err));
    }, [houseID]);

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <div className="single-house">
                <div className="single-house__info">
                    <div className="single-house__details">
                        <h3 className="single-house__address">
                            {currentHouse?.address}
                        </h3>
                        <h3 className="single-house__desc">
                            {currentHouse?.desc}
                        </h3>
                        <h3 className="single-house__phoneNumber">
                            {currentHouse?.phoneNumber}
                        </h3>
                    </div>
                    {currentHouse && (
                        <ShowLocation location={currentHouse.location} />
                    )}
                </div>
                <div className="single-house__btns">
                    <button className="btn" onClick={handleBackButtonClick}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleHouse;
