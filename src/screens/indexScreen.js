import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather,AntDesign } from '@expo/vector-icons';






const IndexScreen = () => {

    //destructuring the props we get from BlogContext component
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>

            <TouchableOpacity>

                <View style = {styles.titleView}>
                    <Text style = {styles.title}> Blog list </Text>
                    <AntDesign name="pluscircleo" style ={styles.addIconStyle} />
                </View>

            </TouchableOpacity>



            <FlatList
                data={state}

                keyExtractor={blogPost => blogPost.title}

                renderItem={({ item }) => {

                    return <View style={styles.row}>

                        <Text style={styles.blogTitle}>{item.title}</Text>

                        <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                            <Feather name="trash" style={styles.iconStyle} />
                        </TouchableOpacity>

                    </View>

                }}
            />



        </View>
    );
};








const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 4,
        borderColor: "gray"
    },

    iconStyle: {
        fontSize: 35,
        color: "black"
    },

    blogTitle: {
        fontSize: 18,
        fontWeight: "500"
    },


    title:{
        fontSize:30,
        fontWeight:"bold",
    },

    titleView:{
        borderBottomWidth:1,
        borderBottomColor:"black",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:5,
        paddingHorizontal:20,
        marginVertical:12
    },

    addIconStyle:{
        fontSize:38,
        color:"black"
    }
});



export default IndexScreen;