import React from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { setLogin,loginPost } from '../../config/redux/action/setForm.js';

import './index.css';
// components
import { Button, Input,Gap } from '../../components';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {login} = useSelector(state => state.SetForm);
	const {username, password} = login;
	const checkToken = async (accessToken) => {
		let newAccessToken = accessToken
		if(!accessToken){
			alert("Gagal Login");
			return null
		}
		navigate('/dashboard')
	}
	const handleClickLogin = () => {
		loginPost(login)
		.then(async data => {
			console.log(data.data.data.token, "from login");
			const accessToken = data.data.data.token
			checkToken(accessToken);
		})
		.catch(error => {
			console.log(error,"data error login")
		})
	}
	return (
		<>
			<div className="mcl">
				<div className="main-login">
					<div>
						<Gap isStyle="h-4"/>
						<span className="ml-wel">Selamat Datang</span>
					</div>
					<form className="ml-part-input" method="POST" enctype="multipart/form-data">
						<Input titleLabel="UserName:" forId="username" idInput="username" placeHolder="UserName" typeInput="text" value={username} onChange={e => dispatch(setLogin("username", e.target.value))}/>
						<Gap isStyle="h-2" />
						<Input value={password}onChange={e => dispatch(setLogin("password", e.target.value))}titleLabel="Password:" forId="password" idInput="Password" placeHolder="Password" typeInput="password"/>
					
						<Gap isStyle="h-2" />
						
					</form>
					<div className="button-bbtn">
							<Button title="Masuk" iSstyle="btn-blue" onClick={handleClickLogin}/>
							<span onClick={() => navigate('/register')}>Belum Memiliki Akun?</span>
						</div>
				</div>
			</div>
		</>
	)
	
}
export default Login