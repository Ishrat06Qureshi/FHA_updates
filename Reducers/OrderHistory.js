import OrderHistory from "../Actions/OrderHistory";

const initialState = {
    Orders:[]
}
const OrderHistoryReducer = ( state = initialState , action ) => {
    
  switch( action.type) {
      case OrderHistory.SAVE_HISTORY:{
          return({
              ...state,
              Orders:action.history
          })
      }
      case OrderHistory.ADD_HISTORY :{
          return({
               ...state,
               Orders:[...state.Orders , action.history]
          })
      }
      default:{
           return({...state})
      }
  }
}

export default OrderHistoryReducer 
