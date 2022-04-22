import { Text, View, Platform, Pressable } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import style from '../style/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDay  } from '@fortawesome/free-solid-svg-icons/faCalendarDay';
import { TouchableOpacity } from 'react-native';


export default function DatePicker({ childToParent, childToParent2,childToParent3, API, setDate, setDate2, date, date2 }) {

  
  
  const [show, setShow] = useState(false);

  
  const [show2, setShow2] = useState(false);

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
      </View>
    </View>
  );
}