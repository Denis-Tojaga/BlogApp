//everytime we want to use some JSX in our file we need to import React
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/indexScreen";
//because we didn't use the export default in out BlogProvider we must use { }
import { BlogProvider } from "./src/context/BlogContext";





//createStackNavigator takes two objects
//1. pairs for indexing each screen
//2.object for initial show screen

const navigator = createStackNavigator(

  {
    Index: IndexScreen

  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }

);




//when we export createAppContainer(navigator) the react-native export like some sort of component
//we can assign the whole component to a variable and export a function 
//wrapping it inside our own custom component
const App = createAppContainer(navigator);


export default () => {

  //reason why we added children props in BlogProvider, because we want it to displey some other custom component
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

