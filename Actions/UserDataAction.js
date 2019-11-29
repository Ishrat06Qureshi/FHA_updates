class UserDataAction {
  static SAVE_USER_DATA = "SAVE_USER_DATA";
  static EDIT_PROFILE = "EDIT_PROFILE";

  static SAVE_USER_DATA_ACTION = ( UserData ) => {
   return({
       type:this.SAVE_USER_DATA,
       UserData
   })
  }
  static EDIT_PROFILE = ( checklist ) => {
    return({
        type:this.EDIT_PROFILE,
        checklist
    })
   }
}
export default UserDataAction