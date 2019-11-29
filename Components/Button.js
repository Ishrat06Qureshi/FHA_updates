import React from "react"
import { View , Text ,  TouchableOpacity } from "react-native";


const Button  = ( props ) => {
   const { onPressMethod  , text , buttonStyle, textStyle , disable } = props 
  return ( <TouchableOpacity style = { buttonStyle} onPress = {  onPressMethod} 
  disabled = { disable? false: true}>
     <Text style ={ textStyle } > {text}</Text> 
   </TouchableOpacity> )

}
export default Button