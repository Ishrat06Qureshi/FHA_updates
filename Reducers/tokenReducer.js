import TokenAction from "../Actions/tokenAction";

const tokenReducer = ( state = {} , action ) => {
 switch(action.type) {
     case TokenAction.TOKEN_SAVE : {
         return({
             ...state,
             token: action.token
         })
     }

     default:
         return state 
 }
}
export default tokenReducer 