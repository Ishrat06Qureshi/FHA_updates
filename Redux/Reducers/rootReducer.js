import { combineReducers } from "redux"
import loadingReducer from "./LoadingReducer";
import getProductReducer from "./getProductReducer"

const rootReducer  = combineReducers({
    loadingReducer,
    getProductReducer
})

export default rootReducer
