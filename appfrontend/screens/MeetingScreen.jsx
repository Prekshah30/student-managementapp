import React, { Component } from 'react';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'
import { View } from 'react-native';

export default function VideoConferencePage(props) {
    return (
        <View>
            <ZegoUIKitPrebuiltVideoConference
                appID={1817869737}
                appSign={"f3ebf122df8c6f8fe7102d416ab29a9fb54c404dd6e99270aef3374d0d4649ad"}
                userID={"krish"} // userID can be something like a phone number or the user id on your own user system. 
                userName={"krish"}
                conferenceID={"TeamMeeting"} // conferenceID can be any unique string. 

                config={{
                    onLeave: () => { props.navigation.navigate('Home') },
                }}
            />
        </View>
    );
}

