import React from "react";
import "./HouseCard.css";
import { Link } from "react-router-dom";

function HouseCard({ data }) {
    return (
        <Link to={`/houses/${data.id}`}>
            <div className="house-card">
            <div className="house-card__img-container">
                    <img
                        src="/Images/house.jpeg"
                        alt=""
                        className="house-card__img"
                    />
                </div>
                <h3 className="house-card__address">{data.address}</h3>
            </div>
        </Link>
    );
}

export default HouseCard;
