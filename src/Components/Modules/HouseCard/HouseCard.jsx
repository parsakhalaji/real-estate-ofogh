import React from "react";

function HouseCard({ data }) {
    return (
        <div className="house-card">
            <div className="house-card__img-container">
                <img
                    src="./Images/house.jpeg"
                    alt=""
                    className="house-card__img"
                />
            </div>
            <div className="house-card__content">
                <h3 className="house-card__address">{data.address}</h3>
            </div>
        </div>
    );
}

export default HouseCard;
