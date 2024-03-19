import React, { useEffect, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useUser} from '../../context/allContext';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import axios from 'axios';
import ipconstant from '../../ipconstant/ipconstant';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChatMessagesScreen = () => {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {recepientId} = route.params;
  const [selectedImage, setSelectedImage] = useState("");
  const [message, setMessage] = useState('');
  const {userId, setUserId} = useUser();
  const [recepientData, setRecepientData] = useState();

  
  useEffect(() => {
    const fetchRecepientData = async () => {
        try {

            const response = await fetch(`${ipconstant}/api/user/${recepientId}`);

            const data =await response.json();
            setRecepientData(data);
            
        }
        catch (error) {
            console.log('Error in fetching the recepient data', error);
        }
        fetchRecepientData();
    }
    },[]);


    const handleSend = async (messageType, imageUri) => {
        try {
          const formData = new FormData();
          formData.append("senderId", userId);
          formData.append("recepientId", recepientId);
    
          //if the message type id image or a normal text
          if (messageType === "image") {
            formData.append("messageType", "image");
            formData.append("imageFile", {
              uri: imageUri,
              name: "image.jpg",
              type: "image/jpeg",
            });
          } else {
            formData.append("messageType", "text");
            formData.append("messageText", message);
          }
    
          const response = await fetch(
            `${ipconstant}/api/messages`,{
            method:'POST',
            body:formData,
            }
          );
          if (response.ok) {
            setMessage("");
            setSelectedImage("");
    
            // fetchMessages();
          }
        } catch (error) {
          console.log("error in sending the message", error);
        }
      };
    
      console.log('RecepientData:',recepientData);
  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle:'',
        headerLeft: () => (
            <View>
                <Ionicons name='arrow-back' size={24} color='black' onPress={() => navigation.goBack()} />
                {/* <Image source={{uri:}} */}
            </View>
        )
    })

  })


  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#F0F0F0'}}>
      <ScrollView>{/* All chats */}</ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E0E0E0',
          height: 65,
        }}>
        

        <TextInput
          placeholder="Type your messages"
          style={{
            flex: 1,
            height: 50,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 30,
            marginTop: 3,
            paddingHorizontal: 20,
          }}></TextInput>

        <Entypo
          name="attachment"
          size={22}
          color="black"
          style={{marginRight: 10}}
        />

        <FontAwesome
          name="camera"
          size={22}
          color="black"
          style={{marginRight: 10}}
        />

        <FontAwesome
          name="microphone"
          size={22}
          color="black"
          style={{marginRight: 10}}
        />

        <Pressable
          onPress={() => handleSend('text')}
          style={{
            marginRight: 5,
            backgroundColor: '#f0c44d',
            padding: 10,
            borderRadius: 20,
          }}>
          <Text>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatMessagesScreen;
