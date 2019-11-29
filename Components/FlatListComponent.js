import React , { Component } from "react";
import { View , FlatList  } from "react-native";

const _renderItem = ({item}) => {
  
    return( <Products
      productCode  = { item.productCode}
      description = { item.description} 
    />)
}



const ProductList = ( props ) => {
    const { data , fetchData } = props 
   return ( <View>
        <FlatList
              data={ data}
              ItemSeparatorComponent={() => <View style={{ marginBottom:-450 }} />}
              renderItem={ _renderItem}
              onEndReached = { fetchData() }
              onEndReachedThreshold =  { 0.5 }
               /> 
   </View>)
}

export default ProductList
