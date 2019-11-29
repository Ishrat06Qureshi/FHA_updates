import React , { Component } from "react";
import { View , Text , ScrollView  , TouchableOpacity } from "react-native";
import {Ionicons , 
    MaterialCommunityIcons,
    Feather,
    AntDesign,
    MaterialIcons,
    Entypo} from "@expo/vector-icons";
import {  Heading_style , bold_Text } from "../Styles";
import CustomTextWithIcon from "./CustomTextWithIcon"
import { connect } from "react-redux"
import * as style from "../Styles"

class Profile extends Component {
    
   render() {
      const { email,
         customerNumber,
        
         companyName,
        
         contactPersonName,
         phoneNumber,
         lineOne,
         lineTwo,
         city,
         province,
         postalCode, } = this.props.userData
       return( <View>
            <View >
                {/* {/* <Feather  name="user"  size = {35 }  color = "orange" style  = {{justifyContent:"center" , 
                alignSelf:"center" , marginTop:15  }}/> */}
                {/* <TouchableOpacity onPress = { () => this.props.navigation.navigate("EditProfile")}>
                <MaterialCommunityIcons  name="pencil-circle-outline"  size = {35 }  color = "orange" style  = {{justifyContent:"center" , 
                alignSelf:"center" , marginTop:15  }}/>
                </TouchableOpacity> */}
                 
                
                <View style = {{ 
                  justifyContent:"space-around" ,
                  alignItems:"center",
                  marginTop:20 ,
                  marginBottom:25,
                  flexDirection:"row"}}>
                        <Text style = { {...bold_Text , fontSize: 25 , textTransform:"capitalize" }  }>{companyName}</Text>
                        <TouchableOpacity onPress = { () => this.props.navigation.navigate("EditProfile")}>
                           <Text style = {{ color:"#828282"}}> Edit</Text>
                        </TouchableOpacity>
            </View>
            <ScrollView
             contentContainerStyle = {{ paddingHorizontal:25}}
            >
            
                  <CustomTextWithIcon
                     IconComponent = {() =>  <AntDesign name= "barcode" size = {25}  color = "orange"/>}
                     label = "Customer Number"
                     text = { customerNumber }
                  />
                     <CustomTextWithIcon
                     IconComponent = {() =>  <MaterialIcons name= "person-pin" size = {25}  color = "orange"/>}
                     label = "Contact Person Name"
                     text = { contactPersonName }
                  />
                     <CustomTextWithIcon
                     IconComponent = {() =>  <MaterialIcons name= "email" size = {25}  color = "orange"/>}
                     label = "Email"
                     text = { email }
                  />
                     <CustomTextWithIcon
                     IconComponent = {() =>   <Entypo name= "address" size = {25} color = "orange"/>}
                     label = "Office Address"
                     text = {`${lineOne} , ${city} , ${province} , ${postalCode}`}
                  />
                     <CustomTextWithIcon
                     IconComponent = {() => <Feather  name= "phone" size = {25}  color = "orange"/>}
                     label = "Phone Number"
                     text = { phoneNumber }
                  />
              </ScrollView>
                 </View>
       </View>)
   }
}

const mapStateToProps = ( state ) => {

   return({
      userData:state.UserDataReducer.UserData
     })
}
export default connect( mapStateToProps , null )(Profile)