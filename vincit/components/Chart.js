import { LineChart } from "react-native-chart-kit";
import { Text, View, Button, Pressable, Dimensions } from 'react-native';
import React, { useState } from "react";

export default function Chart({ parentData }) {
  /*   const slicedArray = dataFromParent.slice(0, 5);
    const [text, setText] = useState(Math.random() * 100);
    const chart = () => {
      setText(slicedArray[0][0]);
    } */
  const [label, setLabels] = useState([10000]);

  let dates = []
  let prices = []

  if (parentData === "undefined") {
    return null;
  } else if (true === false) {
    for (let i = 0; i < parentData.length; i++) {
      dates.push(new Date(parentData[i][0]).toUTCString().slice(17, -7))
      prices.push(parentData[i][1])
    }
  } else {
    for (let i = 0; i < parentData.length; i++) {
      dates.push(new Date(parentData[i][0]).toUTCString().slice(4, -18))
      prices.push(parentData[i][1])
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
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
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
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

  // <LineChart
  //   data={{
  //     labels: [slicedArray[0][0], slicedArray[1][0], slicedArray[1][0], slicedArray[1][0], slicedArray[1][0], slicedArray[1][0]],
  //     datasets: [
  //       {
  //         data: [
  //           slicedArray[0][1],
  //           slicedArray[1][1],
  //           slicedArray[2][1],
  //           slicedArray[3][1],
  //           slicedArray[4][1],
  //           slicedArray[5][1],
          
  //         ]
  //       }
  //     ]
  //   }}