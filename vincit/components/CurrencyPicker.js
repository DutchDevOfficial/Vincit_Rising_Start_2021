import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

export default function CurrencyPicker({ getCurrency }) {
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  return (
    <View>
      <Text>Select currency</Text>
      <Picker
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