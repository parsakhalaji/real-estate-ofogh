import React from "react";
import "./DeleteConfirm.css";

function DeleteConfirm() {
    return (
        <div className="deletebox">
            <div className="deletebox__wrapper">
                <h2 className="deletebox__title">
                    Are you sure to delete this house?
                </h2>
                <div className="deletebox__btns">
                    <button className="btn">Yes, Delete</button>
                    <button className="btn">No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirm;
