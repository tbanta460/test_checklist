import React, { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getAllData} from '../../config/redux/action/setForm.js';
import Axios from 'axios';

import './index.css';
const Dashboard = () => {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<>
			<div className="dashboard">
				<h1>Berhasil Login</h1>
			</div>
		</>
	)
}
export default Dashboard