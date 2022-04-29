import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CurrencyPicker({ getCurrency }) {
  const [selectedCurrency, setSelectedCurrency] = useState({
    "name": "EUR",
    "symbol": "€",
  });

  const currencyList = [
    {
      "name": "EUR",
      "symbol": "€"
    },
    {
      "name": "USD",
      "symbol": "$"
    },
    {
      "name": "GBP",
      "symbol": "£"
    },
    {
      "name": "JPY",
      "symbol": "¥"
    },
    {
      "name": "AUD",
      "symbol": "A$"
    }
  ]
  return (
    <View style={style.slotContainer}>
      <Text style={style.text}>Select currency</Text>
      <Picker
        style={style.field}
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => {
          getCurrency(itemValue);
          setSelectedCurrency(itemValue);
        }}>
        {currencyList.map((currency) => (
          <Picker.Item label={currency.name + "(" + currency.symbol + ")"} value={currency.name} key={currency} />
        ))}
      </Picker>
    </View>
  )
}