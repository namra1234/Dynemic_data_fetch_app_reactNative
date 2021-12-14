import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/views/HomeScreen"
import ResultShowScreen from "./src/views/displayDataScreen"

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ResultShowScreen : ResultShowScreen,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "Shopping App",
    },
  }
);



export default createAppContainer(navigator);
