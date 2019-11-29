import * as ActionTypes from "../Actions/actionTypes"

function loadingReducer (state= {} , action){
   switch(action.type){
       case ActionTypes.LOADING:
       return {isLoading:action.isLoading}
       default:
       return state
   }
}
export default loadingReducer