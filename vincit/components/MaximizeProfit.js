import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function MaximizeProfit(data) {
  const [Prices, setPrices] = useState([]);
  const [MaxDifference, setMaxDifference] = useState([]);
  const [BuyDate, setBuyDate] = useState([]);
  const [SellDate, setSellDate] = useState([]);

  return (
    <View>
      <Text>Maximize Profit</Text>
    </View>
  )
}