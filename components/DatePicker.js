import { Text, View, Platform, Pressable } from 'react-native';
import React, { useState, useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import style from '../style/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDay  } from '@fortawesome/free-solid-svg-icons/faCalendarDay';
import { TouchableOpacity } from 'react-native';


export default function DatePicker({ childToParent, API }) {

  
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [datetoday, setDatetoday] = useState(new Date());
  const [show2, setShow2] = useState(false);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

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

  useEffect(() => {
    if (text === '') {
      return;
    } else {
      FetchData();
    }
  }, [API]);

  const [output, setOutput] = useState("")


  function FetchData() {
    let _startDate = new Date(date) //Had get date in this way, otherwise it gets local time instead of utc±0, meaning the results would be off by a few hours
    const unixStartDate = (new Date(Date.UTC(_startDate.getFullYear(), _startDate.getMonth(), _startDate.getDate())).getTime()) / 1000
    let _endDate = new Date(date2)    
    const unixEndDate = (new Date(Date.UTC(_endDate.getFullYear(), _endDate.getMonth(), _endDate.getDate())).getTime()) / 1000 + 3600

    const dayRange = (unixEndDate - unixStartDate - 3600) / 60 / 60 / 24

    let _todayDate = new Date(datetoday)
    const unixTodayDate= (new Date(Date.UTC(_todayDate.getFullYear(), _todayDate.getMonth(), _todayDate.getDate())).getTime()) / 1000
  

    if (unixStartDate>unixEndDate){
      alert('Start date must be earlier than end date')
      return
    }else if (unixStartDate===unixEndDate-3600){
      alert('Select different dates for start and end date')
      return
    } else if (unixStartDate>unixTodayDate){
      alert('Selected dates cant be from the future')
      return
    } else if (unixEndDate-3600>unixTodayDate){
      alert('Selected dates cant be from the future')
      return
    }
    
    fetch(API + unixStartDate + "&to=" + unixEndDate)
      .then(res => res.json())
      .then(
        (result) => {
          let _prices = new Array
          let _prices2 = new Array
          let _totalVolume = new Array
          for (let i = 0; i < result.prices.length; i++) {
            //console.log(i, result.prices[i])
            //console.log(new Date(result.prices[i][0]).toUTCString())
            if (dayRange < 90) {
              if (i % 24 == 0 || unixStartDate < 1527120000) { //limit to 1 result, closest to 00:00 UTC || also test if earlier than 2018.5.23, otherwise will result in errors
                _prices.push(result.prices[i])
                _prices2.push(result.prices[i])
                _totalVolume.push(result.total_volumes[i])
              }
            } else {
              _prices.push(result.prices[i])
              _prices2.push(result.prices[i])
              _totalVolume.push(result.total_volumes[i])
            }
          }
          childToParent(_prices2)  //had to make a new prices array because _prices sometimes misses a value. I think due to being cut in some function, before it sents to chart.js .
          GetDownwardTrend(_prices)
          GetHighestVolume(_totalVolume)
          maxProfit(_prices)
        },
        (error) => {
          alert("Error!")
        }
      )
  }
  function GetHighestVolume(_totalVolume, _prices) {
    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < _totalVolume.length; i++) {
      if (_totalVolume[i][1] > max) {
        max = _totalVolume[i][1];
        maxIndex = i;
      }
    }
    let HighestVolumeDay = new Date(_totalVolume[maxIndex][0]).toUTCString().slice(0, -12)
    setText2("The highest trading volume was " + _totalVolume[maxIndex][1] + " on " + HighestVolumeDay)
  }

  function maxProfit(_prices) {
    let maxProfit = 0;
    let min = _prices[0][1];
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 1; i < _prices.length; i++) {
      if (min > _prices[i][1]) {
        min = Math.min(_prices[i][1], min);
        minIndex = i;
        _prices[i] = _prices[i].slice(0, minIndex)
      }
      if (maxProfit < _prices[i][1] - min) {
        maxProfit = Math.max(maxProfit, _prices[i][1] - min);
        maxIndex = i;
      }


    }
    // setText3("Max profit " + maxProfit + ' buy at ' + new Date(_prices[minIndex][0]).toUTCString().slice(0, -12) + 'sell at ' + new Date(_prices[maxIndex][0]).toUTCString().slice(0, -12))
  };



  function GetDownwardTrend(_prices) {
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

    //console.log("longestTrendIndex: ", longestTrendIndex)
    let firstDay = new Date(_prices[longestTrendIndex - longestTrend + 1][0]).toUTCString().slice(0, -12)
    let lastDay = (new Date(_prices[longestTrendIndex][0]).toUTCString()).slice(0, -12)
    //console.log("Longest downward trend is: ", longestTrend, " days | From: " + firstDay + " to: " + lastDay)
    setText("Longest downward trend is: " + longestTrend + " days | From: " + firstDay + " to: " + lastDay + " ")
  }




  return (
    <View style={style.slotContainer}>
      <View>
        <Text style={style.text}>Start date</Text>
        <Pressable
          onPress={toggle}>
          <Text style={style.datePicker}>
            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}<FontAwesomeIcon style={{color: 'black',}} icon={ faCalendarDay } />
          </Text>
        </Pressable>
        {show && Platform.OS === 'ios' && (
          <DateTimePicker
            style={{ width: 320 }}
            mode={'date'}
            display="inline"
            value={date}
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
        {show && Platform.OS === 'android' && (
          <DateTimePicker
            mode={'date'}
            display="default"
            value={date}
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
      </View>
      <View>
        <Text style={style.text}>End date</Text>
        <Pressable
          onPress={toggle2}>
          <Text style={style.datePicker}>
            {date2.getDate()}.{date2.getMonth() + 1}.{date2.getFullYear()}<FontAwesomeIcon style={{color: 'black',}} icon={ faCalendarDay } />
          </Text>
        </Pressable>
        {show2 && Platform.OS === 'ios' && (
          <DateTimePicker
            style={{ width: 320 }}
            mode={'date'}
            display="inline"
            value={date2}
            onChange={onChange2}
            maximumDate={new Date()}
          />
        )}
        {show2 && Platform.OS === 'android' && (
          <DateTimePicker
            mode={'date'}
            display="default"
            value={date2}
            onChange={onChange2}
            maximumDate={new Date()}
          />
        )}
        <Text style={style.text2}>{text}</Text>
        <Text style={style.text2}>{text2}</Text>
        {/* <Text style={style.text2}>{text3}</Text> */}
      </View>
      {/* <Pressable style={style.button} onPress={confirm}>
        <Text style={style.buttonText}>Confirm dates</Text>
      </Pressable> */}
      <TouchableOpacity
        style={style.button}
        onPress={confirm}>
        <Text style={style.buttonText}>CONFIRM DATES</Text>
      </TouchableOpacity>
    </View>
  );
}