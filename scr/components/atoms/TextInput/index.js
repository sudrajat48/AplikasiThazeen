import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const TextInput = ({label, placeholder}) => {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf')
});

if (!fontsLoaded) {
    return (
        <AppLoading />
    )
}

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF'
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10
  }
})