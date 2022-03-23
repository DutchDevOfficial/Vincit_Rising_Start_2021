import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Platform, Pressable} from 'react-native';
import React, { useEffect, useState,  SafeAreaView, TextInput } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';



export default function App() {
  let apiURL= 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400';
  
  
const [apiURL2, setapiURL2] = useState('1577836800');
const [coins, setCoins] = useState([]);
const [price, setPrice] = useState([]);
const [start, setStart] = useState([]);
const [end, setEnd] = useState([]);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [unix, setUnix] = useState('');
const [unix2, setUnix2] = useState('');
const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setUnix(Math.floor(new Date(date).getTime() / 1));
    closest(unix, coins.prices);
    setapiURL2('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from='+ (Math.floor(new Date(date).getTime() / 1000)) +'&to=1609376400');
    setStart(price[0]);
    const lastElement = coins.prices[coins.prices.length - 1];
    setEnd(lastElement);
    setStartDate(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(coins.prices[0][0]))
    setEndDate(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(lastElement[0]));
    loadData();
  
  };

  const toggle = () => {
    setShow(prevShow => !prevShow);
  }

  const loadData = async () => {
    const res = await fetch(
      apiURL
    );
    const data = await res.json();
    
  };
  
  useEffect(() => {
    loadData();
    
  }, []);
  

  function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    setUnix2(curr);
}
  return (

    
        <View style={styles.container}>
          <Text>Start date</Text>
      <Pressable
      onPress={toggle}>
        <Text>
          {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </Text>
      </Pressable>
      {show && Platform.OS ==='ios' && (
        <DateTimePicker
        style={{width: 320}}
        mode={'date'}
        display="inline"
        value={date}
        onChange={onChange}
        />
      )}
      {show && Platform.OS ==='android' && (
        <DateTimePicker
        mode={'date'}
        display="default"
        value={date}
        onChange={onChange}
      />
      )}
       <Text>{unix}</Text>
       <Text>{unix2}</Text>
       <Text>{apiURL2}</Text>
       <Text>{startDate}</Text>
     <Text>{start[1]}</Text>
     <Text>{endDate}</Text>
     <Text>{end[1]}</Text>
  
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
