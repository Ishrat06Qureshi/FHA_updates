import React , { Component } from "react";
import { Spinner  , Text  } from "native-base";
import { View , TouchableOpacity , FlatList  , ScrollView} from "react-native"
import axios from "axios";
import Products from "./Products";
import Heading_style from  "../Styles/index"

export default class AllProducts extends Component {
    state = {
        data : [],
        isLoading:true,
        search:"",    
        serverError :"",
        skippedProducts:0,
        loadingMore:false, 
        dataLength:0,
        activeTab : true,
        details:false,
        moreloader:true,
        showLoadMore:false
      }

    changeShowLoadMore = () => {
      console.log( this.state.showLoadMore )
      this.setState(({ showLoadMore:true}))
    }



      _renderItem = ({item}) => {
  
        return( 
         
       
            
        <Products
          productCode  = { item.productCode }
          description = { item.description} 
          uri = {item.imageLink}
          uom = {item.uom}
        />
       
        )
    }

    
    fetchData = () => {
        const { skippedProducts } = this.state
        const { productName }=  this.props.navigation.state.params
        console.log("skipped products before add", skippedProducts)
        axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=5&skip=${skippedProducts}&search=${productName}`).
        then(( response)  =>  this.setState( ( preState ) => {
           const length = response.data.length
          return({
            data:skippedProducts === 0 ? Array.from(response.data) :
             response.data.length? [...preState.data , ...response.data ]  :[...preState.data],
            isLoading : false,
            showLoadMore:false
            
            
          })
        })).catch ( err=> this.setState(({ serverError:err , isLoading:false })))
      }
    

      _handleLoadMore = () => {
        this.setState(
          (prevState, nextProps) => ({
            skippedProducts: prevState.skippedProducts + 5,
            loadingMore: true,
            showLoadMore:true
          }),
          () => {
            console.log("skipped products after adding 5" , this.state.skippedProducts)
            this.fetchData();
          }
        );
      };
  
    render() {
        const { data , isLoading , skippedProducts } = this.state
        const { productName }=  this.props.navigation.state.params
        console.log( "data" , data )
        return( <View>
                  <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> { productName } Products </Text>
            </View>
             
            {
                data.length? 
                <View>
                  <ScrollView>
                    
                <FlatList
                data={ data}
             
                renderItem={ this._renderItem}
                // onEndReached = { this._handleLoadMore }
              
              
                // onEndReachedThreshold={0.5}
               
                keyExtractor={(item, index) => item+index}
                />
             
               { !this.state.showLoadMore ? <Loader fetchMoreData = { this. _handleLoadMore}/>: <Spinner color = "red"/> }
                <View style  = {{ height:200 , width:"100%"}}></View>
                {/* <View style  = {{ height:200 , width:"100%"}}></View>
                <View style  = {{ height:200 , width:"100%"}}></View> */}
               </ScrollView>
             </View> 
          : <Spinner color="red"/>
            }
                   
                   
        </View>)
    }
    componentDidMount () {
        this.fetchData()
    } 
} 


const Loader = ( props ) => {
  return( <View>
    <TouchableOpacity onPress = { props.fetchMoreData}>
      <Text style = {{ color:"red"}}> Load more </Text>
    </TouchableOpacity>
  </View>)
}

