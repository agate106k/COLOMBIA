import {collection, getFirestore, limit, orderBy, query} from "firebase/firestore/lite";
import {onSnapshot} from "firebase/firestore";
import {User} from "react-native-gifted-chat";


//直近のメッセージを読み込み
export function LoadMessages() {
    // Create the query to load the last 12 messages and listen for new ones.
    const recentMessagesQuery = query(collection(getFirestore(), 'messages'), orderBy('timestamp', 'desc'), limit(12));

    // Start listening to the query.
    onSnapshot(recentMessagesQuery, function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === 'removed') {
                deleteMessage(change.doc.id);
            } else {
                let message = change.doc.data();
                displayMessage(change.doc.id, message.timestamp, message.name,
                    message.text, message.profilePicUrl, message.imageUrl);
            }
        });
    });
}
