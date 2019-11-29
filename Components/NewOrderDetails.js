import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomTextWithIcon from "./CustomTextWithIcon";
import CustomText from "./CustomText"
import * as Styles from "../Styles";
import  { 
    Entypo,
    AntDesign, 
    Feather
} from "@expo/vector-icons"

const  NewOrderDetails  = ( props ) => {
    const  {orderDetails} = props.navigation.state.params
    
    return( <View style = { Styles.newContainer}>
            
           <View style = {{ flex:1.5 , marginTop:50}}>
               <View style = {{ alignSelf:"center"}}>
               <Text style = {Styles.Heading_style }> Order Details </Text>
               </View>
                      
              <View>
               <View style = {{ flexDirection:"row"}}>
                  <Text>Po Number</Text>
                  <Text>{orderDetails.poNumber}</Text>
              </View>
              </View>
             
             
               <CustomTextWithIcon
                 IconComponent = {() =>  <AntDesign name= "barcode" size = {25}  color = "orange"/>}
                 label = "Customer Number"
                 text = {orderDetails.User.customerNumber }
               />

                 <CustomTextWithIcon
                  IconComponent = {() =>    <Entypo name = "calendar" size = {20} color = "orange"/>}
                  label = "Date of Order"
                  text = {orderDetails.createdDate.slice(0,10)}
               />
               <CustomTextWithIcon
                  IconComponent = {() =>    <Entypo name = "address" size = {20} color = "orange"/>}
                  label = "Shipping Address"
                  text = {orderDetails.shippingAddress}
               />
              
              
               
            
          </View>
          <View style = { { flex:3}}>
                 <CustomTextWithIcon
                  IconComponent = {() =>    <Feather name = "shopping-cart" size = {20} color = "orange"/>}
                  label = "List of Items"
                  text = ""/>
                  <ScrollView>
                      {orderDetails.productDetail.map(( item , index) => {
                          return(   <View 
                            style = {{ 
                              
                                  height:50 ,
                                   width:"100%",
                                   flexDirection:"row" ,
                                   justifyContent:'space-around'}} key= {item+index}>
                            <CustomText
                                  label = "Product Code"
                                  text = {item.productCode}/>
                              
                    
                              <CustomText
                                  label = "Quantity"
                                  text = {item.quantity}/>
                              <CustomText
                                  label = "UOM"
                                  text = { item.UOM}
                              />
      
                            </View> )
                      })}
                    
                    

                  </ScrollView>

          </View>



    </View>)

}



export default NewOrderDetails 