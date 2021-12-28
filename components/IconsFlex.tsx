import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {View} from "../components/Themed";
import {Avatar, ListItem, colors, Button} from "react-native-elements";
import {messages_list} from "./messages";
import React from "react";
import 'react-native-gesture-handler';
import ChatScreen from "../screens/ChatScreen";


export default function IconsFlex () {
    return (
        <View style={styles.list}>
            {messages_list.map((user)=>(
                <ListItem key={user.id} bottomDivider onPress={() => this.props.navigation.navigate('ChatScreen')}>
                    <Avatar rounded source={user.pic} />
                        <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                        <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
                    {/*文字数が増えてもレイアウトがずれないようにする*/}
                    <ListItem.Chevron />
                </ListItem>

            ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'gray',
    },
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        flex: 1,
    }
});