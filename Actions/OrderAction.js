import * as actionTypes from "../Actions/actionTypes";
 
const SaveItem = ( item ) => {
    return ({
        type:actionTypes.SAVE_ITEMS,
        item
    })
   }
   
   export default SaveItem