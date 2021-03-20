import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";





const BlogPostForm = ({ onSubmitFunction, initialValues }) => {


    //we initialize two pieces of state

    //we pass in the props we got from initialValues object EditScreen is sending

    //one to handle title entry
    const [title, setTitle] = useState(initialValues.title);

    //one to handle the content entry
    const [content, setContent] = useState(initialValues.content);




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
                //on pressing button we call the function we received as a prop from certain screen
                //the whole logic is done in screen we just need to call it here
                onPress={() => onSubmitFunction(title, content)}
                style={styles.button}
                title="Save"
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




export default BlogPostForm;