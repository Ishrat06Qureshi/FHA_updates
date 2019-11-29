import * as actionType from "../Actions/actionTypes";

const Product_fetch = (  products ) => {
    console.log( "data inside the action", products )
  return ({
      type:actionType.PRODUCTFETCH,
      products 
  })
}

export default Product_fetch 