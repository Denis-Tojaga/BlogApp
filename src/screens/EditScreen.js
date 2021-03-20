import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";







const EditScreen = ({ navigation }) => {

  const recievedID = navigation.getParam("id");

  //we destructurize state variable from Context to get all the states
  const { state } = useContext(Context);


  //searching for the state with given id
  const blogPost = state.find((blogPost) => blogPost.id == recievedID);



  return (
    <BlogPostForm />
  );



};

const styles = StyleSheet.create({});

export default EditScreen;
