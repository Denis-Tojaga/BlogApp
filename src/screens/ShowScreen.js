import React from "react";
import {Text,View,StyleSheet} from "react-native";



//in order to recieve something with navigating between screens 
//we again must recieve { navigation } property
//that property has a function getParam("nameOfPropWeSent")
//function takes the name of the property,object we recieved, has
const ShowScreen = ({navigation})=>{

    
    console.log(navigation.getParam("blogId"));

    return <Text>Show screen!</Text>

};



const styles = StyleSheet.create({

});



export default ShowScreen;