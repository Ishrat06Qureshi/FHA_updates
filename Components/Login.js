import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import loginValidatorFunction from "../helper/constraints";
import validation from '../helper/validation';

export default class Login extends React.Component {
  state = {
    showPass: true,
    press: false,
    email:"",
    password:"",
    credential_error_msg : "",
    error:{}
  };
  showPassword = () => {
    const { press } = this.state;
    press
      ? this.setState({ showPass: true, press: false })
      : this.setState({ showPass: false, press: true });
  };

  check_credentials = ( ) => {
    const { email , password } = this.state
     if( email === "Admin123@gmail.com" && password === "1234") {
        return true
     } 
  }

 resetState = () => {
   this.setState(({
      email:"",
      password:"",
      credential_error_msg:"",
      error:{}
    }))
  console.log("reseting the app")
 }

  handleLoginSubmit = () => {
     const { email , password } = this.state
      const data = { email , password}
      const error =  validation(data)
      if( Object.keys(error).length  ) {
        console.log(error)
        return  this.setState(({ error}))
      }

  
   
    if( this.check_credentials() ) {
       console.log("after checking credentials")
              this.resetState()
             this.props.navigation.navigate("Home")
             
             
    } 
   else {
     this.setState(({ credential_error_msg : " credential error "}))
   }
  }

  handleSignupSubmit = ()  => {
       this.props.navigation.navigate("Signup")
     
     
 

  }
  render() {
    const { showPass, press ,  credential_error_msg  , email , password , error  } = this.state;
    return (
      <KeyboardAvoidingView behavior = "padding"  style={styles.background}>
      <ImageBackground
        source={require('../assets/bg_signup.jpg')}
        style={styles.background}>
        <View style = {styles.logoContainer}>
          <Image source={require('../assets/FHA_icon.png')}  
           style = {styles.logo}/>
        </View>

          <View>
                <AntDesign
                  name="user"
                  size={32}
                  color="white"
                  style={styles.inputIcons}
                />
                <TextInput
                  placeholder={'Username'}
                  placeholderTextColor={'white'}
                  underlineColorAndroid="transparent"
                  style={styles.input}
                  onChangeText = {(email) => this.setState(({ email }))}
                  value = { email }
                  returnKeyType  ="next"
                />
                { error.email? <Text style = { styles.err_text}>{error.email}</Text> : null}
                
                          </View>
          <View>
                <Ionicons
                  name="ios-lock"
                  size={32} 
                  color={'white'}
                  style={styles.inputIcons}
                />
                <TextInput
                  placeholder={'password'}
                  placeholderTextColor={'white'}
                  underlineColorAndroid="transparent"
                  secureTextEntry={showPass}
                  style={styles.input}
                  onChangeText = {password => this.setState(({ password  }))}
                   value = { password  }
                   returnKeyType = "go"
                />

                    <TouchableOpacity onPress={this.showPassword} 
                    style={styles.btn_eye}>
                      <Feather
                        name={!press ? 'eye' : 'eye-off'}
                        size={32}
                        color="white"/>
                      </TouchableOpacity>
                      
   </View>
                   {error.password ? <Text  style = { styles.err_text} >{error.password}</Text> : null}
                

              <View style  = { styles.buttons }>
                <TouchableOpacity style={styles.btnLogin} onPress = { this.handleLoginSubmit}>
                    <Text style={styles.text}> Login </Text> 
              </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress = { this.handleSignupSubmit}>
                  <Text style={styles.text}> SignUp </Text>
                </TouchableOpacity>
              </View>

              { credential_error_msg ? <Text style = {styles.err_text}>{ credential_error_msg }</Text>:null}
            
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    heigth: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    marginBottom: 15,
  },
  btnLogin: {
    width: 95,
    height: 45,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 25,
  },
  text: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
  inputIcons: {
    position: 'absolute',
    top: 8,
    left: 32,
  },
  btn_eye: {
    top: 0,
    position: 'absolute',
    right: 52,
    
  },
 
  logoContainer:{
   alignItems:"center"
  },
  logo:{
     width:250,
     height:120
  },
  buttons:{
    flexDirection:'row',
    marginLeft:20
  } , 
  err_text:{
     color: 'white',
    fontSize: 15,
    textAlign: 'center',
  }
});
