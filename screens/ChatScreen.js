import React,{useLayoutEffect} from "react";
import {View, Text} from "react-native";
import {auth} from "../firebase";
import {AntDesign} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Avatar} from "react-native-elements"
const signOut = () => {
  auth.signOut().then(() => {

  }).catch((error) => {

  });
}
const ChatScreen = ({navigation}) => {

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerLeft:()=> (
        <View style ={{marginLeft:20}}>
            <Avatar
            rounded
            source ={{
              uri:auth?.currentUser?.photoURL
            }}
            />
        </View>
      ),
      headerRight:()=>(
        <TouchableOpacity sytle={{
          marginRight:30
        }}    onPress={signOut}
        >
          <AntDesign name ="logout" size = {24} color = "black" />
        </TouchableOpacity>
      )

    })

  },[])




    return(
    <View>
      <Text> Chat Screen </Text>
    </View>
  )
}
export default ChatScreen
