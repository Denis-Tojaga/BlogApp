import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";


const IndexScreen = () => {


    //here we store the value of the context object
    //this gives us  an object with props of data and addBlogPost function
    const blogProviderObject = useContext(BlogContext);




    //we are passing a reference to a function when cerain button is pressed

    return (
        <View>
            <Text>Index Screen!</Text>

            <Button title="Add blogpost" onPress={blogProviderObject.addBlogPost} />

            <FlatList
                data={blogProviderObject.data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {

                    return (
                        <Text>{item.title}</Text>
                    );

                }}
            />


        </View>


    );

};




const styles = StyleSheet.create({

});


export default IndexScreen;