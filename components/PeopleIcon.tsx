import {Image, StyleSheet} from "react-native";
import {Text, View} from "../components/Themed";

export default function PeopleIcon() {
    return (
        <View style={styles.container}>
            <Image style={styles.profilePic} source={require('../assets/images/matching-app-icon.png')} />
            <Text style={styles.title}>Your Name</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    profilePic: {
        width: 96,
        height: 96,
        borderRadius: 24,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});