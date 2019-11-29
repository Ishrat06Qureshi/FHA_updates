import React  , { Component } from "react";
import { View , Text , FlatList , TouchableOpacity  } from "react-native";
import OrderCard from "./OrderCard"
import {  Heading_style } from "../Styles";
import { Card , Spinner } from "native-base";
import axios from "axios"
import {  connect } from "react-redux"
import { NavigationEvents } from 'react-navigation';
import SaveOrderHistoryMiddleware from "../Middleware/SaveOrderHistoryMiddleware"

 class OrderList extends Component {
    state = {
        data:[],
        isLoading:""
    }
    OnLoader = () => {
        this.setState(({ isLoading:true}))
    }
    OffLoader = () => {
      console.log("is loader off")
      this.setState(({ isLoading:false}))
    }
    
    FetchOrder = () => {
      const { id } = this.props.userData
      axios.get(`http://13.59.64.244:3000/api/userorder/${id}`).
      then(( response) => this.setState(({ data:response.data , isLoading:false}))).
      catch( err => console.log(err.response.data) )
    }
    
  componentDidMount () {
    const { id } = this.props.userData
    const data = {
      id, 
      OnLoader:this.OnLoader,
      OffLoader:this.OffLoader,
    }
     this.props.LoadOrders( data )
    }

_renderItem = ({item}) => {
  
    return(    
    <OrderCard
      orderDetails = {item}
      label = "View Details"
    />)
}
    render() {
        const {isLoading } = this.state
        const { Orders } = this.props
        return( <View style = {{ flex:1 , justifyContent:"center"}}>
        <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
        <Text style = { Heading_style }> Your Orders</Text>
        </View>
         
          {isLoading ? <Spinner color = "red"/> :
            <FlatList
         data = {  Orders }
         renderItem = { this._renderItem}
         keyExtractor = {(item, index) => item+index}
        />}  
         
    </View> )
    }
        
}
 

const mapStateToProps = ( state ) => {

  console.log("state" , state)
  return({
    userData:state.UserDataReducer.UserData,
    Orders:state.OrderHistoryReducer.Orders
  })
}

const mapDispatchToProps = ( dispatch ) => {
  return({
    LoadOrders:( data ) => dispatch(SaveOrderHistoryMiddleware( data )) 
  })
}
export default connect( mapStateToProps , mapDispatchToProps )(OrderList)
