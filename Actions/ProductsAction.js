import * as ActionType from "./actionTypes"
export const GET_PRODUCTS = ( products ) => {
  return ({
     type:ActionType.GET_PRODUCTS,
     products
  })
}