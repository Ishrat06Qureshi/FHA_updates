import UserDataAction from "../Actions/UserDataAction";

const UserDataReducer = ( state = {} , action ) => {
  switch(action.type) {
    case UserDataAction.SAVE_USER_DATA:{
      const [ lineOne , city ,  province , postalCode ] = action.UserData.officeAddress.split(",")
      
        return({
            ...state,
            UserData:{
              ...action.UserData,
              lineOne,
              city,
              province,
              postalCode
            }
        })
    }

    case UserDataAction.EDIT_PROFILE:{
         let updatedFields = {}
     
            Object.keys(state.UserData).map(( updatedData) => { 
             const Get_updated = action.checklist.find( element => element.key === updatedData )
        
        if ( Get_updated ) {
          updatedFields[Get_updated.key]  = Get_updated.value
            }
           
        })
          
      
        return({
            ...state,
            UserData:{
              ...state.UserData,
             ...updatedFields
            }
        })
    }

    default:
        return state 
  }
}

export default UserDataReducer