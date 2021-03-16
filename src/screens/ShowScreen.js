import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';



//in order to recieve something with navigating between screens 
//we again must recieve { navigation } property
//that property has a function getParam("nameOfPropWeSent")
//function takes the name of the property,object we recieved, has
const ShowScreen = ({ navigation }) => {

    //the id we got from index screen by clicking on some blogPost
    const recievedID = navigation.getParam("id");


    //reason we can destructure of this is because the Context component has value prop of { state, ...boundActions}
    //but before that we had to import the whole Context from a file
    const { state } = useContext(Context);

    //helper function that gets called with every blogPost, when it finds the first true statement it gives back a blogpost
    //it can work as a query x=> x.id == someId
    const blogPost = state.find((blogPost) => { return blogPost.id === recievedID })



    return (
        <View>

            <View style={styles.titleEdit}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter blog title here"
                />
                <TouchableOpacity>
                    <Feather name="edit-3" style={styles.editIconStyle} />
                </TouchableOpacity>
            </View>


        </View>
    );
};



const styles = StyleSheet.create({

    titleEdit: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginHorizontal: 5,
        marginVertical: 15
    },


    inputStyle: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        flex: 1,
        marginRight: 20,
        fontSize: 20
    },

    editIconStyle: {
        color: "black",
        fontSize: 40,
    }
});



export default ShowScreen;