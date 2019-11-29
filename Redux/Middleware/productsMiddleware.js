import axios from "axios";
import Loading from "../Actions/LoadingAction";
import Product_fetch from "../Actions/ProductsAction";
// const productMiddleware =  ( dispatch,skippedProduct ) => {
//     console.log("inside middleware")
//     return ( dispatch) => {
//         // dispatch(Loading(true))
//       return  axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0`).
//        then((response )=> {
//            console.log("response" ,response)
//         //    dispatch(Loading(false))
//         //    dispatch(Product_fetch(response.data))
//        }).catch( err => console.log( err.response.data ))
//     }
  
// }


const productMiddleware = () => {
    console.log("product Middleware")
    
}

export default productMiddleware 