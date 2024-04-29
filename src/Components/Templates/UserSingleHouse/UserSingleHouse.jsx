import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShowLocation from "../../Modules/Location/ShowLocation";
import "../SingleHouse/SingleHouse.css";
import DeleteConfirm from "../../Modules/DeleteConfirm/DeleteConfirm";
import EditHouseDialog from "../../Modules/EditHouseDialog/EditHouseDialog";
import LocationContext from "../../../Contexts/Location/LocationContext";

function UserSingleHouse() {
    const { userHouseID, userID } = useParams();
    const [currentHouse, setCurrentHouse] = useState(null);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const { location } = useContext(LocationContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/houses/${userHouseID}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setCurrentHouse(data);
            })
            .catch((err) => console.log(err));
    }, [userHouseID]);

    const openDeleteConfirmHandler = () => {
        setIsDeleteConfirmOpen(true);
    };

    const openEditDialogHandler = () => {
        setIsEditDialogOpen(true);
    };

    const deleteHouseHandler = () => {
        fetch(`http://localhost:4000/houses/${userHouseID}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                alert("The house deleted successfully");
                navigate(`/${userID}/myhouses`);
            })
            .catch((err) => console.log(err));
    };

    const editHouseHandler = (e, newHouseData) => {
        e.preventDefault();
        // console.log("newHouseData: ", newHouseData);
        fetch(`http://localhost:4000/houses/${userHouseID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...newHouseData, location }),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                alert("The house info updated successfully");
                navigate(`/${userID}/myhouses`);
            })
            .catch((err) => console.log(err));
    };

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
                    <button onClick={openEditDialogHandler} className="btn edit-btn">
                        Edit
                    </button>
                    <button onClick={openDeleteConfirmHandler} className="btn delete-btn">
                        Delete
                    </button>
                    <button className="btn" onClick={handleBackButtonClick}>
                        Back
                    </button>
                </div>
            </div>
            <DeleteConfirm
                onSubmit={deleteHouseHandler}
                isOpen={isDeleteConfirmOpen}
                openBoxHandler={setIsDeleteConfirmOpen}
            />
            {currentHouse && (
                <EditHouseDialog
                    isOpen={isEditDialogOpen}
                    onSubmit={editHouseHandler}
                    openBoxHandler={setIsEditDialogOpen}
                    initialHouseData={currentHouse}
                />
            )}
        </div>
    );
}

export default UserSingleHouse;
