import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Pricing from "../Pages/Pricing";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from './PrivateRoute';

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/pricing" element={<PrivateRoute><Pricing /></PrivateRoute>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    )
}

export default AllRoutes;