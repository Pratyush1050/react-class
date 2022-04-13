import login from "../assets/images/login.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitterSquare,
	faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Login = () => {
	const [identifier, setIdentifier] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

		await axios
			.post("/api/auth/local", {
				identifier,
				password,
			})
			.then((response) => {
				console.log(response);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				alert(error.message);
			});
	};
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-7 col-lg-5">
					<div className="wrap">
						<div
							className="img"
							style={{ backgroundImage: `url(${login})` }}
						></div>
						<div className="login-wrap p-4 p-md-5">
							<div className="d-flex">
								<div className="w-100">
									<h3 className="mb-4">Sign In</h3>
								</div>
								<div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<a
											href="#"
											className="social-icon d-flex align-items-center justify-content-center"
										>
											<span>
												<FontAwesomeIcon icon={faFacebookF} />
											</span>
										</a>
										<a
											href="#"
											className="social-icon d-flex align-items-center justify-content-center"
										>
											<span>
												<FontAwesomeIcon icon={faTwitterSquare} />
											</span>
										</a>
									</p>
								</div>
							</div>
							<form action="#" className="signin-form">
								<div className="form-group mt-3">
									<input
										type="text"
										className="form-control"
										required
										onChange={(e) => setIdentifier(e.target.value)}
									/>
									<label className="form-control-placeholder" For="username">
										Username
									</label>
								</div>
								<div className="form-group">
									<input
										id="password-field"
										type="password"
										className="form-control"
										required
										onChange={(e) => setPassword(e.target.value)}
									/>
									<label className="form-control-placeholder" for="password">
										Password
									</label>
									<span
										toggle="#password-field"
										className="fa fa-fw fa-eye field-icon toggle-password"
									></span>
								</div>
								<div className="form-group">
									<button
										type="submit"
										className="form-control btn btn-primary rounded submit px-3"
										onClick={submitHandler}
									>
										Sign In
									</button>
								</div>
								<div className="form-group d-md-flex">
									<div className="w-50 text-left">
										<label className="checkbox-wrap checkbox-primary mb-0">
											Remember Me
											<input type="checkbox" checked />
											<span className="checkmark"></span>
										</label>
									</div>
									{/* <div className="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div> */}
								</div>
							</form>
							<p className="text-center">
								Not a member? <Link to="/register">Sign Up</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
