import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";





const BlogPostForm = () => {


    //we initialize two pieces of state

    //one to handle title entry
    const [title, setTitle] = useState("");

    //one to handle the content entry
    const [content, setContent] = useState("");




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