import React , { Component } from "react";
import { View , Text , Image , Keyboard  , ScrollView} from "react-native";
import { Card} from "native-base"
import Input from "./Input";
import CustomText from "./CustomText";
import Button from "./Button";
import { NavigationEvents } from "react-navigation"
import validation_functions from "../utils/validation_functions"; 
import { connect } from "react-redux";
import SaveItem from "../Actions/OrderAction";

import { bold_Text ,    
    White_Square_button  , 
    Red_Text ,
    Red_Square_button,
    White_Text,
    disable_Button_Style ,
  disable_Text_Style , 
  enable_Button_Style ,
   enable_Text_Style
    
     } from "../Styles";
  
     

const  initialState = {
  quantity :""
}
 
 class ProductModal extends Component {
    state = {
        ...initialState
    }
    
    handleInputChange = ( fieldName , value) => {
        this.setState(({ [fieldName] : value.trim()}))
        validation_functions.updateValidators( fieldName , value )
    
      }
      

      handleSave = ( productId ,productCode, quantity  , uom ) => {

        const { closeModal } = this.props
        Keyboard.dismiss()
         this.setState(({...initialState}) , ()=> {
           validation_functions.resetValidators()
           closeModal()
         })
         console.log("product Id in product modal", productId)
        this.props.saveItem({productId,productCode, quantity , UOM:uom})
      }
    render() {
      const disable = validation_functions.isFormValid([ "quantity" ])
        const { image , productCode , items ,  closeModal, uom ,  productId} = this.props
        const { quantity } = this.state
        
       
        return( <View >
             <NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />
               <Card style = {{ height: 500, borderRadius:25}}>
                   
               <Image
                 source = {{ uri:image}}
                 style = {{
                     height:200,
                     width:"100%",
                     resizeMode:"contain"
                 }}
               />
               
               
           
                 <ScrollView keyboardShouldPersistTaps = "always" contentContainerStyle = {{ justifyContent:"center",alignSelf:"center"}}>
                  <View style = {{paddingLeft:-10}}>
                  <CustomText
                 label = "Product Code"
                 text = { productCode }
               />
               <CustomText
                 label = "Unit of Measure"
                 text = { uom }
               />
                  </View>
                
                
              <Input
               label = "quantity"
               placeHolderText="0"
               isSecureTextEntry = { false}
               onChangeText= { this.handleInputChange}
               errorName = "quantity" 
               keyBoardType = "phone-pad"
               /> 
               </ScrollView>
               <View style = {{ justifyContent : "flex-end"}}>
                  <View style = {{ flexDirection:"row" , justifyContent:"space-evenly" , marginBottom:25}}>
                    
               <Button
                       buttonStyle = {  White_Square_button }
                       textStyle = { Red_Text }
                       text  = "Add"
                       onPressMethod = { ()=>this.handleSave( productId,productCode , quantity , uom )}
                       buttonStyle = {disable ? [enable_Button_Style, White_Square_button] :[ disable_Button_Style , White_Square_button ]}
                       textStyle = { disable ? enable_Text_Style    :disable_Text_Style }
                       disable = { disable}
                      />
                        <Button
                       buttonStyle = {  White_Square_button}
                       textStyle = { Red_Text }
                       text  = "Cancel"
                       onPressMethod = {closeModal}
                       disable = {true}
                      />
                      </View>
               </View>
               </Card>
        </View>)
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return({
     //  Login:( data ) => dispatch(LoginMiddleware(data )) 
       saveItem : ( data ) => dispatch(SaveItem(data))
    })
 }
 
 const mapStateToProps = ( state ) => {
   console.log("state" , state )
   return({
     token: state.tokenReducer.token,
     items:state.orderReducer.items
   })
 }

export default connect(mapStateToProps , mapDispatchToProps )(ProductModal)