import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcMinus, IcPlus } from '../../../foto'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Counter = () => {

    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return (
          <AppLoading />
        )
      }    

  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <IcMinus />
        </TouchableOpacity>
      <Text style={styles.value}>50</Text>
      <TouchableOpacity>
      <IcPlus />
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF',
        marginHorizontal: 10
    }
})