import {Avatar} from "react-native-elements";
import {StyleSheet, View, Text} from "react-native";
import React from "react";
import TabOneScreen from "./TabOneScreen";
import {GiftedChat} from 'react-native-gifted-chat';
import {Component} from "react";

export default function ChatScreen(){

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    reply(){
        return {
            _id: 1,
            text: 'こんにちは！',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'TEST USER',
                avatar: '../assets/images/matching-app-icon.png',
            }
        };
    }


    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(GiftedChat.append(previousState.messages, messages), this.reply()),
        }))
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                    name: 'ME',
                    avatar: '../assets/images/matching-app-icon.png'
                }}
            />
        );
    }
}
