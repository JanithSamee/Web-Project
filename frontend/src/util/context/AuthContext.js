import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext(null);

export default function useAuth() {
	return useContext(authContext);
}

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({ username: "", token: "", role: "" });

	useEffect(() => {
		const token = localStorage.getItem("token");
		console.log("auth context");
		if (token) {
			setUser({ username: "", token: token, role: "" });
		}
	}, []);

	return (
		<authContext.Provider value={{ user, setUser }}>
			{children}
		</authContext.Provider>
	);
}
