import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Nav = () => {
	return (
		<>
			<div className="d-flex flex-row justify-content-end shadow p-3">
				<ul className="nav">
					<li className="nav-item" style={{ margin: "10px" }}>
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item" style={{ margin: "10px" }}>
						<Link to="/login">Login</Link>
					</li>
					<li className="nav-item" style={{ margin: "10px" }}>
						<Link to="/register">Register</Link>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
};
export default Nav;
