import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity , FlatList , ScrollView  } from 'react-native';
import Products  from "./Products";

import Modal from "./Modal";
import { Spinner} from "native-base"

export default class Productshow extends React.Component {
  state = {
    data : [],
    isLoading:true


  } 

  hideDetails = ( ) => {
   
    this.setState(( preState ) => {
       return (   {
         showDetails : !preState.showDetails,
       

       }  )
    })
  }

  _renderItem = ({item}) => {
    return( <Products
      name  = { item.name}
      regular_price = { item.regular_price}
      sale_price = { item.sale_price}
      description = { item.description} 
      imageUri = { item.images[0].src}
/>)

  }
  render() {
    const { data   , showDetails   , isLoading } = this.state
     console.log( "data " , data )
     return( <View>
       
       { isLoading ? <Spinner color='red' />  : <FlatList
         data = { data }
      
        renderItem = { this._renderItem}
      
      />}
      </View>)
   
     
      
    
  }
  componentDidMount () {
    
        const username = "ck_083aa754e82793e095856bf0ab682d699725def0"
        const password  ="cs_0771387d4b8f5bcc2a41f6f20e3f966e57193b0a"
      
        fetch(
          "https://www.fasteninghouseatlantic.com/wp-json/wc/v3/products?per_page=5&on_sale=true" 
      
          
          
          , {
        headers:{
          'Authorization':'Basic '+ encode(username + ":" + password),  
           },
        method:"GET" }).
        then(( response ) =>  response.json()).
        then(( data) =>   this.setState(({
           data,
           isLoading:false
          
          })))

      }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  }
});