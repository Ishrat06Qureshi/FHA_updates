import React  , { Component } from "react";
import { View   } from "react-native";


export default class Logout extends Component {
    
    render() {
          return( <View>
           
        </View>)
    }
    

    componentDidMount(){
        this.props.navigation.closeDrawer()
    this.props.navigation.navigate("WelcomeStack")

    }
}