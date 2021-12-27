import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {View} from "../components/Themed";
import {Avatar, ListItem, colors, Button} from "react-native-elements";
import {messages_list} from "./messages";
import React from "react";



export default function IconsFlex () {
    return (
        <View style={styles.list}>
            {messages_list.map((user)=>(
                <ListItem key={user.id}>
                    <View style={styles.talkButton}>
                        <View style={styles.avatar}>
                            <Avatar rounded source={user.pic} size={40}/>
                        </View>
                        <View style={styles.messageContent}>
                            <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
                        </View>
                        {/*文字数が増えてもレイアウトがずれないようにする*/}
                        <ListItem.Chevron />
                    </View>
                </ListItem>
            ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'stretch',
    },
    talkButton: {
        justifyContent: "center",
        backgroundColor: '#6964FA',
        borderRadius: 10,
        flexDirection: 'row',
    },
    avatar: {
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
    },
    messageContent: {
        padding: 20,
        flex: 1,
        backgroundColor: 'transparent',
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        color: '#fff',
    },
});