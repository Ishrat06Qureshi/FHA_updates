import * as ActionTypes from "../Actions/actionTypes";
function getProductReducer (state={}, action){
    console.log("data inside the reducer", action.products )
   switch(action.type){
       case ActionTypes.PRODUCTFETCH:
       return {...state ,
        products: action.products}
       default:
       return {...state } 
   }
}
export default getProductReducer