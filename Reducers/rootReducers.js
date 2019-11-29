import { combineReducers } from "redux";

import loadingReducer from "./LoadingReducer";
import UserDataReducer from "./userDataReducer";
import tokenReducer  from "./tokenReducer";
import orderReducer  from "./OrderReducer"
import ErrorReducer from "./errorReducer";
import OrderHistoryReducer from "./OrderHistory";
import commentReducer from "./CommentReducers"
 const rootReducer = combineReducers ({
     loadingReducer,
     UserDataReducer,
     tokenReducer,
     orderReducer,
     ErrorReducer,
     OrderHistoryReducer,
     commentReducer
})

export default rootReducer