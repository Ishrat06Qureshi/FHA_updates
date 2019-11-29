import React , { Component } from "react";
import { View , SafeAreaView , ScrollView , Dimensions } from "react-native"
import {  createStackNavigator , createDrawerNavigator , DrawerItems } from "react-navigation";
import Profile from "../Components/Profile";
import EditProfile from "../Components/EditProfile";
import TabBar from "./tabNavigation";
import { 
    AntDesign , 
    Ionicons, 
    MaterialCommunityIcons,
    Entypo } from "@expo/vector-icons";
import NewOrderDetails from "../Components/NewOrderDetails"
import CustomMainHeader from "../Components/CustomMainHeader";
import OrderList from "../Components/Order";
import Logout from "../Components/Logout";




const CustomDrawerComponent = ( props ) => {
    return(<SafeAreaView style = {{ flex:1 }}>
        <View style = {{ flex:1,justifyContent:"center" , 
         alignItems:"center"}} >
          <Entypo name= "tools" size = {80} color = "#DA011D" />
        </View>
        <ScrollView>
            <DrawerItems {...props }/>
        </ScrollView>
    </SafeAreaView>)
}




const NewProfileStack  = createStackNavigator({
    Profile:{
       screen:Profile,
       navigationOptions:({ navigation }) => {
        return {
            headerLeft:  
            <CustomMainHeader screenProps = { navigation }/>
        }
    }
},
    EditProfile
} )

const OrderStack = createStackNavigator({
   OrderList:{
       screen:OrderList,
       navigationOptions:({ navigation }) => {
        return {
            headerLeft:  
            <CustomMainHeader screenProps = { navigation }/>
        }
    }
},
   NewOrderDetails

})

const DashboardStack = createStackNavigator({
    DashboardTabNavigator  : {
        screen:TabBar , 
        navigationOptions : ({ navigation }) => {
            return {
                headerLeft:  
                <CustomMainHeader screenProps = { navigation }/>
            } 
        }
    }
})

const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:DashboardStack,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => <AntDesign name="home" size={25} color = {tintColor ? tintColor  :"#696969"} />,
          }
    },
    Profile:{
        screen:NewProfileStack,
        navigationOptions:{
            drawerLabel:"Profile",
            drawerIcon:({tintColor}) => <Ionicons name= "ios-person" size = {25} color = {tintColor ? tintColor  :"#696969"} />
        }
    },
    OrderHistory : {
        screen:OrderStack,
        navigationOptions:{
            drawerLabel:"Order History",
            drawerIcon:({ tintColor }) => <MaterialCommunityIcons name= "chart-histogram" size = {25} color = {tintColor ? tintColor  :"#696969"}/>
        }
    },
    Logout:{
        screen:Logout,
        navigationOptions:{
            drawerLabel:"Logout",
            drawerIcon:({ tintColor }) => <AntDesign name='logout' size={25} color={tintColor} />
        }
    }
} , {
    contentOptions:{
        activeTintColor: '#DA011D',
        inactiveTintColor: '#696969',
 
    },
    contentComponent: CustomDrawerComponent
})

export default AppDrawerNavigator