import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {



  //we initialize two pieces of state

  //one to handle title entry
  const [title, setTitle] = useState("");

  //one to handle the content entry
  const [content, setContent] = useState("");

  //destructurizing the addBlogPost function our context gives us with other functions
  const { addBlogPost } = useContext(Context);




  return (
    <View style={styles.container}>


      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(content) => setContent(content)}
      />



      <Button
        onPress={() => {
          if (ValidateInputs(title, content)) {
            addBlogPost(title, content, () => {
              //as a third parameter we add in a callback function to our addBlogPost function
              //because if we were communicating with API we would have to wait for some response
              //because we received as a prop navigation object we just call function to navigate back to home screen after adding new post
              navigation.navigate("Index");
            });
          }
        }}
        style={styles.button}
        title="Add blog post"
      />




    </View>
  );





};











const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 8,
    borderRadius: 8,
  },

  label: {
    fontSize: 23,
    fontWeight: "bold",
    marginHorizontal: 10,
  },

  container: {
    marginVertical: 25,
  },

  button: {
    marginHorizontal: 10,
  },
});











export default CreateScreen;
