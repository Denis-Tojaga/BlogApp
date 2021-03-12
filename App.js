import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/indexScreen";





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
      title: "Index"
    }
  }

);






export default createAppContainer(navigator);