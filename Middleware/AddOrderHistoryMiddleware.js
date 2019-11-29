import TokenAction from "../Actions/tokenAction";
import SaveError from "../Actions/errorAction"
import OrderHistory from "../Actions/OrderHistory";
import axios from "axios";
const AddOrderHistory = ( data ) => {
    console.log( data )
    const { id,OnLoader,OnLoaderOff  } = data
        return ( dispatch ) => {
                           OnLoader()
                        return axios.post(``  ) 
                        .then(( response ) =>  
                        {   
                            
                           
                            dispatch( OrderHistory.SAVE_HISTORY( response.data))
                            OnLoaderOff()
                        }).catch ( err => {
                            console.log( err.response.data.message)
                            
                            dispatch( SaveError( {message:err.response.data.message}))
                            OnLoaderOff()
                        })
                    } 
}

export default AddOrderHistory