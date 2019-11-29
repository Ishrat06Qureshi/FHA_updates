 import React , { Component } from  "react";
 import { 
     Container ,
      Header ,
      Content,
      List, 
      ListItem,
      InputGroup, 
      Input, 
      Icon,
      Picker,
    //   Button ,
      Body ,
         } from "native-base";
 import {
      Text,
      StyleSheet, 
      Dimensions,
      Image,
      SafeAreaView,
      Button,
      TouchableOpacity,
      View

 } from "react-native";

 import {
    MaterialCommunityIcons,
    FontAwesome

} from "@expo/vector-icons";
import validation_functions from "../utils/validation_functions";
import Constants from 'expo-constants';
import CustomHeader from "./CustomHeader";
import { container , item  , icon_style } from "../Styles/index"

const Width = Dimensions.get("window").width
const Height = Dimensions.get("window").height
 export default class Login extends Component {
    state = {
        email:"",
        password:"",
        
    }
    
     onChangeValue = (fieldName , value ) => {
         value = value.trim()
        console.log(fieldName , value )
        this.setState(({ [fieldName] : value}))
        validation_functions.updateValidators( fieldName , value )
    }

    disableButton = () => {
     
        const isValid = validation_functions.isFormValid(["email" , "password"])
         if ( isValid ) {
             
               return false
         }
         return true 
    }

    navigateToSignup  = () => {
        this.props.navigation.navigate("Finalsignup")
    }
     render( ) {
         console.log("Height" ,Height )
         const { buttonState } = this.state
         return(
             <SafeAreaView  style = {{  flex:1 }} >
                 
            <Container>
                <Header style = {{
                    marginTop:Constants.statusBarHeight,  
                    backgroundColor:'white' , 
                    height: Height * 0.15 }}>
                  <Image source =  { require("../assets/newlogo.png")}
                  style = {{ height: Height * 0.15, width: Width - 50 }}/>
                  </Header>
                 
            <Content> 
                <List style = { container } >
                    <ListItem style = { item } >
                        <InputGroup>
                        <MaterialCommunityIcons name="email-outline" 
                        size = {icon_style.height} color= { icon_style.color}/>
                            <Input placeholder="email"
                             onChangeText = { (email) => this.onChangeValue("email" , email )} />
                        </InputGroup>
                    </ListItem>
                    { validation_functions.displayValidationErrors("email")}
                    <ListItem style = { item} >
                        <InputGroup>
                            <FontAwesome name= "unlock-alt" color = {icon_style.color} size = { icon_style.height } />
                            <Input placeholder="password" secureTextEntry
                            onChangeText = { (password ) => this.onChangeValue("password" , password )}
                             />
                        </InputGroup>     
                    </ListItem>
                    { validation_functions.displayValidationErrors("password")}
                </List>
                {/* <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    Sign Up
                </Button> */}
                 <TouchableOpacity onPress = { () => this.setState(({ buttonState:false }))}>
                     <Text> change state</Text>
                 </TouchableOpacity>
                <Button title = "Login"  
                disabled = {   this.disableButton() }
                //  style = { this.disableButton() ? styles.EnableStyle : styles.disableStyle}
                style = {{ 
                backgroundColor:"#DA011D",
                color:"white"
            }}
                />
                  <View  style = {{ flexDirection:"row"}}>
                      <Text> Already have an account </Text>
                      <TouchableOpacity onPress = { this.navigateToSignup}>
                          
                      <Text style = {{ color:"#DA011D"}}> Sign up </Text>
                      </TouchableOpacity>
                      </View>
            </Content>
        </Container>
        </SafeAreaView>
         )
     }
 }

 const styles = StyleSheet.create({
     container :{
         flex:1,
         justifyContent:"center",
         alignItems:"center",
         marginTop: 100
     },
     disableStyle : {
         backgroundColor:"#8a0113",
         color:"#403d3d"
     },
     EnableStyle : {
         backgroundColor:"#DA011D",
         color:"white"
     }
 })