import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Templates/Home/Home";
import Login from "./Components/Templates/Login/Login";
import Signup from "./Components/Templates/Signup/Signup";
import Navbar from "./Components/Modules/Navbar/Navbar";
import UserContext from "./Contexts/User/UserContext";
import { useState } from "react";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AddNewHouse from "./Components/Templates/AddNewHouse/AddNewHouse";
import LocationContext from "./Contexts/Location/LocationContext";
import SingleHouse from "./Components/Templates/SingleHouse/SingleHouse";
import UserHouses from "./Components/Templates/UserHouses/UserHouses";
import UserSingleHouse from "./Components/Templates/UserSingleHouse/UserSingleHouse";
import Search from "./Components/Templates/Search/Search";
import NotFound from "./Components/Templates/NotFound/NotFound";

function App() {
    const [user, setUser] = useState(null);
    const [location, setLocation] = useState(null);

    return (
        <>
            <LocationContext.Provider value={{ location, setLocation }}>
                <UserContext.Provider value={{ user, setUser }}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/addnewhouse"
                            element={
                                <PrivateRoute>
                                    <AddNewHouse />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/:userID/myhouses"
                            element={
                                <PrivateRoute>
                                    <UserHouses />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/:userID/myhouses/:userHouseID"
                            element={
                                <PrivateRoute>
                                    <UserSingleHouse />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/houses/:houseID"
                            element={<SingleHouse />}
                        />
                        <Route
                            path="/search/:searchParam"
                            element={<Search />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </UserContext.Provider>
            </LocationContext.Provider>
        </>
    );
}

export default App;
