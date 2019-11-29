import * as actionTypes from "../Actions/actionTypes";
 
const SaveError = (  error ) => {
    return ({
        type:actionTypes.SAVE_ERROR,
        error
    })
   }
   
   export default SaveError