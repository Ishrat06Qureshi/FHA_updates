import React , { Component} from "react";
import { View , Text } from "react-native";
import { Spinner } from "native-base"
import Input from "./Input";
import { Heading_style} from "../Styles";
import axios from "axios"


export default class CodeVerify extends Component {
    state = {
        verifyCode : "",
        isLoading : false,
        attempts:0,
       
        
    }

    handleInputChange = ( fieldName , value) => {
        const { verifyCode } = this.state
        if ( verifyCode.length <=12) {
            this.setState(({ [fieldName] : value}))
            console.log("code length" , verifyCode.length)
        }
        if( verifyCode.length == 12 ) 
        {
            this.setState(({ isLoading : true }) , () => this.CodeVerification())
        }
       
     
    }

 CodeVerification = () => {
      const { verifyCode } = this.state
     axios.post("http://13.59.64.244:3000/api/verification" , { verifyCode }).
     then (( response) =>  
     {
        if ( response.status = 200)
        {
            this.props.navigation.navigate("NewLogin")
        }
     }).catch ( err=>   this.setState((preState) => {
         return({
             isLoading:false,
             attempts: preState.attempts + 1,
             ErrorMessage:"Invalid code",
             verifyCode:""
         })
     }))
 }
    
    render() {
        const { isLoading , attempts , ErrorMessage  } = this.state
        return( <View style ={{ justifyContent:"center" , alignItems:"center"}}>
               <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Code Verification</Text>
            </View>
            { isLoading ?  <Spinner color = "red"/> :  <View>
         
                
                
                  {
                     attempts <3 ? 
                     <View style = {{ justifyContent:"center" }}> 
                         
                         <Text> Please enter the Code</Text>
                         <Input
                     label = "Code"
                     placeHolderText="7486547915"
                     isSecureTextEntry = { false}
                     onChangeText= { this.handleInputChange} 
                     errorName = "verifyCode" 
                     keyBoardType = "phone-pad"
                     />
                    { ErrorMessage ? <Text>{ ErrorMessage}</Text> : null }
                     </View>
                      : <Text style = {{ color :"red"}}> You have Exceed the limit  contact to Admin</Text>
                  }
                
                
               </View>
                }
            
            
        </View>)
    }
}