import React , { Component } from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { withNavigation } from "react-navigation";

import {HeadingContainer , Heading_style , Heading_Text} from "../Styles"
const Heading  = (props ) => {
    const { productCategory , productName} = props
   return (
    <View style= {HeadingContainer}>
    <Text style = { Heading_style }>
      {productCategory} Products </Text>
      <TouchableOpacity onPress = {() => props.navigation.navigate("AllProducts" , { productName})}>
      <Text style = { Heading_Text }> View more  </Text>
      </TouchableOpacity>
  </View>
   )
}

export default withNavigation(Heading)