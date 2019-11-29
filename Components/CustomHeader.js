import React from 'react';
import { View, Image , Dimensions  , StyleSheet  } from "react-native"
import Constants from 'expo-constants';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width

const CustomHeader = () => {
    return ( <View style = {{ height : Height*0.15 ,
     width : Width , 
    //  marginTop: Constants.statusBarHeight,
     alignItems:"center" , 
     backgroundColor:"red"}}>
      
      <Image source =  { require("../assets/newlogo.png")}
       style = { {...StyleSheet.absoluteFillObject}}  />

      </View>

       )
} 
export default CustomHeader 