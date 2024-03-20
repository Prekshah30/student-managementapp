// import React, { Component } from 'react';
// import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'
// import { View } from 'react-native';

// export default function VideoConferencePage(props) {
//     return (
//         <View>
//             <ZegoUIKitPrebuiltVideoConference
//                 appID={1817869737}
//                 appSign={"f3ebf122df8c6f8fe7102d416ab29a9fb54c404dd6e99270aef3374d0d4649ad"}
//                 userID={"krish"} // userID can be something like a phone number or the user id on your own user system. 
//                 userName={"krish"}
//                 conferenceID={"TeamMeeting"} // conferenceID can be any unique string. 

//                 config={{
//                     onLeave: () => { props.navigation.navigate('Home') },
//                 }}
//             />
//         </View>
//     );
// }

// App.js
// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG,GROUP_VIDEO_CALL_CONFIG  } from '@zegocloud/zego-uikit-prebuilt-call-rn'

// export default function VoiceCallPage(props) {
//     return (
//         <View style={styles.container}>
//             <ZegoUIKitPrebuiltCall
//                 appID={1165255308}
//                 appSign={"1a5e57274eacac01ae3209449710646ecb9e0945491b6c14c11da8fa4a519c8d"}
//                 userID={'userID'} // userID can be something like a phone number or the user id on your own user system. 
//                 userName={'userName'}
//                 callID={'mycallid'} // callID can be any unique string. 

//                 config={{
//                     // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
//                     // ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
//                     // //onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
//                     // onHangUp: () => { props.navigation.navigate('HomeScreen') },


//                     ...GROUP_VIDEO_CALL_CONFIG,
//                     onHangUp: () => { props.navigation.navigate('HomeScreen') }

//                 }}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
        
//     }
// })

import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { Text ,View, Button, TextInput} from "react-native";


const MeetingScreen = ({navigation}) => {

    //const navigation = useNavigation();
    const [name,setName] = useState('')
  return (
    <View>
        <TextInput placeholder="Enter your name" 
        value={name} 
        onChangeText={(text)=>setName(text)}
        style={{color:'black'}}/>
        <Button title="join call" onPress={()=>{
            navigation.navigate('Call_view',{data:name})
        }}/>
    </View>
  )
}

export default MeetingScreen
