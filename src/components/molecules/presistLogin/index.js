import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';
import RequestAccess from '../../../config/midleware/requestAccess.js';
import RefreshToken from '../../../config/midleware/refreshToken.js';
import useCookie from '../../../hooks/useCookies';

const PresistLogin = () => {
	const {auth, setAuth} = useAuth();
	const [isLoading, setIsLoading] = useState(true);
	const getCookies = useCookie();
	useEffect(() => {
		let isMount = true;
		const verifyToken = async () => {
			try{
				const response = await getCookies();
				if(response.success){
					const {refToken} = await RefreshToken(response.token);
					const resultFromRequestAccess = await RequestAccess(refToken);
					const {fullname, userId} = resultFromRequestAccess.data.data
					setAuth(prev => {
						return{
							...prev,
							fullname,
							userId,
							login:true,
							accessToken:refToken
						}
					})	
				}else{
					setAuth({login:false})
				}
			}catch(error){
				setAuth({login:false})
			}finally{
				isMount && setIsLoading(false)
			}
		}
		!auth.accessToken ? verifyToken() : setIsLoading(false)
		return () => isMount = false 
	}, [])
	return(
		<>
			{
				isLoading 
					?<h1>...Sedang Loading</h1>
					:<Outlet />

			}
		</>
	)
}
export default PresistLogin