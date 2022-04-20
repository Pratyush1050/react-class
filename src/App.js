import Nav from "./components/Nav";
import useAuth from "./hooks/useAuth";

function App() {
	// console.log("REACT_APP_BASE_API_URL===", process.env);
	const { user } = useAuth();
	return <Nav />;
}

export default App;
