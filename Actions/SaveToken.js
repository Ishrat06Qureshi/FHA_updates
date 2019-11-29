import * as actionTypes from "./actionTypes";

const SaveToken  = ( token ) => {
 return ({
     type:actionTypes.SAVE_TOKEN,
     token
 })
}

export default SaveToken