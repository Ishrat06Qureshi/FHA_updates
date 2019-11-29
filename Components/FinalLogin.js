import  React , {Component} from 'react';
import {View,  Image , ScrollView  , Text, Keyboard , TouchableOpacity  } from 'react-native';
import { Spinner } from "native-base"

import LoginMiddleware from "../Middleware/LoginMiddleware";
import { connect } from "react-redux";
import Input from "./Input"

import Button from "./Button";

// import Loading from "../Redux/Actions/LoadingAction"
import validation_functions from "../utils/validation_functions"; 
import { NavigationEvents } from 'react-navigation';

import { disable_Button_Style ,
  disable_Text_Style , 
  enable_Button_Style ,
   enable_Text_Style ,White_Text} from "../Styles"   
const initialState = {
      email:"",
      password:"",
      isLoading:false
}


 class Finalogin extends Component {
  constructor (props){
    super(props)
    this.state = {...initialState}
  }
  
   navigateToHome = () => {
     this.props.navigation.navigate("Home")
   }
   OnLoader = () => {
     this.setState(({ isLoading: true }))
   }
   ResetState = () => {
     validation_functions.resetValidators()
     this.setState(({...initialState}))
   }
   OnLoaderOff = () => {
     this.setState(({ isLoading : false }))
   }

   handleLogin = () => {
     Keyboard.dismiss()
      const { token , Login ,error }  = this.props 
       const { email , password }  =this.state
       
      Login({email , password , 
        navigateToHome:this.navigateToHome ,
         OnLoader:this.OnLoader ,
          ResetState:this.ResetState, 
          OnLoaderOff: this.OnLoaderOff} ) 
       }


  handleInputChange = ( fieldName , value) => {
    
    this.setState(({ [fieldName] : value.trim()}))
    validation_functions.updateValidators( fieldName , value )

  }

  



    render() {
  
    const disable = validation_functions.isFormValid(["email","password" ])
    const { token , error  } = this.props
    
    const { email , password , isLoading }  = this.state 

    return(
      <View style = {{
        flex:1 , 
        justifyContent:"center" ,
        alignItems:"center",
        backgroundColor:"#fff"
         }}>
                <NavigationEvents
               onDidBlur={() => this.setState(({...initialState}))} />       
             
                        { isLoading ? <Spinner color = "red" size = {25} />: 
                        <ScrollView 
                        keyboardShouldPersistTaps='always'
                        >
                        <Image
                              source = {require("../assets/fastening.png")}
                              style = {{
                                height:135,
                                width:"100%",
                                resizeMode:"contain"
                              }}/>
                          {error ?  <Text> {error}</Text>  : null }
                        <Input
                          label = "EMAIL"
                          placeHolderText="john22@gmail.com"
                          isSecureTextEntry = { false}
                          onChangeText= { this.handleInputChange} 
                          errorName = "email" 
                          value = {email }
                        
                         
                          />

                            <Input
                          label = "PASSWORD"
                          placeHolderText="*******"
                          isSecureTextEntry = { true }
                          onChangeText= { this.handleInputChange}
                          errorName = "password" 
                          value = {password}
                        
                          />

                          <Button 
                          onPressMethod = { this.handleLogin}
                          text = "Login"
                          buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
                          textStyle = { disable ? enable_Text_Style : disable_Text_Style }
                          disable = { disable}
                          />
                          <TouchableOpacity onPress = {() => 
                            {  validation_functions.resetValidators()
                              this.props.navigation.navigate("Finalsignup")} }>
                            <View style = { { justifyContent:"flex-end" , alignItems:"flex-end" , paddingTop:10} }>
                            <Text style = { White_Text} > Create ? </Text>
                            </View>
                         
                         
                          </TouchableOpacity>
                         
                         
                           {/* <View style = {{ height:200 , width:"100%"}}></View> 
                          <View style = {{ height:150  , width:"100%"}}> </View>   */}
                        </ScrollView>}

                       
                                
                                          
      </View>)
  } 
}


const mapDispatchToProps = ( dispatch ) => {
   return({
     Login:( data ) => dispatch(LoginMiddleware( data )) 
   })
}

const mapStateToProps = ( state ) => {

  return({
    token: state.tokenReducer.token,
    error: state.ErrorReducer.error.message
  })
}
export default connect(mapStateToProps , mapDispatchToProps )(Finalogin)
