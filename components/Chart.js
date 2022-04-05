import { LineChart } from "react-native-chart-kit";
import { Text, View, Button, Pressable, Dimensions } from 'react-native';
import React, { useState } from "react";
import style from '../style/style';

export default function Chart({ parentData }) {

  let dates = []
  let prices = []

  if(parentData.length>8){
    let divider = 2+Math.floor((parentData.length-8)/6)
      let x = parentData.filter((element, index) => {   
        return index % divider === 0;
      })
      parentData = x
  }
    
      

  if (parentData === "undefined") {
    return null;
  } else if (true === false) {
    for (let i = 0; i < parentData.length; i++) {
      dates.push(new Date(parentData[i][0]).toUTCString().slice(17, -7))
      prices.push(parentData[i][1].toFixed(0))
      console.log(parentData[i][1].toFixed(0))
      
    }
  } else {
    for (let i = 0; i < parentData.length; i++) {
      dates.push(new Date(parentData[i][0]).toUTCString().slice(4, -18))
      prices.push(parentData[i][1].toFixed(0))
      console.log(parentData[i][1].toFixed(0))
     
    }
  }

  return (
    <View>
      <Text>Bitcoin price chart</Text>
      <LineChart
        data={{
          labels: dates,
          datasets: [{data: prices}]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}