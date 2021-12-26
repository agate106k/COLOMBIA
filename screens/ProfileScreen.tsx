import {Image, StyleSheet} from "react-native";
import {Text, View} from "../components/Themed";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.profilePic} source={require('../assets/images/matching-app-icon.png')} />
            <Text style={styles.title}>Your Name</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.getStartedText} >プロフィール文がここに入ります</Text>
        </View>
    );
}
    
const styles = StyleSheet.create ({
    profilePic: {
        width: 192,
        height: 192,
        borderRadius: 48,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
});
    