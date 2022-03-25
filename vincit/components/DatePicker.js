import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Platform, Pressable, Alert} from 'react-native';
import React, { useEffect, useState,  SafeAreaView, TextInput } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';



export default function DatePicker({childToParent}) {

const [date, setDate] = useState(new Date());
const [show, setShow] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [show2, setShow2] = useState(false);
  const [text, setText] = useState('');

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
    let startDateUnix =(Math.floor(new Date(date).getTime() / 1000));
    let endDateUnix =(Math.floor(new Date(date2).getTime() / 1000));
    let asd= "gotem"
    setText(asd)
    loadData(startDateUnix, endDateUnix);
    
    
  }

  const checkBearish = (data) => {
    for (let i = 0; i < data.prices.length; i++) {
      data.prices[i].push(new Date(data.prices[i][0]).toLocaleDateString("en-US"))
    }
  setText(data.prices[0][2])       
    
  }


  const loadData = async (startDateUnix, endDateUnix) => {
    if (endDateUnix<startDateUnix){
      setText('End date must be later than start date');
      return;

    } else if (endDateUnix===startDateUnix) {
      setText('End date must be later than start date');
      return;
    }
    let apiURL= 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from='+ startDateUnix + '&to='+ endDateUnix;
    const res = await fetch(
      apiURL
    );
    const data = await res.json();
    const start =await data.prices[0];
    const lastElement =await data.prices[data.prices.length - 1];
    setStart(start);
    setEnd(lastElement);
    childToParent(data);
    checkBearish(data);
  };


  
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
    </View>
    <View>
    <Text>end date</Text>
  <Pressable
  onPress={toggle2}>
    <Text>
      {date2.getDate()}.{date2.getMonth() + 1}.{date2.getFullYear()}
    </Text>
  </Pressable>
  {show2 && Platform.OS ==='ios' && (
    <DateTimePicker
    style={{width: 320}}
    mode={'date'}
    display="inline"
    value={date2}
    onChange={onChange2}
    />
  )}
  {show2 && Platform.OS ==='android' && (
    <DateTimePicker
    mode={'date'}
    display="default"
    value={date2}
    onChange={onChange2}
  />
  )}
  <Text>{text}</Text>
  <Text>{unix}</Text>
  <Text>{unix2}</Text>
  <Text>{start[1]}</Text>
  <Text>{end[1]}</Text>

</View>
<Pressable>
<Button title="confirm dates" onPress={confirm}></Button>

</Pressable>
</View>
  )
}

