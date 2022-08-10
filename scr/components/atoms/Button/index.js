import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Button = ({ text, color = '#FFFFFF', textColor = '#2196F3', onPress }) => {

  let [fontsLoaded] = useFonts({
    'Poppins-Medium': require('../../../../assets/fonts/Poppins-Medium.ttf')
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default Button

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center'
  })
})