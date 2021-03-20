import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";





const CreateScreen = ({ navigation }) => {
  //destructurizing the addBlogPost function our context gives us with other functions
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm />
  );

};











const styles = StyleSheet.create({

});











export default CreateScreen;
