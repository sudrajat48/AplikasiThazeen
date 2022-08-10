import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Other = () => {

    let [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../../../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Light': require('../../../../assets/fonts/Poppins-Light.ttf')
      });
    
      if (!fontsLoaded) {
        return (
          <AppLoading />
        )
      }

  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Apakah Barang Ini Sangat Bagus Dan Sangat Berguna Untuk Saya</Text>
      </View>
      <Text style={styles.date}>12.40 AM</Text>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16
      },
      chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: '#FFFFFF',
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0
      },
      text: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#2196F3'
      },
      date: {
        fontSize: 11,
        fontFamily: 'Poppins-Light',
        color: '#FFFFFF',
        marginTop: 8
      },
})