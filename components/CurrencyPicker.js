import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CurrencyPicker({ getCurrency }) {
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  return (
    <View style={style.container}>
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