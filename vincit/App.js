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
  const [isDisabled, SetIsDisabled] = useState(true);

  const childToParent = (childData) => {
    if (childData.length>4){
      SetIsDisabled(false)
    } else {
      SetIsDisabled(true)
      setShowChart(false);
    }
    setParentData(childData);
    setData(childData)
     
  }
  
   

  const [showChart, setShowChart] = useState(false);

  return (
    <View>
      <Header />
      <DatePicker childToParent={childToParent} />
      {showChart ? (
        <Text>Bitcoin price Chart</Text>,
        <Chart parentData={parentData} />
      ) : null}
      <Pressable>
        <Button disabled={isDisabled} title="show/hide price chart" onPress={() => setShowChart(!showChart)} />
      </Pressable>
      <Text>Start and end date must have atleast 3 days between them to open chart.</Text>
      <MaximizeProfit parentData={parentData} />
      <Text>This is a test1</Text>
      <Footer />
    </View>
  );
}

