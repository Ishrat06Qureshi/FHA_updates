

class  SaveCommentAction  {
    static SAVE_COMMENT = "SAVE_COMMENT";
  
    static SAVE_COMMENT = ( comment ) => {
        console.log("comment in action" , comment)
        return ({
            type:this.SAVE_COMMENT,
            comment
        })
    }
  }
  export default SaveCommentAction