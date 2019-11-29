import React , { Component } from "react";
import { FlatList , View, Text , Dimensions , TouchableOpacity } from "react-native";
import { Spinner } from "native-base";
import axios from "axios";

const ScreenHeight = Dimensions.get("window").height

import Products from "./Products";
 class List extends Component {
  state = {
      data:[],
      err:""
  }

  OnMoreLoading = () => {
    this.setState(({ onMoreLoad: true}))
  }
  _renderItem = ({item}) => {

    return( 
     
        
    <Products
      productCode  = { item.productCode }
      productId = {item.id}
      description = { item.description} 
      history = { this.props.history}
      uri  = {item.imageLink}
      uom = {item.uom}
    />
    
    )
}
   render() {
       const {  data , err } = this.state
       return (
           <View style = {{ flex:1 , }}>
              
               {
                   data.length?  
                 
                   <FlatList
                   data={ data}
                    ItemSeparatorComponent = { () => <View style = {{ marginTop:ScreenHeight*0.0388}}></View>}
                   renderItem={ this._renderItem}
                   
                   keyExtractor={(item, index) => item+index} /> 
        
            : <Spinner color = "red"/>
               }
           </View>
               
       );
   } 
   componentDidMount ( props ) {
      
       axios.get(this.props.url).
       then(( response ) => 
       
        this.setState(({ data: response.data }))
        ).catch ( err => 
            // console.log("err" , err.response.data)
             this.setState(({ err:err.response.data })) 
           
        )
   } 
 }
 export default List