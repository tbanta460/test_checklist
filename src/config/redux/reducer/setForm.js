const initState = {
	login:{
		username:"",
		password:"",
	},
	register:{
		username:"",
		email:"",
		password:"",
	
	},
	createList: {
		title: "",
		image:null,
		sinopsis:"tes",
		genres:[]
	},
	
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
		case "SET_FORM_CREATELIST":{
			return{
				...state,
				createList: {
					...state.createList,
					[action.formType]: action.formValue
				}
			}
		}
		default:
		return state
	}
}