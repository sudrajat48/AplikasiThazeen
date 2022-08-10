import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatItem, ChatProfile, InputChat } from '../../components/molecules'

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Chatting = () => {

  let [fontsLoaded] = useFonts ({
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf')
});

if (!fontsLoaded) {
    return (
        <AppLoading />
    )
}

  return (
    <View style={styles.container}>
      <ChatProfile onBack={() => {}} />
      <View style={styles.content}>
      <Text style={styles.chatDate}>Senin, 21 April 2020</Text>
      <ChatItem isMe />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      </View>
      <InputChat />
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  content: {
    flex: 1
  },
  chatDate: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#D9D9D9',
    marginVertical: 20,
    textAlign: 'center'
  },
})