import React from "react";
import "../HouseCard/HouseCard.css";
import { Link, useParams } from "react-router-dom";

function UserHouseCard({ data }) {
    const { userID } = useParams();

    return (
        <Link to={`/${userID}/myhouses/${data.id}`}>
            <div className="house-card">
                <div className="house-card__img-container">
                    <img
                        src="https://raw.githubusercontent.com/parsakhalaji/real-estate-ofogh/main/public/Images/house.jpeg"
                        alt=""
                        className="house-card__img"
                    />
                </div>
                <h3 className="house-card__address">{data.address}</h3>
            </div>
        </Link>
    );
}

export default UserHouseCard;
