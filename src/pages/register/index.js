import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setRegister, registerPost} from '../../config/redux/action/setForm.js';
import './index.css';
// Image
import { Logo } from '../../assets'
// Components
import { Gap, Input, Button, Error} from "../../components"
const Register = () => {
	const [error, setError] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {register} = useSelector(state => state.SetForm);
	const {username, email, password, fullname, confirmpassword} = register;
	const handleClickRegister = () => {
		if(password.length > 5){
			registerPost(register)
			.then(data => {
				navigate('/login')
			})
			.catch(error => {
				console.log(error, "from erro")
				setError(error.data.message)
			})
		}else {
			setError("password, Tolong masukkan minimal karakter 5")
		}
		dispatch(setRegister("username", ""))
		dispatch(setRegister("fullname", ""))
		dispatch(setRegister("email", ""))
		dispatch(setRegister("password", ""))
		dispatch(setRegister("confirmpassword", ""))
		
	}
	return (
		<>
			<div className="mcr">
				<div className="part-register">
					<div className="part-image">
						<img src={Logo} alt="image register"/>
						<Gap isStyle="h-4" />
						<span>Selamat Bergabung </span>
					</div>
					{
						Object.keys(error).length !== 0 ? <Error message={error} /> : null
					}
					<form className="part-input">
						<Input value={username}onChange={e => dispatch(setRegister("username", e.target.value))}titleLabel="UserName:" typeInput="text" forId="username" idInput="username" placeHolder="UserName"/>
						<Gap isStyle="h-2"/>
						<Input value={fullname}onChange={e => dispatch(setRegister("fullname", e.target.value))}titleLabel="FullName:" typeInput="text" forId="fullname" idInput="fullname" placeHolder="FullName" />
						<Gap isStyle="h-2"/>
						<Input value={email}onChange={e => dispatch(setRegister("email", e.target.value))}titleLabel="Email:" typeInput="email" forId="email" idInput="email" placeHolder="Email" />
						<Gap isStyle="h-2"/>
						<Input value={password}onChange={e => dispatch(setRegister("password", e.target.value))}titleLabel="Password:" typeInput="password" forId="password" idInput="password" placeHolder="Password"/>
						<Gap isStyle="h-2"/>
						<Input value={confirmpassword}onChange={e => dispatch(setRegister("confirmpassword", e.target.value))}titleLabel="ConfirmPassword:" typeInput="password" forId="confirmPassword" idInput="confirmPassword" placeHolder="ConfirmPassword" />
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