import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState({});
	const [newAccesToken, setNewAccesToken] = useState({})
	const [presist, setPresist] = useState( false);

	return(
		<AuthContext.Provider value={{auth, setAuth, presist, setPresist, newAccesToken, setNewAccesToken}}>
			{children}
		</ AuthContext.Provider>
	)
}

export default AuthContext
