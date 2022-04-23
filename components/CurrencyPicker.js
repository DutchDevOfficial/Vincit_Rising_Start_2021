import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CurrencyPicker({ getCurrency }) {
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <View style={style.slotContainer}>
=======
    <View style={style.container}>
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
=======
    <View style={style.slotContainer}>
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
      <Text style={style.text}>Select currency</Text>
      <Picker
        style={style.field}
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => {
          getCurrency(itemValue);
          setSelectedCurrency(itemValue);
        }}>
        <Picker.Item label="eur" value="eur" />
        <Picker.Item label="usd" value="usd" />
      </Picker>
    </View>
  )
}