import React, { useContext } from "react";
import { Text,TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";



const CreateScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Enter Title:</Text>
            <TextInput />
            <Text>Enter Content:</Text>
            <TextInput />
        </View>
    );

};



const styles = StyleSheet.create({


});



export default CreateScreen;