import React from "react";
import { View , Text} from "react-native";
const CustomHorizontalText = ( props ) => {
    const { label , text } = props
    return( <View style = {{ flexDirection:"row" , justifyContent:"space-between"}}>
    <Text style = {{ fontWeight:"100"}}>{label}</Text>
    <Text style = {{ paddingRight:25}}>{text}</Text>

</View>)


}
export default CustomHorizontalText