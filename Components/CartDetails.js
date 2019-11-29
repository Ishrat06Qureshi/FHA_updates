import React , { Component } from "react";
import { View , Text , ScrollView , FlatList } from "react-native";
import { connect } from "react-redux";
import CustomText from "./CustomText";
import { Heading_style ,
        enable_Button_Style,enable_Text_Style, 
   
  } from "../Styles";
import Button from "./Button";

import { NavigationEvents } from 'react-navigation';

import CommentBox from "./CommentBox";
import SaveCommentAction from "../Actions/SaveComments"
const initialState = {
    
    comment:""
  }
 class Cartdetails  extends Component {
     state = {...initialState}

     handleCommentChange = ( fieldName , value) => {
        this.setState(({ [fieldName] : value}))
        console.log( "comment value " , value)
    
      }

      Proceed= () => {
       
        this.props.SaveComment(this.state.comment)
        this.props.navigation.navigate("Cart")
      }
       render() {
         const { items } = this.props
         const { comment } = this.state
         return( <View>
           <FlatList
              data = { items }
              renderItem = {Item}
              keyExtractor = {( item , index ) => item+index }
              ListFooterComponent = { () => { return(<View>

                             <CommentBox
                             label = "Additional Comments"
                             placeHolderText="Add Your Opnion"
                             isSecureTextEntry = { false}
                             onChangeText= {this.handleCommentChange}
                             value = { comment }
                             errorName="comment"
                          />
                           
                          <Button 
                          onPressMethod = {this.Proceed}
                          text = "Proceed"
                          buttonStyle = { enable_Button_Style}
                          textStyle = { enable_Text_Style }
                          disable = { true }
                          />

              </View>)}}
              
              />
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
     
    })
  }

  const mapDispatchToProps = ( dispatch  ) => {

    return({
      
      SaveComment : ( comment ) =>  dispatch(SaveCommentAction.SAVE_COMMENT(comment))
    })
  } 
export default connect(mapStateToProps , mapDispatchToProps  )(Cartdetails)
 