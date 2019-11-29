import * as actionType from "../Actions/actionTypes";

const GET_PRODUCTS = (state = {}, action) =>{
    switch(action.type){
        case actionType.GET_PRODUCTS:
            console.log("inside reducer"  , action.products)
        return({
            ...state ,
            products: action.products
        })
        default :
        return state
    }
 }

export  default GET_PRODUCTS