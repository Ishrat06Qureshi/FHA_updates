import * as actionTypes from "../Actions/actionTypes";
 
const EditProfile = (  UpdatedData ) => {
    // const obj = Object.fromEntries(checklist.map(item => [item.key, item.value]));
    // console.log("obj",obj);
   
    return ({
        type:actionTypes.EDIT_PROFILE,
        UpdatedData
    })
   }
   
   export default  EditProfile 