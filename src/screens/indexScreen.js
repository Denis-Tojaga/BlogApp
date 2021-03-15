import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";






const IndexScreen = () => {


    //destructuring the props we get from BlogContext component
    const { data, addBlogPost } = useContext(BlogContext);


    return (
        <View>
            <Text>Index screen!</Text>
            <Button title="Add post" onPress={addBlogPost} />

            <FlatList
                data={data}

                keyExtractor={blogPost => blogPost.title}

                renderItem={({ item }) => {

                    return <Text>{item.title}</Text>

                }}
            />



        </View>
    );
};


const styles = StyleSheet.create({

});



export default IndexScreen;