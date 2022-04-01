import { Text, View, Button, Pressable } from 'react-native';
import React, { useState } from "react";
import DatePicker from './components/DatePicker';
import Chart from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import MaximizeProfit from './components/MaximizeProfit';

export default function App() {

  const [parentData, setParentData] = useState([]);
  const [data, setData] = useState([]);

  const childToParent = (childData) => {
    setParentData(childData);
  }

  const [showChart, setShowChart] = useState(false);
  const API = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from="

  return (
    <View>

      <Header />
      <DatePicker childToParent={childToParent} API={API} />
      {showChart ? (
        <Text>Bitcoin price Chart</Text>,
        <Chart parentData={parentData} />
      ) : null}
      <Pressable>
        <Button title="show/hide price chart" onPress={() => setShowChart(!showChart)} />
      </Pressable>
      <MaximizeProfit parentData={parentData} />
      <Footer />
    </View>
  );
}

