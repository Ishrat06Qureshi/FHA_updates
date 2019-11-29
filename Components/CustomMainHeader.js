import React from "react";
import { View  } from "react-native"
import * as styles from "../Styles";
import { Entypo } from "@expo/vector-icons";


const CustomMainHeader = ( props  ) => {
    
    return( <View>
        <Entypo name = "menu" size  = {35}  
                style = { styles.menu_styles } 
                 onPress = {() => props.screenProps.openDrawer()}/>
    </View>)


}
export default CustomMainHeader