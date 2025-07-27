import { useEffect, useState } from "react";
import useAuth from "./context/AuthContext";

export default function CheckAuthStudent({ children }) {
	const [valid, setValid] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
		async function getData() {
			if (user.token) {
				setValid(true);
			}
		}
		getData();
	}, []);
	return valid ? <>{children}</> : <h1>Unauthorized</h1>;
}
