class LoadingAction {
  static LOADING_ON = "LOADING_ON"
  static LOADING_OFF = "LOADING_OFF"

  static LOADING_ON_ACTION = ( loadingState) => {
   return({
       type:this.LOADING_ON,
       loadingState
   })
  }

  static LOADING_OFF_ACTION =  ( loadingState ) => {
   return({
       type:this.LOADING_OFF,
       loadingState
   })
  }
} 

export default LoadingAction