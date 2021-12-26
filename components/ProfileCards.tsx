import {members_list} from "./members";
import {View} from "./Themed";
import {Avatar} from "react-native-elements";
import React from "react";

export default function ProfileCards (){
    return(
        <>
            {members_list.map((user)=>(
                <View>
                    <Avatar rounded source={user.pic} />
                </View>
                )
            )
            }
        </>
    );
}
