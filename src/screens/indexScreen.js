import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";






const IndexScreen = () => {


    //destructuring the props we get from BlogContext component
    const { state, addBlogPost } = useContext(Context);


    return (
        <View>
            <Text>Index screen!</Text>
            <Button title="Add post" onPress={addBlogPost} />

            <FlatList
                data={state}

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