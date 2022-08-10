import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ItemValue = ({label, value, valueColor = '#2196F3'}) => {

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
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value (valueColor)}>{value}</Text>
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#2196F3'
    },
    value: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: color
    })
})