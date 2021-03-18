import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity,Button } from "react-native";
import { Context } from "../context/BlogContext";



const CreateScreen = ({ navigation }) => {

    //we initialize two pieces of state

    //one to handle title entry 
    const [title, setTitle] = useState("");


    //one to handle the content entry
    const [content, setContent] = useState("");



    return (
        <View style = {styles.container}>

            <Text style={styles.label} >Enter Title:</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.label} >Enter Content:</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(content) => setContent(content)} />

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
        margin: 10,
        borderRadius:8
    },


    label: {
        fontSize: 25,
        fontWeight:"bold",
        marginHorizontal: 10
    },

    container:{
        marginVertical:25
    }

});



export default CreateScreen;