import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CurrencyPicker({ getCurrency }) {
  const [selectedCurrency, setSelectedCurrency] = useState(0);

  const currencyList = [
    { name: "EUR", symbol: "€" },
    { name: "USD", symbol: "$" },
    { name: "GBP", symbol: "£" },
    { name: "AUD", symbol: "A$" }
  ]

  return (
    <View>
      <Text style={style.text}>Select currency</Text>
      <Picker
        style={style.field}
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => {
          getCurrency(currencyList[itemValue]);
          setSelectedCurrency(itemValue);
        }}>
        {currencyList.map((currency, index) => (
          <Picker.Item label={currency.name + "(" + currency.symbol + ")"} value={index} key={currency} />
        ))}
      </Picker>
    </View>
  )
}