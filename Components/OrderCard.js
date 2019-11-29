import React , {  Component } from "react";
import { Card, CardItem} from "native-base";
import { Text  , View, FlatList , Animated } from "react-native"
import { bold_Text} from "../Styles";
import OrderHeading from "./orderHeading";
import OrderDetails from "./OrderDetails";
import Modal from "react-native-modal";
import CustomHorizontalText from "./CustomHorizontalText";
import { withNavigation } from "react-navigation"
import  { 
 
    Entypo,
    AntDesign,
    MaterialIcons
  
} from "@expo/vector-icons"

 class  OrderCard extends Component   {
    state = {
        viewMore : false,
        animation   : new Animated.Value(),
        expanded    : true,
      };

    closeModal = () => {
        this.setState(({ isModalVisible:false}))
      }
      openModal = () => {
        console.log("open Modal")
        this.setState(({ isModalVisible:true}))
       
      }
      _renderItem = ({item }) => {
        const { orderDetails } = this.props 
         console.log("order details in order card" , orderDetails)
         console.log("item" , item )
      return(<View>
          <Text style = {{ paddingLeft:25}}>{item.description}</Text>
                    <View style = { { paddingLeft:25}}>
                        <CustomHorizontalText
                        label = "Product Code"
                        text = {item.productCode}
                        />
                         <CustomHorizontalText
                        label = "Unit of Measure"
                        text = "foot"
                        />
                          <CustomHorizontalText
                        label = "Quantity"
                        text = {orderDetails.productDetail.find( product => product.productID === item.id ).quantity}
                        />
                    </View>
      </View>)
    }
    render() {
        const { 
            // productCode ,
            // productDescription, 
            createdDate, 
            shippingAddress ,
            // quantity,
            poNumber, 
           } = this.props.orderDetails
            const { orderDetails } = this.props
          return( 
              <View>   
                <Card style = {{ borderRadius:15 , height:200}}>
            
                            <View style = {{ flexDirection:"column" }}>
                                <OrderHeading
                                poNumber  = { poNumber}
                                onPressMethod = { () => this.props.navigation.navigate("NewOrderDetails", { orderDetails}) }
                                label = "View more"
                                />
                                <View style ={{ flexDirection:"row" , paddingLeft:10}}>
                                        <MaterialIcons
                                        name="date-range"
                                        size = {20} 
                                        color = "orange"
                                        />
                                    <View>
                                        <Text style = {{ ...bold_Text , paddingLeft:10}}> Date Of Order </Text>
                                        <Text style = {{ paddingLeft:15}}>{createdDate.slice(0,10)}</Text>
                                     </View>
                                </View>
                                
                                <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                                        <Entypo
                                                        name = "address" 
                                                        size = {20} 
                                                        color = "orange"/>
                                            <View>
                                              <Text style = {{ ...bold_Text , paddingLeft:10} }>Shipping Address</Text>
                                              <Text style = {{ paddingLeft:15}} numberOfLines= {0.5}>{shippingAddress}</Text>
                                            </View> 
                                 </View>

                            <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                                        <AntDesign
                                                        name = "shoppingcart" 
                                                        size = {20} 
                                                        color = "orange"/>
                                            <View>
                                               <Text style = {{ ...bold_Text , paddingLeft:10} } >Items </Text>
                                             </View> 
                            </View>
                                <FlatList
                                data = { this.props.orderDetails.Product}
                                renderItem = { this._renderItem}
                                />
                            </View>
            </Card>
</View>)}


     
    
}


export default withNavigation(OrderCard)