import { Text, View, Pressable, ScrollView } from 'react-native';
import React, { useState } from "react";
import DatePicker from './components/DatePicker';
import ChartComponent from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import style from './style/style';
import MaximizeProfit from './components/MaximizeProfit';
import CurrencyPicker from './components/CurrencyPicker';
import CryptoPicker from './components/CryptoPicker';

export default function App() {
  const [currency, setCurrency] = useState("eur");
  const [crypto, setCrypto] = useState("bitcoin");
  const [parentData, setParentData] = useState([]);
  const [isDisabled, SetIsDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Show price chart");

  const childToParent = (childData) => {
    if (childData.length > 4 ) {
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

  const getCrypto = (childData) => {
    setCrypto(childData);
  }

  const [showChart, setShowChart] = useState(false);
  const API = "https://api.coingecko.com/api/v3/coins/" + crypto + "/market_chart/range?vs_currency=" + currency + "&from="
  const listAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + currency + "&order=market_cap_desc&per_page=10"

  return (
    <View style={style.containerBackground}>
      <ScrollView>
        <Header />
        <CurrencyPicker getCurrency={getCurrency} />
        <CryptoPicker getCrypto={getCrypto} listAPI={listAPI} />
        <DatePicker childToParent={childToParent} API={API} />
        {showChart ? (
          <Text>Bitcoin price Chart</Text>,
          <ChartComponent parentData={parentData} currency={currency}/>
        ) : null}
        <View style={style.container}>
        <Pressable style={style.button} disabled={isDisabled} onPress={() => {
          setShowChart(!showChart);
          showChart ? setButtonText("Show price chart") : setButtonText("Hide price chart");
        }}
        >
          <Text style={style.buttonText}>
            {buttonText}
          </Text>
        </Pressable>
        </View>
        <View style={style.container}>
          <Text style={style.text2}>NOTICE: Start and end date must have atleast 3 days between them to open.</Text>
        </View>
        <MaximizeProfit parentData={parentData} currency={currency} />
        <Footer />
      </ScrollView>
    </View>
  );
}

