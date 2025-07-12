import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

export default function useAuth() {
	return useContext(authContext);
}

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({ username: "", token: "", role: "" });

	return (
		<authContext.Provider value={{ user, setUser }}>
			{children}
		</authContext.Provider>
	);
}
