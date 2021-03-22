import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";







const EditScreen = ({ navigation }) => {

  const recievedID = navigation.getParam("id");

  //we destructurize state variable from Context to get all the states
  const { state, editBlogPost } = useContext(Context);


  //searching for the state with given id
  const blogPost = state.find((blogPost) => blogPost.id == recievedID);



  //as we are editing we need to pass in some default values of a blogPost
  //so we pass in a object with two properties
  //title and content from the blog post we are currently on

  return (
    <BlogPostForm
      onSubmitFunction={(title, content) => {

        //we are sending an id of a current blogPost, and new title and content

        //pop function comes with our navigation prop
        //it pops off the current view from the stack navigator
        //returns the user back to the previous screen he was looking at
        //we must call callback functions with an arrow function
        editBlogPost(blogPost.id, title, content, () => navigation.pop());
      }}

      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />



  );



};

const styles = StyleSheet.create({});

export default EditScreen;
