import { LineChart } from "react-native-chart-kit";
import { Text, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from "react";
import style from '../style/style';

export default function Chart({ parentData, currency, crypto, parentData2, parentData3 }) {

  let dates = []
  let prices = []

  if (parentData.length > 8) {
    let divider = 2 + Math.floor((parentData.length - 8) / 6)
    let x = parentData.filter((element, index) => {
      return index % divider === 0;
    })
    parentData = x
  }
  if (parentData3.length > 8) {
    let divider = 2 + Math.floor((parentData3.length - 8) / 6)
    let x = parentData3.filter((element, index) => {
      return index % divider === 0;
    })
    parentData3 = x
  }



  if (parentData === "undefined") {
    return null;
  } else if (4 > parentData2) {
    for (let i = 0; i < parentData3.length; i++) {
      dates.push(new Date(parentData3[i][0]).toUTCString().slice(17, -7))
      prices.push(parentData3[i][1])
    }
  } else {
    for (let i = 0; i < parentData.length; i++) {
      dates.push(new Date(parentData[i][0]).toUTCString().slice(4, -18))
      prices.push(parentData[i][1])

    }
  }

  const [_decimal, set_decimal] = useState(0)

  useEffect(() => {
    try {
      if (parentData[0][1] > 100) {
        set_decimal(0)
      } else {
        set_decimal(2)
      }
    } catch (error) {
      console.log(error)
    }
  }, [parentData])



  return (
    <View style={style.container}>
      <Text style={style.text2}>{crypto} price chart</Text>
      <LineChart
        data={{
          labels: dates,
          datasets: [{ data: prices }]
        }}
        width={Dimensions.get("window").width * 0.9} // from react-native
        height={220}
        yAxisLabel={currency.symbol}
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: _decimal, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 17
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 10,
          borderRadius: 5
        }}
      />
    </View>
  )
}