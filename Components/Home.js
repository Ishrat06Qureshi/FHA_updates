import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text , Input , Item , H3 , Spinner , InputGroup } from 'native-base';
import { Image , Dimensions , View  , StyleSheet ,  FlatList , TouchableOpacity} from "react-native"
import Products from "./Products";



// import { encode } from "base-64";
import axios from "axios";
import { connect } from "react-redux"
import { GET_PRODUCTS } from "../Actions/ProductsAction";
import  { LOADING } from "../Actions/LoadingAction"
import productMiddleware from "../Middleware/ProductMiddleware"
import LoadingAction from "../Actions/LoadingAction";
import { withNavigation } from "react-navigation"




class Home extends React.Component {
  constructor ( props ) {
    super( props )
    this.onEndReachedCalledDuringMomentum = true
        this.state = {
          data : [],
          isLoading:true,
          search:"",    
          serverError :"",
          skippedProducts:0,
          loadingMore:false, 
          dataLength:0,
          activeTab : true,
          details:false
        }
      }

  fetchData = () => {
    const { skippedProducts } = this.state

    axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=1&skip=${skippedProducts}&search=0`).
    then(( response)  =>  this.setState( ( preState ) => {
      return({
        data:skippedProducts === 0 ? Array.from(response.data) : [...preState.data , ...response.data ],
        isLoading : false
      })
    })).catch ( err=> this.setState(({ serverError:err , isLoading:false })))
  }


  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        skippedProducts: prevState.skippedProducts + 10,
        loadingMore: true
      }),
      () => {
        this.fetchData();
      }
    );
  };

   _renderItem = ({item}) => {
  
    return( 
     
        
    <Products
      productCode  = { item.productCode }
      description = { item.description} 
      history = { this.props.history}
    />
    
    )
}
_loader = () => {
  const { loadingMore} = this.state
  return( loadingMore ? <Text> loading data</Text>: null)
}



  componentDidMount() {
     this.fetchData() 
  }

  
  // Remove the listener when you are done


  componentWillUnmount () {
    didBlurSubscription.remove();
  }
componentWillReceiveProps ( nextProps ) {
 console.log("nextProps" , nextProps )
} 
  render() {
     
     const {isLoading, data, dataLength , activeTab ,  loadingMore  } = this.state
     const { loadingState } = this.props

     console.log("loading more", loadingMore )
    return ( 
    
    // <Container>
    //       <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>

    //         <Body>
    //           <Text style = {{ color:"white"  , fontWeight:"bold" , textAlign:"center"}}> 
    //           Fastening House Atlantic </Text>


    //           </Body>
    //       </Header>
    //           <View> 
    //         { 
    //           isLoading ? <Spinner color='red' />  : ( <View>
              //     <FlatList
              //         data={ data}
              //         ItemSeparatorComponent={() => <View style={{ marginBottom:-350 }} />}
              //         renderItem={ this._renderItem}
              //         onEndReached = { this._handleLoadMore }
              //         initialNumToRender={8}  
              //         onEndReachedThreshold={0.5}
              //         ListFooterComponent= { this._loader}
              //         keyExtractor={(item, index) => item._id}

                     
                      
              //  />  
            
    //            <Text> { dataLength}</Text>
    //            </View> )

    //           }
           
    //         </View>
          
    // </Container>
    
    <View>
      <Text> good morning </Text>
    </View>
    );
  }

}

const mapStateToProps = ( state ) => {
  console.log( state )
  return ({
    loadingState: state.loadingReducer.loadingState
  })
}

  const mapDispatchToProps  = ( dispatch ) => {
    return({
      LoadingOn: () => { dispatch(LoadingAction.LOADING_ON_ACTION( true ))},
      LoadingOff: () => { dispatch(LoadingAction.LOADING_OFF_ACTION( false ))}
    })
  }

export default withNavigation(connect(mapStateToProps , mapDispatchToProps  )(Home))


// fetch from the woo commerce API
// fetchData = (  ) => {
  //   const { search } = this.state
  //   this.setState(({ isLoading:true}))
  //   const username = "ck_083aa754e82793e095856bf0ab682d699725def0"
  //   const password  ="cs_0771387d4b8f5bcc2a41f6f20e3f966e57193b0a"
  
  //   fetch(
  //     `https://www.fasteninghouseatlantic.com/wp-json/wc/v3/products?search=${search}`
  
      
      
  //     , {
  //   headers:{
  //     'Authorization':'Basic '+ encode(username + ":" + password),  
  //      },
  //   method:"GET" }).
  //   then(( response ) =>  response.json()).
  //   then(( data) =>   
    
  //   this.setState(({
  //      data,
  //      isLoading:false
      
  //     }))
   
  //     )

  // }

// <Container>

    //   <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>
    //   <Left>
    //         <Button transparent>
    //         <Icon 
    //         name='menu'
    //          style={{ color: "white"  }}
    //          />
    //         </Button>
    //       </Left> 
    //           {/* <Body> 
    //              <Image 
    //               source = { require("../assets/fastening-logo.png")}
    //               style = {{ 
    //                 height:90,
    //                 width:290 ,
    //                 justifyContent:"center",
    //                 alignContent:"center",
                 
    //               }}
    //              />
    //           </Body> */} */}
    //      <Right>
    //         <Button transparent>
    //           <Icon name='cart'
    //           style={{ color: "white" }}
    //           />
    //         </Button>
    //       </Right> 
    //   </Header>

    //   <Content> 
    
          /* <Item rounded style ={{ marginTop:20}}>
          <Icon active name='search' /> 
            <Input placeholder='Rounded Textbox'/>
          </Item> */
          /* <Item>
          <Text style = {{ marginTop:35 , fontWeight:"bold"  , justifyContent:"center" , fontSize:15 , textAlign:"center"}}> Hot Deal  </Text>
         
          </Item> */
          /* <Search/> */
        
          /* <Productshow/> */
          /* <Modal /> */
          /* <Customerdetails/> */
          
          
     
       
        /* <Placementdetails/> */
        /* <Item style = {{ marginTop:50}} >
                   <Icon active name='search' style = {{ marginLeft:25}}/> 
                    <Input placeholder='Search Product' style = {{ marginLeft:15 , width:80}}/>
                   </Item>
      </Content>

    



    </Container> */