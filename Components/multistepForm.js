import React , { Component } from "react"

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { View , Text , TextInput  , Image } from "react-native"

export default class MultiForm extends Component {
    render() {
        return(
        //      <View style={{flex: 1}}>
        //     <View style = {{ alignItems:"center"}}>
        //     <Image
        //     style = {{
        //         height:200,
        //         width:100,
        //     resizeMode:"cover"}}
        //     source = {require("../assets/newlogo.png")}
        //     />
        //     </View>
           
           
        //     <ProgressSteps>
        //         <ProgressStep label="First Step">
        //             <View style={{ alignItems: 'center' }}>
        //                   <Text> Email </Text>
        //                   <TextInput/>
        //                   <Text> Password </Text>
        //                   <TextInput/>
        //             </View>
        //         </ProgressStep>
        //         <ProgressStep label="Second Step">
        //             <View style={{ alignItems: 'center' }}>
        //             <TextInput/>
        //                   <TextInput/>
        //             </View>
        //         </ProgressStep>
               
        //     </ProgressSteps>
        // </View> )
        <View style = {{ flex:1}}>
          <View>
              <Image />
          </View>

        </View>        )
    }
}

