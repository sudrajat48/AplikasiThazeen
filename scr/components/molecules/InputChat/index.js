import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SendBottom from '../SendBottom'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const InputChat = () => {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
});

if (!fontsLoaded) {
    return (
        <AppLoading />
    )
}

  return (
    <View style={styles.conatiner}>
      <TextInput style={styles.input} placeholder="Tulis Pesan" />
      <SendBottom disable />
      
    </View>
  )
}

export default InputChat

const styles = StyleSheet.create({
  conatiner: {
    padding: 16,
    flexDirection: 'row',
    marginBottom: -25
  },
    input: {
        backgroundColor: '#D9D9D9',
        padding: 14,
        borderRadius: 16,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        maxHeight: 50,
        marginTop: 25,
        marginBottom: 30
    },
})