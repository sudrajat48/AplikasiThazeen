import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Logo } from "../../foto";

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const SplashScreen = ({navigation}) => {

    useEffect (() => {
        setTimeout( () => {
            navigation.replace('SignIn');
        }, 2000);
    }, []);

    let [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../../../assets/fonts/Poppins-ExtraBold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />
    };

    return (
        <View style={Styles.Tampilan}>
            <Logo />
            <View style={{ height: 38 }} />
            <Text style={Styles.cardText}>Thazeen Tech</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Tampilan: {
        backgroundColor: '#2196F3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 32,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold'
    }
})
export default SplashScreen;