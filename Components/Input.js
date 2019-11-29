import React , { Component } from "react";
import { View , Text , TextInput , Keyboard} from "react-native";
import { label_styles , Input_styles , White_Color_Text} from "../Styles";
import validation_functions from "../utils/validation_functions"; 

const Input = ( props ) => {
     const { 
         label ,
         placeHolderText , 
         isSecureTextEntry ,
         keyBoardType ,
         onChangeText  , 
         errorName,
         defaultAnswer ,
         edit , 
        value , customLabelColor} = props
        
       
   return( <View style = {{ alignContent:"center"}}>
          <Text style = { customLabelColor ? White_Color_Text :label_styles}>
              {label}
          </Text>
          <TextInput
          placeholder = { customLabelColor? "": placeHolderText}
          placeholderTextColor ={ customLabelColor? "white": "#999999"}
          secureTextEntry = { isSecureTextEntry }
          underlineColorAndroid={ customLabelColor? "white":"transparent"}
          onChangeText = {( value ) => onChangeText( errorName , value) }
          defaultValue= { defaultAnswer? defaultAnswer: null}
          editable = { edit }
          keyboardType = { keyBoardType}
        //   style = { White_Color_Text }
          value = {value }
           
          />
           {validation_functions.displayValidationErrors(errorName , customLabelColor)}
          
   </View>)
}
export default Input 