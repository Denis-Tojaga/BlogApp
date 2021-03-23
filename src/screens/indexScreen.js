import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather, Ionicons } from '@expo/vector-icons';






const IndexScreen = ({ navigation }) => {

    //destructuring the props we get from BlogContext component
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);


    //we use useEffect to run the arrow function exactly one time when the screen gets rendered
    useEffect(() => {
        getBlogPosts();
    }, []);



    return (
        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}> Blog list </Text>
            </View>


            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}

                renderItem={({ item }) => {

                    return (
                        //as a second param we send an object that hase property of blogId and value will be the clicked item.id
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Show", { id: item.id, title: item.title, content: item.content })
                        }}>

                            <View style={styles.row}>
                                <Text style={styles.blogTitle}>{item.title}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                    <Feather name="trash" style={styles.deleteIconStyle} />
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    );
                }}

            />



        </View>
    );
};







//we use this to display icon in the header part of application
//in order to navigate from this we again need to destructurize the navigation object
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        //in order to avoid the warning we use arrow function instead of just showing the component
        //for clicking it we have to wrap it up in touchable opacity component
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <Ionicons name="md-add-circle-outline" style={styles.addIconStyle} />
        </TouchableOpacity>

    };
};











const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderRadius: 4,
        borderColor: "gray"
    },

    deleteIconStyle: {
        fontSize: 35,
        color: "black"
    },

    blogTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "black",

    },


    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
    },

    titleView: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: 12
    },

    addIconStyle: {
        fontSize: 38,
        color: "black",
        marginRight: 20
    }
});



export default IndexScreen;