import * as action_Types from "./actionTypes";


const Loading_Action =  ( isLoading ) => {
  return({
      type : action_Types.LOADING,
      isLoading,
  })
}

export default Loading_Action 