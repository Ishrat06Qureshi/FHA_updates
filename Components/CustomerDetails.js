import * as React from "react";
import { View , Text } from "react-native";
import { Container , Header  , Content, Form , Item , Label , Input, Button  } from "native-base"


export default class Customerdetails  extends React.Component {
    state = {
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber :"",
        error:{}

   }

    handleInput = ( name ,  value ) => {
        this.setState(({ 
            [name] : value,
        error:{}}))
    }
    
    handleSubmit = () => {
         const { firstName , lastName , email , phoneNumber } = this.state
         const data = {
             firstName ,
             lastName,
             email,
             phoneNumber
         }
         const error = loginValidation(data)
         if (Object.keys( error).length) {
            return this.setState(({ error }))
          }

    }
    render() {
       
          const { error  } = this.state
        return( 
        
            <Container>
          
            <Content>
            <Form>
            <Item inlineLabel>
              <Label>First Name </Label>
              <Input onChangeText ={ ( firstName) => this.handleInput("firstName" , firstName)}   />
              {  error && error.firstName ? alert(`${ error.firstName}`) : null }
            </Item>
            <Item inlineLabel last>
              <Label>last Name </Label>
              <Input onChangeText ={ ( lastName) => this.handleInput("lastName" , lastName)} />
              {  error && error.lastName ? alert(`${ error.lastName}`) : null }
            </Item>
            <Item inlineLabel last>
              <Label> Phone </Label>
              <Input onChangeText ={ ( phoneNumber) => this.handleInput("phoneNumber" , phoneNumber)}/>
              {  error && error.phoneNumber ? alert(`${ error.phoneNumber}`) : null }
            </Item>
            <Item inlineLabel last>
              <Label>Email </Label>
              <Input onChangeText ={ (email ) => this.handleInput("email" , email)} />
              {  error && error.email ? alert(`${ error.email }`) : null }
            </Item>
            <Button  onPress = { this.handleSubmit}><Text> submit </Text></Button>
          </Form>
            </Content>
          </Container>
        
        )
    }
}