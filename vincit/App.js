import { Text, View, Button, Pressable, ScrollView } from 'react-native';
import React, { useState } from "react";
import DatePicker from './components/DatePicker';
import ChartComponent from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import MaximizeProfit from './components/MaximizeProfit';
import CurrencyPicker from './components/CurrencyPicker';

export default function App() {
  const [currency, setCurrency] = useState("eur");
  const [parentData, setParentData] = useState([]);
  const [isDisabled, SetIsDisabled] = useState(true);

  const childToParent = (childData) => {
    if (childData.length > 4) {
      SetIsDisabled(false)
    } else {
      SetIsDisabled(true)
      setShowChart(false);
    }
    setParentData(childData);
  }
  const getCurrency = (childData) => {
    setCurrency(childData);
  }

  const [showChart, setShowChart] = useState(false);
  const API = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=" + currency + "&from="

  return (
    <View>
      <ScrollView>
        <Header />
        <CurrencyPicker getCurrency={getCurrency} />
        <DatePicker childToParent={childToParent} API={API} />
        {showChart ? (
          <Text>Bitcoin price Chart</Text>,
          <ChartComponent parentData={parentData} />
        ) : null}
        <Pressable>
          <Button disabled={isDisabled} title="show/hide price chart" onPress={() => setShowChart(!showChart)} />
        </Pressable>
        <Text>Start and end date must have atleast 3 days between them to open</Text>
        <MaximizeProfit parentData={parentData} currency={currency} />
        <Footer />
      </ScrollView>
    </View>

  );
}

