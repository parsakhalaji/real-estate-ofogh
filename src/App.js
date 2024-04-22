import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Templates/Home/Home";
import Login from "./Components/Templates/Login/Login";
import Signup from "./Components/Templates/Signup/Signup";
import Navbar from "./Components/Modules/Navbar/Navbar";
import UserContext from "./Contexts/User/UserContext";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(null);

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;
