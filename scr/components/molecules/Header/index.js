import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icback } from '../../../foto';

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Header = ({ title, subTitle, onBack }) => {

  let [fontsLoaded] = useFonts({
    'Poppins-Medium': require('../../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../../../../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {
        onBack && (
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <View style={styles.back}>
              <Icback />
            </View>
          </TouchableOpacity>
        )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#2196F3'
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#2196F3'
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10
  }
})