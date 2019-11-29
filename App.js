
import * as React from 'react';
import AppContainer from "./Navigation/navigation";
import { Provider } from "react-redux";
import Store from "./Store/store";
import { StyleSheet } from "react-native"

 class App extends React.Component {
  render() {

  
    return (
   <Provider  store = { Store }>
       <AppContainer style = { styles.app}/>
   </Provider>
   
   
    
    );
  }
}       
const styles = StyleSheet.create({
  app:{
    flex:1
  }
})
export default App
