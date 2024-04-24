import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShowLocation from "../../Modules/Location/ShowLocation";
import "./SingleHouse.css";
import DeleteConfirm from "../../Modules/DeleteConfirm/DeleteConfirm";
import EditHouseDialog from "../../Modules/EditHouseDialog/EditHouseDialog";

function SingleHouse() {
    const { houseID } = useParams();
    const [currentHouse, setCurrentHouse] = useState(null);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/houses/${houseID}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCurrentHouse(data);
            })
            .catch((err) => console.log(err));
    }, [houseID]);

    const openDeleteConfirmHandler = () => {
        setIsDeleteConfirmOpen(true);
    };

    const deleteHouseHandler = () => {
        fetch(`http://localhost:4000/houses/${houseID}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                alert("The house deleted successfully");
                navigate("/");
            })
            .catch((err) => console.log(err));
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
                    <button className="btn">Edit</button>
                    <button onClick={openDeleteConfirmHandler} className="btn">
                        Delete
                    </button>
                </div>
            </div>
            <DeleteConfirm
                onSubmit={deleteHouseHandler}
                isOpen={isDeleteConfirmOpen}
                openBoxHandler={setIsDeleteConfirmOpen}
            />
            <EditHouseDialog
                
            />
        </div>
    );
}

export default SingleHouse;
