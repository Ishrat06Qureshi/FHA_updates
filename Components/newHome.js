
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image
} from 'react-native';
import List from "./List";
import Heading from "./heading"
import { Container} from "../Styles/index";
import { RODS_URL , ANCHOR_URL, BIT_URL,NUT_URL,SAW_URL } from "../urls";
const rods_url = "http://13.59.64.244:3000/api/products?noOfRecords=3&skip=0&search=ROD"
export default class Home extends Component {
  render() {
    return (
        <View style = {{ flex : 1 , 
        // backgroundColor:"#F7F5D9" 
        backgroundColor:"blue"
        }}>
          
            
      <ScrollView>
          
         
          <View style={{...Container}}>
            <Image
              source = {require("../assets/fastening.png")}
              style ={{
                height:200,
                width:"100%",
                resizeMode:"contain"
              }}
            />
          </View>

          <View style={ {...Container , backgroundColor:"white"}}>
                
                <Heading 
                productCategory = "ROD"
                productLink = {RODS_URL}
                productName = "ROD"
              
                />
                  <List url = { RODS_URL }
                  />
           </View>
           {/* <View style={ {...Container , backgroundColor:"white"}}>
                
                <Heading 
                productCategory = "ANCHORS"
                productLink = {ANCHOR_URL}
                productName = "ANCHOR"
              
                />
                  <List url = { ANCHOR_URL } />
           </View> */}
          <View style={{...Container , backgroundColor:"white"}}>
          <Heading 
                productCategory = "BIT"
                productLink = {BIT_URL}
                productName = "BIT"
              
                />
                  <List url = { BIT_URL } />
          </View>
          <View style={{...Container , backgroundColor:"white"}}>
          <Heading 
                productCategory = "NUT"
                productLink = {NUT_URL}
                productName = "NUT"
              
                />
                  <List url = { NUT_URL } />
          </View>
          <View style={{...Container , backgroundColor:"white"}}>
          <Heading 
                productCategory = "SAW"
                productLink = {SAW_URL}
                productName = "SAW"
              
                />
                  <List url = { SAW_URL } />
          </View>
          {/* <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text> 
          </View> */}
      </ScrollView>
      </View>
    );
  }
}
    