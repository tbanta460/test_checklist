import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setRegister, registerPost} from '../../config/redux/action/setForm.js';
import './index.css';

 // Components
import { Gap, Input, Button} from "../../components"
const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {register} = useSelector(state => state.SetForm);
	const {username, email, password} = register;
	const handleClickRegister = () => {
		registerPost(register)
		.then(data => {
			console.log('Berhasil', data)
		})
		.catch(error => {
			console.log(error, "From register")
		})
	}
	return (
		<>
			<div className="mcr">
				<div className="part-register">
					<div className="part-image">
						<Gap isStyle="h-4" />
						<span>Selamat Bergabung </span>
					</div>
					<form className="part-input">
						<Input value={username}onChange={e => dispatch(setRegister("username", e.target.value))}titleLabel="UserName:" typeInput="text" forId="username" idInput="username" placeHolder="UserName"/>
						<Gap isStyle="h-2"/>
						<Input value={email}onChange={e => dispatch(setRegister("email", e.target.value))}titleLabel="Email:" typeInput="email" forId="email" idInput="email" placeHolder="Email" />
						<Gap isStyle="h-2"/>
						<Input value={password}onChange={e => dispatch(setRegister("password", e.target.value))}titleLabel="Password:" typeInput="password" forId="password" idInput="password" placeHolder="Password"/>
						<Gap isStyle="h-2"/>
					</form>
					<Gap isStyle="h-2"/>
					<div className="part-btn">
						<Button title="Register" type="submit" iSstyle="btn-green" onClick={handleClickRegister}/>
						<span onClick={() => navigate('/login')}>Sudah Memiliki Akun?</span>
					</div>
				</div>
			</div>
		</>
	)
	
}
export default Register