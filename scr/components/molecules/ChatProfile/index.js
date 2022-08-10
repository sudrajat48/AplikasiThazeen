import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icback } from '../../../foto';
import { TokoDummy1 } from '../../../foto';

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const ChatProfile = ({onBack}) => {

    let [fontsLoaded] = useFonts ({
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
        { 
        onBack && (
<TouchableOpacity activeOpacity={0.7} onPress={onBack}>
    <View style={styles.back}>
<Icback />
    </View>
</TouchableOpacity>
        )}
        <View>
        <Text style={styles.title}>Toko Komputer</Text>
        <Text style={styles.subTitle}>Online</Text>
        </View>
        <Image source={TokoDummy1} style={styles.profile} />
    </View>
  )
}

export default ChatProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    back: {
        padding: 16,
        marginRight: 16,
        marginLeft: -15
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#2196F3',
        marginRight: 35
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#2196F3'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginLeft: 40,
    },
})