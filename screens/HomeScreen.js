import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import DatePicker from '../components/DatePicker';
import ChartComponent from '../components/Chart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../style/style';
import CurrencyPicker from '../components/CurrencyPicker';
import CryptoPicker from '../components/CryptoPicker';
import Carousel from '../components/Carousel';

export default function HomeScreen({ route }) {

  const [currency, setCurrency] = useState(
    { name: "EUR", symbol: "€" }
  );
  const [crypto, setCrypto] = useState("bitcoin");
  const [parentData, setParentData] = useState([]);
  const [parentData2, setParentData2] = useState('');
  const [parentData3, setParentData3] = useState([]);
  const [buttonText, setButtonText] = useState("Show price chart");


  const [date, setDate] = useState(new Date(new Date().setDate(new Date().getDate() - 1)));
  const [date2, setDate2] = useState(new Date());

  const childToParent = (childData) => {
    setParentData(childData);
  }
  const childToParent2 = (childData2) => {
    setParentData2(childData2);
  }
  const childToParent3 = (childData3) => {
    setParentData3(childData3);
  }
  const getCurrency = (childData) => {
    setCurrency(childData);
  }
  const getCrypto = (childData) => {
    setCrypto(childData);
  }

  useEffect(() => {
    if (route?.params?.crypto.id != undefined) {
      setCrypto(route?.params?.crypto.id);
    }
  }, [route?.params?.crypto])

  const [showChart, setShowChart] = useState(false);
  const API = "https://api.coingecko.com/api/v3/coins/" + crypto + "/market_chart/range?vs_currency=" + currency.name + "&from="
  const listAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + currency.name + "&order=market_cap_desc&per_page=25"

  return (
    <View style={style.containerBackground}>
      <ScrollView>
        <Header />
        <View style={style.slotContainer}>
          <CurrencyPicker getCurrency={getCurrency} />
          <CryptoPicker getCrypto={getCrypto} listAPI={listAPI} crypto={crypto} />

        </View>

        <DatePicker childToParent={childToParent} childToParent2={childToParent2} childToParent3={childToParent3} API={API} setDate={setDate} setDate2={setDate2} date={date} date2={date2} />

        <Carousel parentData={parentData} currency={currency} API={API} date={date} date2={date2}
          childToParent={childToParent} childToParent2={childToParent2} childToParent3={childToParent3} crypto={crypto}/>
        {showChart ? (
          <ChartComponent parentData={parentData} currency={currency} crypto={crypto} parentData2={parentData2} parentData3={parentData3} />
        ) : null}
        <View style={style.container}>
          <TouchableOpacity style={style.button} onPress={() => {
            setShowChart(!showChart);
            showChart ? setButtonText("SHOW PRICE CHART") : setButtonText("HIDE PRICE CHART");
          }}
          >
            <Text style={style.buttonText}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}

