import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { bold_Text } from "../Styles"

import {HeadingContainer ,  Heading_Text} from "../Styles"
const OrderHeading  = (props ) => {
    const {  poNumber ,  onPressMethod , label} = props
   return (
    <View style= {HeadingContainer}>
    <Text style = { {...bold_Text ,paddingLeft:20} }>
       PO Number {poNumber}
         </Text>
      <TouchableOpacity  onPress = {  onPressMethod }>
      <Text style = { Heading_Text }> {label}</Text>
      </TouchableOpacity>
  </View>
   )
}

export default OrderHeading