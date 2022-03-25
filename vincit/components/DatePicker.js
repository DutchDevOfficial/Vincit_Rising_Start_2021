import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Platform, Pressable, Alert } from 'react-native';
import React, { useEffect, useState, SafeAreaView, TextInput } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';



export default function DatePicker({ childToParent }) {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [show2, setShow2] = useState(false);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const [unix, setUnix] = useState('');
  const [unix2, setUnix2] = useState('');

  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);


  const onChange = (event, selectedDate) => {

    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);

  };

  const onChange2 = (event2, selectedDate2) => {

    setShow2(false);
    const currentDate2 = selectedDate2 || date2;
    setDate2(currentDate2);

  };


  const toggle = () => {
    setShow(prevShow => !prevShow);
  }
  const toggle2 = () => {
    setShow2(prevShow2 => !prevShow2);
  }

  const confirm = () => {
    FetchData();
  }

  
const [output, setOutput] = useState("")
  const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from="


  function FetchData() {

    

    let _startDate = new Date(date) //Had get date in this way, otherwise it gets local time instead of utc±0, meaning the results would be off by a few hours
    const unixStartDate = (new Date(Date.UTC(_startDate.getFullYear(), _startDate.getMonth(), _startDate.getDate())).getTime())/1000
    let _endDate = new Date(date2)
    const unixEndDate = (new Date(Date.UTC(_endDate.getFullYear(), _endDate.getMonth(), _endDate.getDate())).getTime())/1000 + 3600

    const dayRange = (unixEndDate - unixStartDate - 3600) / 60 / 60 / 24

    console.log(new Date(unixStartDate).toUTCString())

    fetch(url + unixStartDate + "&to=" + unixEndDate)
      .then(res => res.json())
      .then(
        (result) => {
          let _prices = new Array
          let _totalVolume = new Array
          for (let i = 0; i < result.prices.length; i++) {
            //console.log(i, result.prices[i])
            //console.log(new Date(result.prices[i][0]).toUTCString())
            if (dayRange < 90) {
              if (i % 24 == 0 || unixStartDate < 1527120000) { //limit to 1 result, closest to 00:00 UTC || also test if earlier than 2018.5.23, otherwise will result in errors
                _prices.push(result.prices[i])
                _totalVolume.push(result.total_volumes[i])
              }
            } else {
              _prices.push(result.prices[i])
              _totalVolume.push(result.total_volumes[i])
            }
          }
          GetDownwardTrend(_prices)
          GetHighestVolume(_totalVolume)
        },
        (error) => {
          alert("Error!")
        }
      )
}
  function GetHighestVolume(_totalVolume){
    let max = 0;
    let currentMax = 0;
    let maxIndex = 0;
    for (let i = 0; i < _totalVolume.length -1; i++) {
      if (_totalVolume[i][1] < _totalVolume[i + 1][1]) {
        currentMax=_totalVolume[i][1];
       if(currentMax>max){
        max=currentMax;
        maxIndex = i 
       }

      } else {
        currentMax=_totalVolume[i][1];
        if(currentMax>max){
          max=currentMax;
          maxIndex=i 
        }
      }
      let HighestVolumeDay = new Date(_totalVolume[maxIndex][0]).toUTCString().slice(0,-12)
      setText2("The highest trading volume was "+_totalVolume[maxIndex][1]+ " on " + HighestVolumeDay)
    }
    
  }

  function GetDownwardTrend(_prices) {
    //console.log(_prices)
    let longestTrend = 1;
    let longestTrendIndex = 0; //index is reversed => get start index by substracting longest trend
    let currentTrend = 0;

    for (let i = 0; i < _prices.length - 1; i++) { //reqursively test longest downward trend
      if (_prices[i + 1][1] < _prices[i][1]) {
        currentTrend++
        if (currentTrend > longestTrend) {
          longestTrend++
          longestTrendIndex = i + 1
        }
      } else {
        currentTrend = 0
      }
    }

    console.log("longestTrendIndex: ", longestTrendIndex)
    let firstDay = new Date(_prices[longestTrendIndex - longestTrend + 1][0]).toUTCString().slice(0,-12)
    let lastDay = (new Date(_prices[longestTrendIndex][0]).toUTCString()).slice(0,-12)
    console.log("Longest downward trend is: ", longestTrend, " days | From: " + firstDay + " to: " + lastDay)
    setText("Longest downward trend is: " + longestTrend + " days | From: " + firstDay + " to: " + lastDay)
  }
  



  return (
    <View>
      <View>
        <Text>Start date</Text>
        <Pressable
          onPress={toggle}>
          <Text>
            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
          </Text>
        </Pressable>
        {show && Platform.OS === 'ios' && (
          <DateTimePicker
            style={{ width: 320 }}
            mode={'date'}
            display="inline"
            value={date}
            onChange={onChange}
          />
        )}
        {show && Platform.OS === 'android' && (
          <DateTimePicker
            mode={'date'}
            display="default"
            value={date}
            onChange={onChange}
          />
        )}
      </View>
      <View>
        <Text>end date</Text>
        <Pressable
          onPress={toggle2}>
          <Text>
            {date2.getDate()}.{date2.getMonth() + 1}.{date2.getFullYear()}
          </Text>
        </Pressable>
        {show2 && Platform.OS === 'ios' && (
          <DateTimePicker
            style={{ width: 320 }}
            mode={'date'}
            display="inline"
            value={date2}
            onChange={onChange2}
          />
        )}
        {show2 && Platform.OS === 'android' && (
          <DateTimePicker
            mode={'date'}
            display="default"
            value={date2}
            onChange={onChange2}
          />
        )}
        <Text>{text}</Text>
        <Text>{text2}</Text>
      </View>
      <Pressable>
        <Button title="confirm dates" onPress={confirm}></Button>

      </Pressable>
    </View>
  );
}

