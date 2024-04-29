import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../Contexts/User/UserContext";

function PrivateRoute({ children }) {
    const { user, isLoading } = useContext(UserContext);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
