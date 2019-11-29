import React , { Component } from "react";
import { View , ScrollView , Text  } from "react-native";
import { bold_Text ,
      White_Square_button  , 
      Red_Text ,
        Red_Button  ,
        White_Text ,
      Heading_Container , 
      Heading_style} from "../Styles";
import CustomText from "./CustomText";
import Button  from "./Button";
import Input from "./Input";
import validation_functions from "../utils/validation_functions";


const DefaultAddress = "1 Moore Rd, Dartmouth, NS B3B 1J1, Canada"
class OrderPlacement extends Component {
  state = {
    shippingAddress:"",
    quantity:"",
    isDefaultAddress : false,
    showAddress : false,
    isModalVisible:false
    
  }
  onPress = () => {
     console.log("onPress method")
  }

  handleInputChange = ( fieldName , value) => {
    this.setState(({ [fieldName] : value}))
    validation_functions.updateValidators( fieldName , value )
  
  }

  SameOfficeAddress = (  ) => {
    console.log("change office address ")
    this.setState(({ 
      showAddress:true,
      isDefaultAddress:true
    }))
  }
  
  differentOfficeAddress = (  ) => {
   
    this.setState(({ 
      showAddress:true,
      isDefaultAddress:false
    }))
  }
  

 
  

  render() {
    const {  isDefaultAddress , showAddress} = this.state
     const { productCode  , UOM  } =  this.props.navigation.state.params
     
   
      return (
     
          
           <View style= {{ flex:1 , justifyContent:"center" , alignItems:"center"}}>
             <View style = {{ justifyContent:"center"}}>
             <View style = { Heading_Container }>
            <Text style = { Heading_style }> Place Order</Text>
            </View>
             
              
                <Text style = { bold_Text }> Shipping address </Text>
                  <View style  ={{ flexDirection:"row" , justifyContent:"space-around" , marginTop:20 , marginBottom:30}}>
                     <Button  
                      buttonStyle = {  White_Square_button }
                      textStyle = { Red_Text }
                      text  = " same as office"
                      onPressMethod = {this.SameOfficeAddress}
                     />
                      <Button
                       buttonStyle = {  White_Square_button }
                       textStyle = { Red_Text }
                       text  = "different "
                       onPressMethod = { this.differentOfficeAddress}
                      />
                      
                  </View>
                  {
                    showAddress ?  <Input
                    label = ""
                    placeHolderText="shipping address"
                    isSecureTextEntry = { false}
                    onChangeText= { this.handleInputChange}
                    errorName = "shippingAddress" 
                    defaultAnswer = { isDefaultAddress ?DefaultAddress : "" }
                    edit = { isDefaultAddress ? false: true}
                    
                 /> : null
                  }
                   
                  
               
             <Button
                       buttonStyle = {  Red_Button }
                       textStyle = { White_Text  }
                       text  = "Order"
                       onPressMethod = { this.onPress}
                      />             
           </View>
           </View>
         
      );
  }
}
export default OrderPlacement