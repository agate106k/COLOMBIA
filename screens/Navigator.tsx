import ChatScreen from "./ChatScreen";
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import TabOneScreen from "./TabOneScreen";


export default createStackNavigator(
    {
        Home: TabOneScreen,
        Details: ChatScreen,
    },
    {
        initialRouteName: 'Home',
    }
);