import TokenAction from "../Actions/tokenAction";
import SaveError from "../Actions/errorAction"
import OrderHistory from "../Actions/OrderHistory";
import axios from "axios";
import DeleteItem from "../Actions/EmptyOrder"
const SaveOrderMiddleware = ( data ) => {
  
    const { createdBy , shippingAddress,productDetail , orderConformation  } = data
        return ( dispatch ) => {
                        
                        return axios.post(`http://13.59.64.244:3000/api/order`, { createdBy , shippingAddress, productDetail}  ) 
                        .then(( response ) =>  
                        {   
                            dispatch( OrderHistory.ADD_HISTORY( response.data))
                            dispatch(DeleteItem())
                            orderConformation()
                        }).catch ( err => {
                            console.log( err.response.data.message)
                            dispatch( SaveError( {message:err.response.data.message}))
                    
                        })
                    } 
}

export default SaveOrderMiddleware