import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";







const EditScreen = ({ navigation }) => {

  const recievedID = navigation.getParam("id");

  //we destructurize state variable from Context to get all the states
  const { state } = useContext(Context);


  //searching for the state with given id
  const blogPost = state.find((blogPost) => blogPost.id == recievedID);



  //if we are editing,the initial state for useState won't be an empty string
  //it will be a current title that needs to be changed
  const [title, setTitle] = useState(blogPost.title);


  //we do the same thing for content
  const [content, setContent] = useState(blogPost.content);




  return (
    <View>
      <Text>Welcome to edit screen! - {recievedID}</Text>
    </View>
  );



};

const styles = StyleSheet.create({});

export default EditScreen;
