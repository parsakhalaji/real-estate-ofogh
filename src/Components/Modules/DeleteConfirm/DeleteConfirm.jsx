import React, { useState } from "react";
import "./DeleteConfirm.css";

function DeleteConfirm({ isOpen, openBoxHandler, onSubmit }) {
    const [isBoxOpen, setIsBoxOpen] = useState(isOpen);

    const closeBoxHandler = () => {
        openBoxHandler(false);
    };
    return (
        <div
            className="deletebox"
            style={{ display: isOpen ? "flex" : "none" }}
        >
            <div className="deletebox__wrapper">
                <h2 className="deletebox__title">
                    Are you sure to delete this house?
                </h2>
                <div className="deletebox__btns">
                    <button onClick={onSubmit} className="btn delete-btn">
                        Yes, Delete
                    </button>
                    <button onClick={closeBoxHandler} className="btn">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirm;
