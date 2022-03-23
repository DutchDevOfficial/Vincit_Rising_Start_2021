import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Platform, Pressable, Alert, Dimensions} from 'react-native';
import React, { useEffect, useState,  SafeAreaView, TextInput } from "react";
  export default function Chart({datafromparent}){
    const slicedArray = datafromparent.slice(0, 5);
    const [text, setText] = useState(Math.random() * 100);
    
 const chart = () => {
  setText(slicedArray[0][0]);
}
    return(
  <View>
  <Text>Bitcoin price Chart</Text>
  <Pressable>
<Button title="show chart" onPress={chart}></Button>

</Pressable>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ]
        }
      ]
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
    bezier
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