import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, ListChat, ProductCard } from '../../components';

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Chat = (navigation) => {

  let [fontsLoaded] = useFonts({
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf')
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <View style={styles.pege}>
      <Header title={'Chatting'} subTitle="Chatting With Seller" onBack={() => navigation.goBack()} />
      <View style={styles.tabContainer}>
        <ListChat />
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  pege: { flex: 1 },
  conatiner: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 34,
    paddingBottom: 15,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#2196F3'
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#27C6E9'
  },
  tabContainer: {
    flex: 1,
    marginTop: 24
  }
})