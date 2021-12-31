import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import {GiftedChat, QuickReplies, User} from 'react-native-gifted-chat'
import {db} from "../firebase";
import { collection, addDoc, getDocs, query, orderBy} from 'firebase/firestore/lite';
import { onSnapshot } from 'firebase/firestore'
import {Text} from "react-native";

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
    // useLayoutEffect(() => {
        //データを指定
        //クエリを作成
        //

        // const unsubscribe = onSnapshot(q, querySnapshot => {
        //     setMessages(
        //         querySnapshot.docs.map(doc => ({
        //             _id: doc.data()._id,
        //             createdAt: doc.data().createdAt.toDate(),
        //             text: doc.data().text,
        //             user: doc.data().user
        //         }))
        //     );
        // });

        async function CheckMessages() {
            const collectionRef = collection(db, 'users');
            const q = query(collectionRef, orderBy('createdAt', 'desc'));
            const docSnap = await getDocs(q);
            docSnap.forEach((doc) =>
            {setMessages(previousMessages => GiftedChat.append(previousMessages, doc.data()))});
            // return (
            //     {id: docSnap.data().id}
            // );
        }

        CheckMessages()

        // console.log(unsubscribe());
    // });

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            }}
        />

    )

}


// function LoadMessages() {
//     // Create the query to load the last 12 messages and listen for new ones.
//     const recentMessagesQuery = query(collection(getFirestore(), 'messages'), orderBy('timestamp', 'desc'), limit(12));
//
//     // Start listening to the query.
//     onSnapshot(recentMessagesQuery, function(snapshot) {
//         snapshot.docChanges().forEach(function(change) {
//             if (change.type === 'removed') {
//                 // deleteMessage(change.doc.id);
//             } else {
//                 let message = change.doc.data();
//                 messages_list.append(message.createdAt, message.text, message.user);
//             }
//         });
//     });
// }


