import * as React from "react";
import { Container , Content,  Item ,  Input,  Icon, Spinner  } from "native-base";
import { View , Text , FlatList , TouchableOpacity,Keyboard } from "react-native";
import { NavigationEvents } from 'react-navigation';
import axios from "axios";
import Products from "./Products";

const initialState = {
  data : [],
  activeSuggestion: 0,  
  filteredSuggestions: [],
  showSuggestions: false,
  userInput: '',
  filterList:[],
  selectedValue :"",
  searchedProducts:[],
  dataLoading:false
}

export default class Search extends React.Component {
    state = {...initialState }
     

    
    getProduct = ( productId) => {
      Keyboard.dismiss()
      axios.get(`http://13.59.64.244:3000/api/products/${productId}`).
      then(( response )=>   
      this.setState(({ searchedProducts : response.data})))
      
      .catch( err => console.log("error" , err ))
    }
    componentDidMount = () => {
        axios.get("http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0")
        .then(( serverData ) => {
          const { data} = serverData
          this.setState(({ data }))
        }).catch ( err => console.log( err.response.data))
    }
  
    handleInput = ( userInput ) => {
      // console.log("userInput" , userInput )
      this.setState(({ userInput , searchedProducts:[]}) , ( ) => {
    
        this.showSuggestion( )
      }) }


    showSuggestion = (  ) => {
      const { data , userInput  } = this.state
      console.log("userInput" , userInput)
      const filterList = data.filter( entry => 
         entry.productCode.includes( userInput.toLowerCase() ) ||
         entry.description.includes(userInput.toUpperCase()))
         console.log("filter" , filterList)
       if( filterList.length === 0 ) {
         axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=85&skip=0&search=${userInput}`)
         .then(( response ) => 
         this.setState(({
          showSuggestions:true,
          filterList:response.data })))
       }
       else {
        this.setState(({ 
          showSuggestions:true,
          filterList }))

      }
    }
    
    selected = ( item  ) => {
       this.setState(({ 
         userInput: item.productCode,
         showSuggestions:false
        }) , ()=> this.getProduct( item.id))
        
        
    }


   _renderItem  = ({ item }) => {
    return( 
       <TouchableOpacity  onPress = {() => this.selected( item )}>
         <View style = {{ paddingLeft:15}}>
        
              <Text style = {{ color:"#DA011D"}}>
                { item.productCode}
              </Text>
              <Text style = {{ color : "#A9A9A9"}}>
                { item.description }
              </Text>
       
              </View> 
         </TouchableOpacity>)
   } 


    
    render() {
      const { showSuggestions, filterList ,  searchedProducts , dataLoading } = this.state
 
      return(
        <Container>
     
        <Content>
        <NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />
          <Item  style = {{ marginTop: 50}}>
            <Icon active name='search'  style = {{ paddingLeft:25}}/>
            <Input 
            placeholder='Search Product here'
            onChangeText = { (userInput) => this.handleInput( userInput )}
            value = { this.state.userInput}
            />
          </Item>
          <View> 
          { showSuggestions ? 
          <FlatList
           data = { filterList }
           renderItem = {this._renderItem}
           keyExtractor =  {(item, index) => item+index }
           keyboardShouldPersistTaps='always'

          /> : null}
           {  searchedProducts.length ?  searchedProducts.map(( item , index  ) => 
           
           <Products  
            productCode  = { item.productCode}
      description = { item.description} 
      uri={item.imageLink}
      uom = {item.uom}
      productId = {item.id}
      />  ) 
           : dataLoading ? <Spinner color ="red" size = {25}/>: null }
      </View>

         

          
        </Content>
      </Container>
      )
       
    }
        
    
}

