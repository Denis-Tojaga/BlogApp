import React,{useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import BlogContext from "../context/BlogContext";


const IndexScreen = ()=>{


    //here we store the value of the context object
    const value = useContext(BlogContext);

     



    return(
        <View>
            <Text>Index Screen!</Text>
        </View>

    );

};




const styles = StyleSheet.create({

});


export default IndexScreen;