import React , { Component} from "react";
import { View } from "react-native";
import TabBar from "../Navigation/tabNavigation"
import { MaterialCommunityIcons, } from "@expo/vector-icons";
class mainHome extends Component {
    static navigationOptions = {
        drawerLabel: 'chat',
        drawerIcon: () => (
        <MaterialCommunityIcons name= "security-home"  size = {25} />
        ),
      };
    
    render() {
        return( <TabBar/>)
    }
  }
  export default mainHome 