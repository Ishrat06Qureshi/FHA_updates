import React , { Component } from "react";
import { 
    Text,
    StyleSheet, 
    Dimensions,
    Image,
    SafeAreaView,
    TouchableOpacity,
    View,
    ScrollView
 } from "react-native";

import {
    Container ,
    Header ,
    Content,
    List, 
    ListItem,
    InputGroup, 
    Input, 
} from "native-base";
import  { 
    MaterialIcons ,
    FontAwesome,
    Entypo,
    AntDesign,
    Ionicons,
    MaterialCommunityIcons
} from "@expo/vector-icons"

import { item , container  , icon_style } from "../Styles/index";
import { Primary_Color } from "../Styles/colors";
import CustomButton from "./Button";
import validation_functions from "../utils/validation_functions";
import Constants from 'expo-constants';





const Width = Dimensions.get("window").width
const Height = Dimensions.get("window").height
export default class Signup extends Component {
   state = {
        companyName:"",
        officeAddress:"",
        contactPersonName:"",
        phoneNumber:"",
        customerNumber:"",
        password:"",
        email:"",
   }

    
    onChangeValue = (fieldName , value ) => {
        value = value.trim()
       console.log(fieldName , value )
       this.setState(({ [fieldName] : value}))
       validation_functions.updateValidators( fieldName , value )
   }
    render() {
        return( <Container>
                  <Header style = {{
                            marginTop:Constants.statusBarHeight,  
                            backgroundColor:'white' , 
                            height: Height * 0.15 }}>
                        <Image source =  { require("../assets/newlogo.png")}
                        style = {{ height: Height * 0.15, width: Width - 50 }}/>
                  </Header>
                  {/* <ScrollView>
                      
                 <View> */}
                 <Content>
                     
                     <List style = { container}>
                         <ListItem style = { item } >
                             <InputGroup>
                             <FontAwesome
                              name = "building" 
                              size = {icon_style.height} 
                              color = {icon_style.color}/>
                              <Input
                               placeholder="Company Name"
                               onChangeText = { (companyName) => this.onChangeValue("companyName" , companyName )} 
                              
                               
                              />
                             </InputGroup>
                         </ListItem>
                         { validation_functions.displayValidationErrors("companyName")}
                         <ListItem style = { item } >
                             <InputGroup>
                             <Entypo
                              name = "address" 
                              size = {icon_style.height} 
                              color = { icon_style.color}/>
                              <Input
                               placeholder="office Address  "
                               onChangeText = { (officeAddress) => this.onChangeValue("officeAddress" , officeAddress )} 
                             
                               
                              />
                             </InputGroup>
                         </ListItem>
                         { validation_functions.displayValidationErrors("officeAddress")}
                         <ListItem style = { item } >
                             <InputGroup>
                             <Entypo
                              name = "phone" 
                              size = {icon_style.height} 
                              color = {icon_style.color}/>
                              <Input
                               placeholder="phone number"
                               onChangeText = { (phoneNumber) => this.onChangeValue("phoneNumber" , phoneNumber )} 
                               
                               
                              />
                             </InputGroup>
                         </ListItem>
                         { validation_functions.displayValidationErrors("phoneNumber")}
                         <ListItem style = {item} >
                             <InputGroup>
                             <Ionicons
                              name = "ios-person" 
                              size = {icon_style.height} 
                              color = {icon_style.color}/>
                              <Input
                               placeholder="contact Person Name"
                               onChangeText = { (contactPersonName) => this.onChangeValue("contactPersonName" , contactPersonName )} 
                               
                               
                              />
                             </InputGroup>
                         </ListItem>
                         { validation_functions.displayValidationErrors("contactPersonName")}
                         <ListItem style = {item } >
                             <InputGroup>
                             <MaterialIcons
                              name = "person-pin" 
                              size = {icon_style.height} 
                              color = {icon_style.color}/>
                              <Input
                               placeholder="customer number (optional) "
                               onChangeText = { (customerNumber) => this.onChangeValue("customerNumber" , customerNumber )} 
                               value = "150"
                               
                              />
                             </InputGroup>
                         </ListItem>
                         { validation_functions.displayValidationErrors("customerNumber")}
                         <ListItem style = { item } >
                             <InputGroup>
                             <FontAwesome
                              name = "envelope" 
                              size = {icon_style.height} 
                              color = {icon_style.color}/>
                              <Input
                               placeholder="email"
                               onChangeText = { (email) => this.onChangeValue("email" , email )} 
                              />
                             </InputGroup>
                             { validation_functions.displayValidationErrors("email")}
                         </ListItem>
                         <ListItem style = {item} >
                             <InputGroup>
                             <FontAwesome
                              name = "unlock-alt" 
                              size = {icon_style.height} 
                              color = {icon_style.color}/>
                              <Input
                               placeholder="password"
                               onChangeText = { (password) => this.onChangeValue("password" , password  )} 
                              />
                             </InputGroup>
                         </ListItem>
                         { validation_functions.displayValidationErrors("password")}
                     </List>
                    
                     <CustomButton/>
                 {/* </View>
                 </ScrollView> */}
                 </Content>
        </Container>)
    }
}
