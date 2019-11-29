import React , { Component } from "react";
import { View  , Image , ScrollView } from "react-native";

import  Input from "./Input";
import Button from "./Button";
import { disable_Button_Style ,
   disable_Text_Style , 
   enable_Button_Style ,
    enable_Text_Style} from "../Styles"

    import validation_functions from "../utils/validation_functions"; 
const Company = (  props ) => {
    
    
 const { handleInputChange , handleNext , companyName , contactPersonName , phoneNumber } = props
 
 const disable = validation_functions.isFormValid(["companyName","contactPersonName","phoneNumber" ])
  return(
      
  
    
       
    <View style = {{
      flex:1 , 
      justifyContent:"center" ,
      alignItems:"center"
     }}>
             

             <Image
                  source = {require("../assets/fastening.png")}
                  style = {{
                    height:135,
                    width:"100%",
                    resizeMode:"contain"
                  }}
                />
             
               <ScrollView contentContainerStyle = {{  justifyContent:"center" }}
               showsVerticalScrollIndicator = { false}
               >
               <Input
               label = "COMPANY NAME"
               placeHolderText="fastening housing atlantic"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "companyName" 
               keyBoardType = "default"
               value = { companyName}
               />  
                 
                 <Input
               label = "CONTACT PERSON NAME"
               placeHolderText="Dev"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "contactPersonName" 
               keyBoardType = "default"
               value = { contactPersonName }
               />  
                 <Input
               label = "PHONE NUMBER"
               placeHolderText="0123456789"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "phoneNumber" 
               keyBoardType = "phone-pad"
               value = { phoneNumber }
               />  
              <Button 
               onPressMethod = {handleNext}
               text = "Next"
               buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
               textStyle = { disable ? enable_Text_Style  :disable_Text_Style}
               disable = { disable }
               />
                 {/* <View style = {{ height:200 , width:"100%"}}>

                </View> 
                <View style = {{ height:200 , width:"100%"}}>

               </View>  */}
               {/* <View style = {{ height:150 , width:"100%"}}>

              </View>  */}
              {/* <View style = {{ height:150 , width:"100%"}}>

</View> 
<View style = {{ height:150 , width:"100%"}}>

</View> 
<View style = {{ height:150 , width:"100%"}}>

</View> 
<View style = {{ height:150 , width:"100%"}}>

</View> 
<View style = {{ height:150 , width:"100%"}}>

</View>  */}
               </ScrollView>
                            
            </View>
              
              

    
)
}
export default Company