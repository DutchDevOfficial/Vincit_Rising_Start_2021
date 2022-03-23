import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Platform, Pressable} from 'react-native';
import React, { useEffect, useState,  SafeAreaView, TextInput } from "react";
import DatePicker from './components/DatePicker';
import Chart from './components/Chart';



export default function App() {
  const [data, setData] = useState([]);

const childToParent =  (asd) => {
    setData(asd.prices);
}

  return (
    <View>
  <DatePicker childToParent={childToParent}/>
  <Chart datafromparent={data}/>
  <Text>This is a test</Text>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

