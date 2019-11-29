import React from "react";
import { View , Text , ScrollView } from "react-native";
import { Card } from "native-base";
import { bold_Text} from "../Styles";
import CustomText from "./CustomText"
import  { 
 
    Entypo,
    FontAwesome
  
} from "@expo/vector-icons"
import OrderHeading from "./orderHeading"
const OrderDetails = ( props ) => {

    const { 
        productCode ,
        productDescription, 
        dateOfOrder, 
        shippingAddress ,
        quantity,
        poNumber, 
        UOM,
        closeModal
         } = props
    return(
   <View style = { { flex:1  }}>
     <Card style = {{ borderRadius:15}}>
          
          <View style = {{ flexDirection:"column" }}>
                    <OrderHeading
                    poNumber  = { poNumber}
                    onPressMethod = { closeModal }
                    label = "close"
                    />
                    <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                        <Entypo
                                        name = "address" 
                                        size = {20} 
                                        color = "orange"/>
                        <View>           
                        <Text style = {{ ...bold_Text , paddingLeft:10} } numberOfLines= {0.5}>shipping Address</Text>
                        <Text style = {{ paddingLeft:15}}>{shippingAddress}</Text>
                        </View> 
                    </View>
                
                    
                    <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                        <FontAwesome
                                        name = "calender" 
                                        size = {20} 
                                        color = "orange"/>
                        <View>           
                        <Text style = {{ ...bold_Text , paddingLeft:10} } numberOfLines= {0.5}>Order Placement Date</Text>
                        <Text style = {{ paddingLeft:15}}>{dateOfOrder}</Text>
                        </View> 
                    </View>

                    <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                        <Entypo
                                        name = "shopping-cart" 
                                        size = {20} 
                                        color = "orange"/>
                        <View style={{ flex:1}}>           
                           <Text style = {{ ...bold_Text , paddingLeft:10} } numberOfLines= {0.5}>Items</Text>
                           <View style= {{ flex:1}}>
                             
                            <Item
                            productCode = { productCode}
                            Quantity = {5 }
                            UOM = { UOM}
                            />
                          </View>
                          <View style= {{ flex:1}}>
                            
                              <Item
                              productCode = { productCode}
                              Quantity = {5 }
                              UOM = { UOM}
                              />
                          </View>
                          <View style= {{ flex:1}}>
                            
                                  <Item
                                productCode = { productCode}
                                Quantity = {5 }
                                UOM = { UOM}
                                />
                         </View>
                        </View> 

                    </View>
                
              
          </View>
          
          </Card>
         

    </View> )
}

// const Items = ( props ) => {
//     const {  productCode , Quantity , UOM} = props
//     return(
//             <View style = {{ flexDirection:"row" , 
//             justifyContent:"space-between" ,
//             alignItems:"stretch",
//             borderColor:"red",
//             borderWidth:1
//             }}>
              
               
//                   <CustomText
//                   label = "Product Code"
//                   text = { productCode}/>
               
              
//                 <CustomText
//                     label = "Quantity"
//                     text = { Quantity }/>
             
            
             
//                   <CustomText
//                       label = "UOM"
//                       text = {UOM}
//                   />
              
//               </View>
//     )
// }


const Item = () => {
  return(<View style = {{ }}>
      <View>
          <Text style = {{ fontWeight:"bold"}}>Product Code</Text>
          <Text>ax121</Text>
      </View>
      <View>
          <Text style = {{ fontWeight:"bold"}}>Product Code</Text>
          <Text>ax121</Text>
      </View>
  </View>)
}
export default OrderDetails 