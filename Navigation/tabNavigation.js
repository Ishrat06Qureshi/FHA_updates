import React from "react";
import {  createBottomTabNavigator,  createAppContainer  } from "react-navigation";
import { MaterialIcons , Octicons , 
    FontAwesome} from "@expo/vector-icons";


import Search from "../Components/Search";
import Cart from "../Components/Cart";

import {HomeStack} from "./StackNavigators"
import {CartStack } from "./StackNavigators"

const TabBar = createBottomTabNavigator(
    {
            Home: {
            screen : HomeStack,
            navigationOptions : ({ navigation}) => 
           
            ({ 
                 tabBarIcon: ({tintColor}) => (
            <Octicons name='tools' size={25} color={tintColor} /> )
           }) },
            Search:{ 
            screen : Search,
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <FontAwesome name = 'search' size={25} color={tintColor} /> )})
            },
          
            Cart:{ 
            screen : CartStack, 
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <MaterialIcons name = 'add-shopping-cart' size={25} color={tintColor} /> )})
            }
   } ,
   {
            tabBarOptions: {
            activeTintColor: '#DA011D',
            inactiveTintColor: '#707070',
            style:{ height: 70} 
        },
            navigationOptions : ({ navigation}) => {
            return { header:null}
   }
       
    
})

  export default  createAppContainer(TabBar)