import React from "react";
import { View , Text } from "react-native";
import { bold_Text} from "../Styles";
const CustomText = ( props ) => {
    const { label , text} = props
   return( <View>
          <Text style = { {...bold_Text } }> {label}</Text>
          
          <Text style = {{ paddingLeft:5}}> { text }</Text>
   </View>)
}

export default CustomText