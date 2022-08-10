import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap, Button } from '../../components'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const SignUp = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return (
<AppLoading />
        )
    }

    return (
        <View style={styles.pege}>
            <Header title={'Sign Up'} subTitle="register and shop" onBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addphoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                <TextInput label="Full Name" placeholder="Type your full name" />
                <Gap height={16} />
                <TextInput label="Email Address" placeholder="Type your email address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Type your password" />
                <Gap height={24} />
                <Button text="Continue" onPress={() => navigation.navigate('SignUpAddress')} />
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    pege: { flex: 1 },
    container: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom:16
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#F0F0F0',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 24
    },
    addphoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    }
})