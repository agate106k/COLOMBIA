import React from 'react'
import {Image, SafeAreaView, StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'
import {Text, View} from './Themed';
import ProfileCard from "./ProfileCard";
import {members_list} from "./members";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons loop={true}>
                    {
                        members_list.map((data) => {
                            return (<ProfileCard key="{data}" id={data.id} pic={data.pic} name={data.name} desc={data.desc} />)})
                    }
                </Swiper>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    picView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic: {
        height: 256,
        width: 256,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
      fontSize: 36,
        fontWeight: "bold",
    },
})
