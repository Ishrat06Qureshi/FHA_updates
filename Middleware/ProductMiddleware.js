 import LOADING  from "../Actions/LoadingAction"
 import axios from "axios";
 import { GET_PRODUCTS  }from "../Actions/ProductsAction"
 const productMiddleware = ( dispatch , skippedProducts  ) => {
  console.log("product Middle Ware")
   return () => {
       return fetch(`http://13.59.64.244:3000/api/products?noOfRecords=10&${skippedProducts}`).
        then(( response ) => {
          console.log("response")
         return( dispatch( GET_PRODUCTS (response.data)))
                
         
      }).catch ( err =>  console.log( err ))
   }
}
export default  productMiddleware 