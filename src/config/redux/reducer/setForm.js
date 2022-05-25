const initState = {
	login:{
		username:"",
		password:"",
	},
	register:{
		username:"",
		fullname:"",
		email:"",
		password:"",
		confirmpassword:""
	},
	createBook: {
		title: "",
		image:null,
		sinopsis:"tes",
		genres:[]
	},
	imagepreview: null
	
}

export const SetForm = (state = initState, action) => {
	switch(action.type){
		case "SET_FORM_LOGIN":
		return{
			...state,
			login:{
				...state.login,
				[action.formType]: action.formValue
			}
		}
		case "SET_FORM_REGISTER":
		return{
			...state,
			register:{
				...state.register,
				[action.formType]:action.formValue
			}
		}
		case "SET_FORM_CREATEBOOK":{
			return{
				...state,
				createBook: {
					...state.createBook,
					[action.formType]: action.formValue
				}
			}
		}
		case "SET_IMAGEPREVIEW": {
			return {
				...state,
				imagepreview: action.data
			}
		}
		default:
		return state
	}
}