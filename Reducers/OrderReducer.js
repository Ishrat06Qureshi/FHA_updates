import * as actionTypes from "../Actions/actionTypes";



const initialOrderState = {
    items:[]
}
const orderReducer = ( state = initialOrderState, action ) => {
 switch(action.type) {
     case actionTypes.SAVE_ITEMS : {
         
         let alreadyExist = state.items.find( item => item.productId === action.item.productId)
         if( alreadyExist ) {
             newArray = state.items.filter( item => item.productId !== action.item.productId)
             alreadyExist.quantity = parseInt(alreadyExist.quantity) + parseInt(action.item.quantity)
             newArray.push(alreadyExist)
             return({
                 ...state,
                 items:[...newArray]
             })
         }

         else {
             return({
                 ...state,
                 items:[...state.items, action.item]
             })
         }

      
          
          
          
     }
     case actionTypes.EMPTY_ITEMS : {
        return({
            ...state,
            items: []
        })
    }
     default:
         return state 
 }
}
export default orderReducer 