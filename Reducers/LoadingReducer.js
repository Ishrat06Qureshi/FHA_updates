import loadingAction from "../Actions/LoadingAction";

const loadingReducer  = ( state = {} , action ) =>  {
 switch ( action.type ) {
     case loadingAction.LOADING_ON:
         return ({
             ...state,
             loadingState:action.loadingState
         })
    case loadingAction.LOADING_OFF:
        return({
            ...state,
            loadingState:action.loadingState
        })

   default:
       return state 
 }
}

export default loadingReducer