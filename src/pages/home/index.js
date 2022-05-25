import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {
	const navigate = useNavigate();
	useEffect(() => {
		
		navigate('/login')
	}, [])
	return (
		<>
			<h1> This Is Home </h1>
		</>
	)
	
}
export default Home