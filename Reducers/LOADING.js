import * as actionType from "../Actions/actionTypes";


const Loading = ( state = {} , action ) => {
   switch ( action.type ) {
       case actionType.LOADING: {
           return({
               ...state , 
               isloading: action.isloading
           })
       }
       default:
           return state 
   }
}
export default Loading