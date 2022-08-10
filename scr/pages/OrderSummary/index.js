import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Header, ItemListProduct, ItemValue} from '../../components'
import { ProductDummy2 } from '../../foto'

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const OrderSummary = ({navigation}) => {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
});

if (!fontsLoaded) {
    return (
        <AppLoading />
    )
}

  return (
    <View style={styles.container}>
      <Header title={'Payment'} subTitle="You Deserve Better Product" onBack={() => {}}/>

      <View style={styles.content}>
      <Text style={styles.lebel}>Item Ordered</Text>
      <ItemListProduct type={'order-summary'} name={'Tinta Toner'} price={'250.000'} image={ProductDummy2} items={14} />
      <Text style={styles.lebel}>Metode Pembayaran :</Text>
      <ItemValue label={'Kartu Kredit'} />
      <ItemValue label={'Transfer Bank'} />
      <ItemValue label={'Ovo'} />
      </View>

      <View style={styles.content}>
        <Text style={styles.lebel}>Detail Transaction</Text>
        <ItemValue label={'Subtotal'} value="Rp500.000" />
        <ItemValue label={'Sub Pengiriman'} value="Rp10.000" />
        <ItemValue label={'Diskon'} value="10%" valueColor='#27C6E9' />
        <ItemValue label={'Total Price'} value="Rp510.000" />
      </View>

<View style={styles.content}>
<View style={styles.totalContainer}>
        <Text style={styles.text}>Total Price </Text>
        <ItemValue value="Rp510.000" />
        <View style={styles.buttom}>
        <Button text={'Check Out'} onPress={() => navigation.navigate('SuccessOrder')} color='#2196F3' textColor='#FFFFFF' />
        </View>
      </View>
</View>

</View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  content: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24
  },
  lebel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#2196F3'
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    color: '#2196F3'
  },
  totalContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttom: {
    width: 163
  },
})