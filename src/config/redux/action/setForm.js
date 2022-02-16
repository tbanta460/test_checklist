import Axios from 'axios';

export const setLogin = (formType, formValue) => {
	return {
		type: "SET_FORM_LOGIN", formType, formValue
	}
}

export const setRegister = (formType, formValue) => {
	return{
		type: "SET_FORM_REGISTER", formType, formValue
	}
}
export const createNewList = (formType, formValue) => {
	return {
		type:"SET_FORM_CREATELIST", formType, formValue
	}
}

export const loginPost = (dataUser, path) => {
	
	return new Promise((resolve,reject) => {
		const objData = {}
		objData["username"] = dataUser.username;
		objData["password"] = dataUser.password;
		Axios.post(`http://94.74.86.174:8080/api/login`,objData,{
			headers:{
				'Content-Type':'application/json'
			}
		})
		.then(data => {
			console.log(data, "from setform")
			resolve(data)
		})
		.catch(error => {
			reject(error.response)
			
		})
	})
}
export const registerPost = (dataUser) => {
	return new Promise((resolve,reject) => {
		const objData = {}
		objData["username"] = dataUser.username
		objData["email"] = dataUser.email
		objData["password"] = dataUser.password
		console.log(objData, "From register post")
		Axios.post(`http://94.74.86.174:8080/api/register`, objData, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(data => {
			console.log(data, "from register post")
		})
		.catch(error => {
			console.log(error.response, "from register post");
			reject(error.response)
		})
	})
}

export const getData = (idUser) => {
	return new Promise((resolve, reject) => {
		Axios.get(`/dashboard/${idUser}`)
			.then(data => {
				resolve(data)
			})
			.catch(error => {
				reject(error.response)
		})	
	})
	
}
export const getAllData = (url) => {
	return new Promise((resolve, reject) => {
		Axios.get(url)
		.then(data => {
			console.log(data, "kwokwokw")
			resolve(data)
		})
		.catch(error => {
			console.log('masuk sini')
			reject(error.response)
		})
	})
}


