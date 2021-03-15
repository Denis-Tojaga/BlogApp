import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'; 






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

                    return <View style = {styles.row}>
                        <Text style = {styles.title}>{item.title}</Text>
                        <Feather name ="trash" style = {styles.iconStyle}  />
                    </View>

                }}
            />



        </View>
    );
};


const styles = StyleSheet.create({

    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:15,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRadius:4,
        borderColor:"gray"
    },

    iconStyle:{
        fontSize:35,
        color:"black"
    },

    title:{
        fontSize:20,
        fontWeight:"600"
    }
});



export default IndexScreen;