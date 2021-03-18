import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";



const CreateScreen = ({ navigation }) => {

    //we initialize two pieces of state

    //one to handle title entry 
    const [title, setTitle] = useState("");


    //one to handle the content entry
    const [content, setContent] = useState("");



    return (
        <View>
            <Text>Enter Title:</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} />
            <Text>Enter Content:</Text>
            <TextInput value={content} onChangeText={(content) => setContent(content)} />
        </View>
    );

};



const styles = StyleSheet.create({


});



export default CreateScreen;