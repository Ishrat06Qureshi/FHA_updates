//Important
import React , { Component } from "react";
import { View , Text  , FlatList , Alert , ScrollView , ActivityIndicator  ,  Spinner } from "react-native";
import { connect } from "react-redux";
import CustomText from "./CustomText";
import { Heading_style , Red_Button , White_Text , 
  Red_Square_button,
   White_Square_button,
   Red_Text,
   enable_Button_Style,enable_Text_Style, 
   disable_Button_Style, 
   disable_Text_Style,
   centerBoldText
  } from "../Styles";
import Button from "./Button";
import validation_functions from "../utils/validation_functions"; 
import axios from "axios"
import { NavigationEvents } from 'react-navigation';
import Input from "./Input";
import DeleteItem from "../Actions/EmptyOrder"
import SaveOrderMiddleware from "../Middleware/SaveOrderMiddleware";
import CommentBox from "./CommentBox";
import SaveCommentAction from "../Actions/SaveComments"
const initialState = {
  orderPlace:false,
  lineOne:"",
  city:"",
  province:"",
  postalCode:"",
  showAddress:false,
  sameAsOffice:false,
  Different:false,
  isDefaultAddress:false,
  SameAsOfficeActive:false,
  DifferentActive:false,
  isLoading:false,
  phoneNumber:"",
  comment:""
}

class Cart extends Component {
  
   state = {...initialState }
    

   handleInputChange = ( fieldName , value) => {
    this.setState(({ [fieldName] : value}))
    validation_functions.updateValidators( fieldName , value )
  
  }

  handleCommentChange = ( fieldName , value) => {
    this.setState(({ [fieldName] : value}))
    console.log( "comment value " , value)

  }
  
    Proceed= () => {
      
      this.props.SaveComment(this.state.comment)
        this.setState(({ orderPlace: true }))
    }
    
     orderConformation = () => {
        return(Alert.alert(
          'Order Confirmation',
          'Your order has been received , FHA will shortly contact you',
          [
            
            
            {text: 'OK', onPress: () => this.props.navigation.navigate("Home")},
          ],
          {cancelable: false},
        ))
     }
  
    placeOrder = () => {
      const { items , userData , OrderSave } = this.props
      const { sameAsOffice, lineOne, city, province, postalCode } = this.state
      const shippingAddress =  sameAsOffice ? userData.officeAddress :  `${lineOne},${city} , ${province},${postalCode}`
      const data = {
        createdBy:userData.id,
        shippingAddress,
        productDetail:items,
        orderConformation:this.orderConformation,
       
      }
     
       OrderSave( data )
    }


    SameOfficeAddress = (  ) => {
      console.log("change office address ")
      this.setState(({ 
        showAddress:true,
        sameAsOffice:true,
        isDefaultAddress:true,
        SameAsOfficeActive:true,
        differentOfficeAddress:false
         
      }))
    }

    differentOfficeAddress = (  ) => {
   
      this.setState(({ 
        showAddress:true,
        sameAsOffice:false,
        SameAsOfficeActive:false,
        differentOfficeAddress:true
      }))
    }
    
 render() {

  
     const { orderPlace ,
     lineOne,
     city,
     province,
     postalCode,
     showAddress,
    sameAsOffice,
     differentOfficeAddress,
    phoneNumber,
     comment 
  } = this.state
     const disable = validation_functions.isFormValid(["lineOne","city","province"  ])
     
     const disableSameAddress= validation_functions.isFormValid(["phoneNumber"])
     const { items } = this.props
    
      return(

          <View>
             <NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />   
      
             { orderPlace ? 
             <View>
              <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Place Order</Text>
            </View>
            <Text style = {centerBoldText}>Shipping Address </Text>
              
              
            <View style = {{  justifyContent:"center" }}>
            <View style  ={{ flexDirection:"row" , justifyContent:"space-around" , 
            marginTop:20 , marginBottom:30}}>
                     <Button  
                    
                      text  = " Same as office"
                      onPressMethod = {this.SameOfficeAddress}
                      disable = {true}
                      buttonStyle = {sameAsOffice ? Red_Square_button:White_Square_button}
                      textStyle = { sameAsOffice ?White_Text : Red_Text}
                     />
                      <Button
                  
                       text  = "Other"
                       onPressMethod = { this.differentOfficeAddress}
                       disable = {true}
                       buttonStyle = {differentOfficeAddress ? Red_Square_button:White_Square_button  }
                       textStyle = {differentOfficeAddress? White_Text : Red_Text }
                      />
                      </View>
                      { showAddress ? sameAsOffice ? 
                      <ScrollView 
                      contentContainerStyle = {{ justifyContent:"center" , alignSelf:"center"}}>
                      <Input
                         label = ""
                         placeHolderText="shipping address"
                         isSecureTextEntry = { false}
                         onChangeText= { this.handleInputChange}
                         errorName = "shippingAddress" 
                         defaultAnswer = { this.props.userData.officeAddress}
                         edit = { false}
                      /> 
                        <Text style = {{ ...centerBoldText,marginTop:20 , marginBottom:30 }}>
                           Contact Details </Text>
                             <Input
                              label = "PHONE NUMBER"
                              placeHolderText="0123456789"
                              isSecureTextEntry = { false}
                              onChangeText= {this.handleInputChange}
                              errorName = "phoneNumber" 
                              keyBoardType = "phone-pad"
                              value = { phoneNumber }
                              />  
                      <View style = {{ justifyContent:"center" , alignSelf:"center"}}>
                       <Button 
                              onPressMethod = { this.placeOrder }
                              text = "Submit"
                              buttonStyle = {disableSameAddress ? enable_Button_Style : disable_Button_Style}
                              textStyle = { disableSameAddress? enable_Text_Style  :disable_Text_Style}
                              disable = { disableSameAddress }
                              />
                        </View>
                                <View style = {{ height:250 , width:"100%"}}></View>
                                <View style = {{ height:250 , width:"100%"}}></View>
                                <View style = {{ height:250 , width:"100%"}}></View>
                                {/* <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View> */}
                      </ScrollView>
                      
                      : <ScrollView contentContainerStyle = {{ justifyContent:"center" , alignSelf:"center"}}>

                        <Input
                        label = "Line 1"
                        placeHolderText="1 Moore Rd,"
                        isSecureTextEntry = { false}
                        onChangeText= { this.handleInputChange}
                        errorName = "lineOne" 
                        keyBoardType = "default"
                        value = { lineOne }
                        />  
                        
                          <Input
                        label = "City"
                        placeHolderText="Darthmouth"
                        isSecureTextEntry = { false}
                        onChangeText= { this.handleInputChange}
                        errorName = "city" 
                        keyBoardType = "default"
                        value = { city }
                        />  
                    
                            <Input
                              label = "Province"
                              placeHolderText="Nova Scotia"
                              isSecureTextEntry = { false}
                              onChangeText= { this.handleInputChange}
                              errorName = "province" 
                              keyBoardType = "default"
                              value = { province }
                              />  
                                <Input
                              label = "Postal Code"
                              placeHolderText="eg B3B 1J1"
                              isSecureTextEntry = { false}
                              onChangeText= { this.handleInputChange}
                              errorName = "postalCode" 
                              keyBoardType = "default"
                              value = { postalCode }
                              />  
                                <Text style = {{ ...centerBoldText,marginTop:20 , marginBottom:30 }}>
                               Contact Details </Text>
                             <Input
                              label = "PHONE NUMBER"
                              placeHolderText="0123456789"
                              isSecureTextEntry = { false}
                              onChangeText= {this.handleInputChange}
                              errorName = "phoneNumber" 
                              keyBoardType = "phone-pad"
                              value = { phoneNumber }
                              />  
                               <View style = {{ justifyContent:"center", alignSelf:"center"}}>
                 
                               <Button 
                              onPressMethod = { this.placeOrder }
                              text = "Submit"
                              buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
                              textStyle = { disable ? enable_Text_Style  :disable_Text_Style}
                              disable = { disable}
                              />
                                 </View> 
                                
                                <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View>
                                <View style = {{ height:150 , width:"100%"}}></View>
                      </ScrollView> : null }
                  
                  
             
            </View> 
                
             </View> :   <View>
                      <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
                               <Text style = { Heading_style }> Cart Details</Text>
                       </View>

                       { items.length ?  <View style = {{justifyContent:"center"}}>
              
                    <FlatList
                    data = { items }
                    renderItem = {Item}
                    keyExtractor = {( item , index ) => item+index }
                
                    />
                    <View style = {{ marginTop:35, marginBottom:35 , 
                    marginLeft:15 , marginRight:15 , borderWidth:1,borderColor:"red"}}>
                     <CommentBox
                             label = "Additional Comments"
                             placeHolderText="Add Your Opnion"
                             isSecureTextEntry = { false}
                             onChangeText= {this.handleCommentChange}
                             value = { comment }
                             errorName="comment"
                          />
                     </View>
                    <View style = {{ justifyContent:"center", alignItems:"center" }}>
                         
                         
                          <Button 
                          onPressMethod = {this.Proceed}
                          text = "Proceed"
                          buttonStyle = { enable_Button_Style}
                          textStyle = { enable_Text_Style }
                          disable = { true }
                          />
                </View>
            </View>: <View style = {{ justifyContent:"center" , alignItems:"center"}}>
                <Text> No Products available</Text>
            </View>
 }
           

</View>  }
          </View>
        
        
           
           
      )
 }
}

const Item = ( {item} ) => {
   
    return( <View style = {{ flex:1 , flexDirection:"row", justifyContent:"center" , alignSelf:"center" , marginLeft:20}}>
        <View style = {{ flex:2}}>
        <CustomText
     label =  "Product Code"
     text = {item.productCode}
    />
        </View>
 
   <View style = {{ flex:1}}>
   <CustomText
     label =  "Quantity"
     text = {item.quantity}
    />
   </View>
    
    <View style = {{ flex:1}}>
        
    <CustomText
     label =  "UOM"
     text = {item.UOM}
    />
    </View>
</View>)
}
const mapStateToProps = ( state ) => {
    console.log("redux state in cart" , state)
    return({
      items:state.orderReducer.items,
      userData:state.UserDataReducer.UserData
    })
  }

  const mapDispatchToProps = ( dispatch  ) => {

    return({
      DeleteItem : (  ) => dispatch(DeleteItem()),
      OrderSave : (data) => dispatch(SaveOrderMiddleware(data)),
      SaveComment : ( comment ) =>  dispatch(SaveCommentAction.SAVE_COMMENT(comment))
    })
  } 
export default connect(mapStateToProps , mapDispatchToProps  )(Cart)