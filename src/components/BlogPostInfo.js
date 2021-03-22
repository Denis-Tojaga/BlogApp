import React from "react";
import { StyleSheet, Text, View } from "react-native";




const BlogPostInfo = ({ blogTitle, blogContent }) => {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>Blog title:</Text>
                <Text style={styles.title}>{blogTitle}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={styles.label2}>Blog content</Text>
                <Text style={styles.content}>{blogContent}</Text>
            </View>

        </>
    );
};




const styles = StyleSheet.create({

    container: {
        marginHorizontal: 22,
        marginVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    container2: {
        marginHorizontal: 22,
        marginVertical: 25,
    },

    label: {
        fontSize: 32,
        fontWeight: "bold",
    },

    label2: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
    },


    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        paddingTop: 10,
        marginLeft: 25
    },

    content: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "left",
        marginTop: 15
    },


});



export default BlogPostInfo;