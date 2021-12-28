import React, { useCallback, useState, useEffect } from 'react'
import {GiftedChat, QuickReplies, User} from 'react-native-gifted-chat'
import {db} from "../firebase";
import { collection, addDoc, query, getFirestore, orderBy, limit } from 'firebase/firestore/lite';
import { onSnapshot } from 'firebase/firestore'
import {Alert} from "react-native";

// declare the type of each message
interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user: User
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
    quickReplies?: QuickReplies
}


export function MessageFunc() {
    const [messages, setMessages] = useState<IMessage[]>([]);

        //入室時に送信されるメッセージを設定
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Welcome!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    //送信時にメッセージをトークルームに追加
    const onSend = useCallback((m=[]) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, m))
        //入力をメッセージの形式に変換
        const {
            _id,
            createdAt,
            text,
            user,
        } = messages[0]

        addDoc(collection(db, "users"),{
            id: _id,
            createdAt: createdAt,
            text: text,
            user: user,
        })
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )

}


