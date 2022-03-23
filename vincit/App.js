import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Platform, Pressable} from 'react-native';
import React, { useEffect, useState,  SafeAreaView, TextInput } from "react";
import DatePicker from './components/DatePicker';
import Chart from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';



export default function App() {
  const [data, setData] = useState([]);

const childToParent =  (asd) => {
    setData(asd.prices);
}

  return (
    <View>
      <Header/>
  <DatePicker childToParent={childToParent}/>
  <Chart datafromparent={data}/>
  <Text>This is a test2</Text>
  <Footer/>
</View>
  );
}

