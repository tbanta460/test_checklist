import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

import {NotFound} from '../../../assets'
const PageNotFound = ({text}) => {
	const navigate = useNavigate();
	const handleEvent = () => {
		navigate(`/browse`);
	}
	return(
		<>
			<div className="not-found">
				<img src={NotFound} alt="Not Found"/>
				<h3>{text}</h3>
				<span onClick={handleEvent}>Back To Home</span>
			</div>
		</>
	)
}

export default PageNotFound