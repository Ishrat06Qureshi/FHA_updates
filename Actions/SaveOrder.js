class  SaveOrderAction  {
    static SAVE_ORDER = "SAVE_ORDER";
  
    static SAVE_ORDER = ( order ) => {
        return ({
            type:this.SAVE_ORDER,
            order
        })
    }
  }
  export default SaveOrderAction