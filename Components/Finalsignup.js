import * as React from 'react';
import { ScrollView,
  View, KeyboardAvoidingView} from 'react-native';
import axios from "axios";

import validation_functions from "../utils/validation_functions";

import Company from "./Company";
import Customer from "./Customer";
import Address  from "./AddressComponent"
import { Spinner } from "native-base"
import { NavigationEvents } from 'react-navigation';

const initialState = {
  StepOne:true,
  StepTwo:true,
  email:"",
  customerNumber:"",
  password:"",
  companyName:"",
  officeAddress:"",
  contactPersonName:"",
  phoneNumber:"",
  lineOne:"",
  lineTwo:"",
  city:"",
  province:"",
  postalCode:"",
  serverError:"",
  isLoading : false,

}
export default class Finalsignup extends React.Component {   

  state = {...initialState}


 handleInputChange = ( fieldName , value) => {
  this.setState(({ [fieldName] : value}))
  validation_functions.updateValidators( fieldName , value )

}
  post = () => {
    const {    email,
      customerNumber,
      password,
      companyName,
      officeAddress,
      contactPersonName,
      phoneNumber , lineOne , lineTwo , city, province , postalCode } = this.state
     this.setState(({ isLoading: true , StepOne:true , }) , () =>

     {
      axios.post("http://13.59.64.244:3000/api/register" , 
      { email , customerNumber , password , companyName , officeAddress:`${lineOne} , ${city} , ${province} , ${postalCode}`  , 
      contactPersonName , phoneNumber  })
      .then(( response ) =>  
      {  console.log(response)
        if(response.data.message === "Done") {
          validation_functions.resetValidators()
          this.props.navigation.navigate("CodeVerify")
        }
      } )
       .catch ( err =>
        {
          validation_functions.resetValidators()
          return( this.setState(({
            isLoading: false , 
            serverError: err.response.data.message ,
            email:"",
            customerNumber:"",
            password:"",
            companyName:"",
            officeAddress:"",
            contactPersonName:"",
            phoneNumber:"",
            lineOne:"",
            lineTwo:"",
            city:"",
            province:"",
            postalCode:""})) )
        })
     })
     
    }
  
  JumpStepTwo = () => {
    validation_functions.resetValidators()
    this.setState(({ StepOne:false})) 
  }

  JumpStepThree = () => {
    validation_functions.resetValidators()
    this.setState(({ StepTwo:false})) 
  }


  
  render() {
 
    const {  StepOne , StepTwo , 
      email,
    customerNumber,
    password,
    companyName,
    officeAddress,
    contactPersonName,
    phoneNumber,
    lineOne,
    lineTwo,
    city,
    province,
    postalCode,
   serverError , isLoading } = this.state
     console.log( email )
    return(
      <View>   

<NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />
          
          { StepOne ? 
          <ScrollView contentContainerStyle = {{ justifyContent:"center"}}
           showsVerticalScrollIndicator=  { false}>
          <Customer
          handleInputChange = { this.handleInputChange}
          handleNext = { this.JumpStepTwo}
          customerNumber = {customerNumber}
          email = { email }
          password = { password }
          serverError = { serverError}
          isLoading = { isLoading }
          />
          
           <View style = {{ height:150 , width:"100%"}}></View> 
         
           </ScrollView>
          :  StepTwo ? 
            <ScrollView contentContainerStyle = {{ justifyContent:"center"}}
             showsVerticalScrollIndicator = { false}>
              
          <Company
          handleInputChange = { this.handleInputChange}
          handleNext = { this.JumpStepThree}
          companyName = { companyName }
          contactPersonName = {contactPersonName}
          phoneNumber ={ phoneNumber}

          />
           <View style = {{ height:150 , width:"100%"}}></View> 
   
          </ScrollView> : 
          <ScrollView contentContainerStyle = {{ justifyContent:"center"}} 
          showsVerticalScrollIndicator = {false} >
            
          <Address
          handleInputChange = {this.handleInputChange}
          handleNext = {this.post}
          lineOne = { lineOne }
          city = { city }
          province = { province }
          postalCode = { postalCode }
          />
           <View style = {{ height:180 , width:"100%"}}></View> 
           <View style = {{ height:50 , width:"100%"}}></View> 
          </ScrollView>
             }
            
      
        </View> 
    
    )
  }
}
