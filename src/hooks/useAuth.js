import { createContext, useContext, useState } from "react";
import axios from "axios";

const UserContext = createContext({
	user: null,
	login: (identifier, password) => undefined,
	signup: (username, email, password) => undefined,
	error: null,
	loading: false,
	logout: () => undefined,
});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const login = (identifier, password) => {
		setLoading(true);
		axios
			.post("/api/auth/local", {
				identifier,
				password,
			})
			.then((data) => {
				setUser(data.user);
				// navigate("/");
			})
			.catch((error) => {
				// console.log(error);
				// alert(error.message);
				setError(error.message);
				setUser(undefined);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const signup = (username, email, password) => {
		setLoading(true);
		axios
			.post("/api/auth/local/register", {
				username,
				email,
				password,
			})
			.then((data) => {
				setUser(data.user);
				// navigate("/");
			})
			.catch((error) => {
				// console.log(error);
				// alert(error.message);
				setError(error.message);
				setUser(undefined);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<UserContext.Provider value={{ user, login, signup, error, loading }}>
			{children}
		</UserContext.Provider>
	);
};

const useAuth = () => {
	useContext(UserContext);
};

export default useAuth;
