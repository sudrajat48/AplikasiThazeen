import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcChat, IcTrolling } from '../../../foto';
import { useNavigation } from '@react-navigation/native';

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const HomeProfile = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    'Poppins-Light': require('../../../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../../../assets/fonts/Poppins-Medium.ttf')
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <View style={styles.conatiner}>

      <View>
        <Text style={styles.appName}>Home</Text>
        <Text style={styles.desc}>Let's Get Some Product</Text>
      </View>

      <View style={styles.chatContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ChatAddress')} >
          <IcChat />
        </TouchableOpacity>
      </View>

      <View style={styles.trolliContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Keranjang')} >
          <IcTrolling />
        </TouchableOpacity>
      </View>


    </View>

  )
}

export default HomeProfile

const styles = StyleSheet.create({
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
  chatContainer: {
    paddingHorizontal: 20,
    marginHorizontal: '20%',

  },
  trolliContainer: {
    marginLeft: '-20%',
  },

})