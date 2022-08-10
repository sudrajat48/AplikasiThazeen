import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ratting from '../Ratting';

/*
TYPE: 
1. Product
2. order-summery
3. past-order
4. list-chat
*/

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


const ItemListProduct = ({
    image,
    onPress,
    ratting,
    items,
    price,
    type,
    name,
    date,
    status,
}) => {

    const renderContent = () => {
        switch (type) {
            case 'product':
                // item list product seperti di home page
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>Rp250.000</Text>
                        </View>
                        <Ratting ratting={ratting} />
                    </>
                )
            case 'order-summary':
                // item order summary
                return (
                    <>
                        <View style={styles.tabContainer}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>Rp{price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>
                    </>
                )
            case 'in-progress':
                // item in progress
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>{items} items.Rp {price}</Text>
                        </View>
                    </>
                )
            case 'past-order':
                //item past order
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>{items} items.Rp {price}</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                )

                case 'list-chat':
                    //item list chat
                    return (
                        <>
                            <View style={styles.content}>
                                <Text style={styles.title}>{name}</Text>
                                <Text style={styles.status}>{status}</Text>
                            </View>
                            <View>
                                <Text style={styles.date}>{date}</Text>
                            </View>
                        </>
                    )

            default:
                // item product
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>Tinta Touner</Text>
                            <Text style={styles.price}>Rp{price}</Text>
                        </View>
                        <Ratting />
                    </>
                )
        }
    }

    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                {renderContent()}
            </View>
        </TouchableOpacity>

    )
}

export default ItemListProduct

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#2196F3',
        paddingVertical: 8,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#FFFFFF'
    },
    price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#FFFFFF'
    },
    content: {
        flex: 1
    },
    items: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#D9D9D9'
    },
    date: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#D9D9D9'
    },
    status: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#D9D9D9'
    },

})