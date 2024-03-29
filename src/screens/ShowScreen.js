import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import BlogPostInfo from "../components/BlogPostInfo";







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
            <BlogPostInfo blogTitle={blogPost.title} blogContent={blogPost.content} />
        </View>
    );
};






ShowScreen.navigationOptions = ({ navigation }) => {

    //we are passing a property when clicking the edit icon 
    //that property is the same as we got in the showScreen
    //thats id of certain blog post, so we can just pass it to the next screen and receive it as always

    return {
        headerRight: () => <TouchableOpacity onPress={() => {
            navigation.navigate("Edit", { id: navigation.getParam("id") })
        }}>
            <Feather name="edit-3" style={styles.editIcon} />
        </TouchableOpacity>
    };

};






const styles = StyleSheet.create({
    editIcon: {
        color: "black",
        fontSize: 35,
        marginRight: 25
    }
});



export default ShowScreen;