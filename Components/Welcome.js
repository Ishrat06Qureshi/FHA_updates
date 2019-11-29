import * as React from 'react';
import {
   View , 
   Text ,
   TouchableOpacity,
   StyleSheet , BackHandler } 
   from "react-native";

   import { White_Button} from "../Styles"
   import * as Style from "../Styles/index";
   
   export default class Welcome extends React.Component {
     navigateToLogin = () => {
       console.log("login")
        this.props.navigation.navigate("NewLogin")
     }

     navigateToSignup = () => {
         console.log("sign up")
        this.props.navigation.navigate("Finalsignup")
     }
  
  
   render() {
     return(<View  style = {styles.container}>
        <View style = { styles.text_container}>
        <Text style = {styles.topText}> Welcome to FHA </Text>
        <Text style = {styles.topText}>  online store </Text>

      
        </View>

        <View style = { styles.button_container }>
          <TouchableOpacity style = { White_Button } onPress = { this.navigateToLogin } >
          <Text style = { [ styles.sign_up_text , Style.boldText]}> Log in </Text>
          </TouchableOpacity>

           <TouchableOpacity  style = { White_Button } onPress = { this.navigateToSignup }>
               <Text style = {[styles.sign_up_text , Style.boldText ]}> Sign up</Text>
          </TouchableOpacity>

        </View>
     </View>)
   }
  
   }

   const styles = StyleSheet.create({
     container:{
       flex:1,
       height:"100%",
       width:"100%",
       backgroundColor:"#DA011D"
     } ,
     topText:{
       
       fontSize:32,
       color:"#fff"
     },
     bottomText:{
         color:	"#fff",
         fontSize:25
     },
     text_container:{
        flex:3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:200,
        marginTop:200
     },
     button :{
       height:50,
       width:200,
     },
     login_button :{
    backgroundColor:"#DA011D",
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign:"center",
    marginBottom:15
     },
     button_container :{
        flex:3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:80
     },
     login_text:{
       color:'white',
       textAlign: 'center',
       lineHeight:50
     },
     sign_up :{
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#DA011D',
    textAlign:"center" ,
  },
     sign_up_text :{
       color:'#707070',
       textAlign: 'center',
       lineHeight:50,
       
     }

   })