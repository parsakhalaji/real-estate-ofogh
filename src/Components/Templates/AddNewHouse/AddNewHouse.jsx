import React, { useState, useContext } from "react";
import SelectLocation from "../../Modules/Location/SelectLocation";
import "./AddNewHouse.css";
import LocationContext from "../../../Contexts/Location/LocationContext";
import { useNavigate } from "react-router-dom";

function AddNewHouse() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");

    const { location } = useContext(LocationContext);

    const navigate = useNavigate();

    const addNewHouseSubmitHandler = (e) => {
        e.preventDefault();
        if (phoneNumber && address && desc && location) {
            const newHouse = { phoneNumber, address, desc, location };
            fetch("http://localhost:4000/houses", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newHouse),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    navigate("/");
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="container">
            <div className="addnewhouse">
                <h1 className="addnewhouse__title">Enter new house data</h1>
                <div className="addnewhouse__content">
                    <form
                        onSubmit={addNewHouseSubmitHandler}
                        className="addnewhouse__form"
                    >
                        <label
                            className="addnewhouse__label"
                            htmlFor="phoneNumber"
                        >
                            Phone Number
                            <input
                                id="phoneNumber"
                                className="addnewhouse__input"
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label>
                        <label className="addnewhouse__label" htmlFor="address">
                            Address
                            <textarea
                                cols="30"
                                rows="6"
                                id="address"
                                className="addnewhouse__input"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                        <label className="addnewhouse__label" htmlFor="desc">
                            Description
                            <textarea
                                cols="30"
                                rows="6"
                                id="desc"
                                className="addnewhouse__input"
                                type="text"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </label>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                    <div className="addnewhouse__location">
                        <SelectLocation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewHouse;
