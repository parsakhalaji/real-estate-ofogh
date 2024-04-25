import React, { useContext, useEffect, useState } from "react";
import SelectLocation from "../Location/SelectLocation";
import LocationContext from "../../../Contexts/Location/LocationContext";
import "./EditHouseDialog.css";

function EditHouseDialog({
    openBoxHandler,
    onSubmit,
    isOpen,
    initialHouseData,
}) {
    const [houseData, setHouseData] = useState(initialHouseData);
    const { location, setLocation } = useContext(LocationContext);

    useEffect(() => {
        if (houseData) {
            setLocation(houseData.location);
        }
    }, [houseData]);

    const closeBoxHandler = () => {
        openBoxHandler(false);
    };

    const handleInputChange = (event) => {
        console.log(event.target);
        const { id, value } = event.target;
        setHouseData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div
            style={{ display: isOpen ? "flex" : "none" }}
            className="editdialog"
        >
            <div className="editdialog__wrapper">
                <div className="editdialog__content">
                    <div className="edithouse">
                        <h1 className="edithouse__title">Edit house data</h1>
                        <div className="edithouse__content">
                            <form
                                onSubmit={(e) => onSubmit(e, houseData)}
                                className="edithouse__form"
                            >
                                <label
                                    className="edithouse__label"
                                    htmlFor="phoneNumber"
                                >
                                    Phone Number
                                    <input
                                        id="phoneNumber"
                                        className="edithouse__input"
                                        type="text"
                                        value={houseData?.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label
                                    className="edithouse__label"
                                    htmlFor="address"
                                >
                                    Address
                                    <textarea
                                        cols="30"
                                        rows="6"
                                        id="address"
                                        className="edithouse__input"
                                        value={houseData?.address}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label
                                    className="edithouse__label"
                                    htmlFor="desc"
                                >
                                    Description
                                    <textarea
                                        cols="30"
                                        rows="6"
                                        id="desc"
                                        className="edithouse__input"
                                        value={houseData?.desc}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </form>
                            <div className="edithouse__location">
                                {isOpen && <SelectLocation />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editdialog__btns">
                    <button onClick={closeBoxHandler} className="btn">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditHouseDialog;
