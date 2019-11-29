class TokenAction {
  static TOKEN_SAVE = "TOKEN_SAVE";

  static TOKEN_SAVE_ACTION = ( token ) => {
      return ({
          type:this.TOKEN_SAVE,
          token
      })
  }
}
export default TokenAction