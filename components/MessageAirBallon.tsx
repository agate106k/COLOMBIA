import {Avatar} from "react-native-elements";
import {StyleSheet, View, Text} from "react-native";

export default function MessageAirBalloon(){
    return(
            <View style={styles.balloonBox}>
                <Avatar rounded source={require('../assets/images/matching-app-icon.png')} />
                <View style={styles.balloon}>
                    <Text style={styles.message}>Hello</Text>
                </View>
            </View>
    );

}

const styles=StyleSheet.create({
    balloon:{
        backgroundColor:'#333333',
        margin: 10,
        padding: 20,
        borderRadius:10,
        flex:1,
    },
    balloonBox:{
        margin: 10,
        padding: 20,
        flexDirection:'row',
    },
    message:{
        color:'white'
    },
})