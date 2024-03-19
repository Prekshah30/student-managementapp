// import React, { useEffect } from 'react';

// import { StyleSheet, View, Text, Button, Image } from 'react-native';
// import ZegoUIKitPrebuiltCallService, { ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG, GROUP_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import KeyCenter from "./KeyCenter";

// export default function CallPage(props) {
//     const { route } = props;
//     const { params } = route;
//     const { userID, userName } = params;

//     return (
//         <View style={styles.container}>
//             <ZegoUIKitPrebuiltCall
//                 appID={KeyCenter.appID}
//                 appSign={KeyCenter.appSign}
//                 userID={userID}
//                 userName={userName}
//                 callID='rngroup12345678'
                
//                 config={{
//                     // ...GROUP_VOICE_CALL_CONFIG,
//                     ...GROUP_VIDEO_CALL_CONFIG,
//                     onHangUp: () => {
//                         props.navigation.navigate('HomePage');
//                     },
//                     timingConfig: {
//                       isDurationVisible: true,
//                       onDurationUpdate: (duration) => {
//                         console.log('########CallWithInvitation onDurationUpdate', duration);
//                         if (duration === 10 * 60) {
//                           ZegoUIKitPrebuiltCallService.hangUp();
//                         }
//                       }
//                     },
//                     avatarBuilder: ({userInfo}) => {
//                       return <View style={{width: '100%', height: '100%'}}>
//                        <Image
//                         style={{ width: '100%', height: '100%' }}
//                         resizeMode="cover"
//                         source={{ uri: `https://robohash.org/${userInfo.userID}.png` }}
//                         />
//                       </View>
//                     },
//                 }}
//             />
//         </View>
//     );
// }

// App.js
import React, { Component } from 'react';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { View, StyleSheet } from 'react-native';

export default function CallPage({route}) {

  const {userID} = route.params
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={25985560}
                appSign={'cc149fa049f08c402af4a23bc5bd4a39f32bb6fd1931a428ab74bd4dccd534c0'}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={userID}
                callID={"callID"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
                    onHangUp: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});
