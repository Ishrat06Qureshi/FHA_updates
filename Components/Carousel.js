import React , { Component } from "react";
import { View , Text } from "react-native"

import Carousel from 'react-native-smart-carousel';


const datacarousel = [
    {
        "id": 339964,
        "title": "This is snowman first title",
        "imagePath": "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg", // URL
    },
    {
        "id": 339403,
        "title": "Snowman",
        "subtitle": "The guy you want",
        "imagePath": "https://wallpapercave.com/wp/kjh8eTP.jpg"
    },
  ];
  export default class MyCarousal extends Component {
      render() {
          return( <Carousel 
            data = { datacarousel }
            autoStart = { true } 
            navigation	= { true }
            />)
      }
  }

  