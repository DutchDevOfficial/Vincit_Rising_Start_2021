import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import { Text, View, Button, Pressable, Dimensions } from 'react-native';
import React, { useState } from "react";

export default function ChartComponent({ parentData }) {

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
      prices.push(parentData[i][1].toFixed(2).slice(0, -6))
    }
  } else {
    for (let i = 0; i < parentData.length; i++) {
      dates.push(new Date(parentData[i][0]).toUTCString().slice(4, -18))
      prices.push(parentData[i][1].toFixed(2).slice(0, -6))
    }
  }
  



  return (
    <View>
      <Chart
  style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: -2, max: 20 }}
  padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
>
  <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
  <HorizontalAxis tickCount={3} />
  <Line data={data1} smoothing="none" theme={{ stroke: { color: 'red', width: 1 } }} />

</Chart>
    </View>
  )
}