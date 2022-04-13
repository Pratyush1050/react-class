import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import SignUpImage from "../assets/images/signup-image.jpg";
import "./Register.css";
const Register = () => {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const onChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		await axios
			.post("/api/auth/local/register", {
				username,
				email,
				password,
			})
			.then((response) => {
				console.log(response);
				navigate("/login");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="container mt-3">
			<div className="signup-content">
				<div className="signup-form">
					<h2 className="form-title">Sign up</h2>
					<form method="POST" className="register-form" id="register-form">
						<div className="form-group">
							<label htmlFor="name">
								<i className="zmdi zmdi-account material-icons-name"></i>
							</label>
							<input
								type="text"
								name="username"
								id="name"
								placeholder="UserName"
								onChange={onChangeUsername}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">
								<i className="zmdi zmdi-email"></i>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your Email"
								onChange={onChangeEmail}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="pass">
								<i className="zmdi zmdi-lock"></i>
							</label>
							<input
								type="password"
								name="password"
								id="pass"
								placeholder="Password"
								onChange={onChangePassword}
							/>
						</div>
						<div className="form-group form-button">
							<button onClick={submitHandler}> Submit</button>
						</div>
					</form>
				</div>
				<div className="signup-image">
					<figure>
						<img src={SignUpImage} alt="sign up" />
					</figure>
					<Link to="/login" className="signup-image-link">
						I am already member
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Register;
