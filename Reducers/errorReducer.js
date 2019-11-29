import * as actionTypes from "../Actions/actionTypes";

const initialOrderState = {
    error:{ isError:false,
        message:""}  
    
}
const ErrorReducer = ( state = initialOrderState, action ) => {
 switch(action.type) {
     case actionTypes.SAVE_ERROR : {
         console.log(action)
         return({
             ...state,
             error:{  isError:true,
                message:action.error.message}
            
             
         })
     }
   
     default:
         return state 
 }
}
export default ErrorReducer