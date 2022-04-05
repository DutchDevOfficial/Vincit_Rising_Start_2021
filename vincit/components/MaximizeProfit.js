import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function MaximizeProfit({ parentData, currency}) {
  const [text, setText] = useState("");

  useEffect(() => {
    Calculate();
  }, [parentData]);

  function Calculate() {
    if (parentData.length === 0 || parentData === "undefined") {
      return null;
    } else {
      let prices = Array.from(parentData);
      let maxProfit = 0;
      let min = prices[0][1];
      let minIndex = 0;
      let maxIndex = 0;

      for (let i = 1; i < prices.length; i++) {
        if (min > prices[i][1]) {
          min = Math.min(prices[i][1], min);
          minIndex = i;
          prices[i] = prices[i].slice(0, minIndex)
        }
        if (maxProfit < prices[i][1] - min) {
          maxProfit = Math.max(maxProfit, prices[i][1] - min);
          maxIndex = i;
        }
        setText('For maximum profit of ' + maxProfit.toFixed(2)+ ' ' + currency + ' buy at ' + new Date(prices[minIndex][0]).toUTCString().slice(0, -12) + 'and sell at ' + new Date(prices[maxIndex][0]).toUTCString().slice(0, -12) + '.')
      }
    }
  }

  return (
    <View>
      <Text>Maximize Profit</Text>
      <Text>{text}</Text>
    </View>
  )
}