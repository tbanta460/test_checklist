import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Element
import {Login, Register, Dashboard} from "../../pages";
// Component
const Routess = () => {
	
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	)
}

export default Routess