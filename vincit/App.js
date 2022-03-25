import { Text, View} from 'react-native';
import React, { useState } from "react";
import DatePicker from './components/DatePicker';
import Chart from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import MaximizeProfit from './components/MaximizeProfit';

export default function App() {

  const [data, setData] = useState([]);
  
  const childToParent = (asd) => {
    setData(asd.prices);
  }

  return (
    <View>
<<<<<<< HEAD
      <Header/>
  <DatePicker childToParent={childToParent}/>
  <Chart datafromparent={data}/>
  <Text>This is a test</Text>
  <Footer/>
</View>
=======
      <Header />
      <DatePicker childToParent={childToParent} />
      <Chart datafromparent={data} />
      <MaximizeProfit data={data} />
      <Text>This is a test1</Text>
      <Footer />
    </View>
>>>>>>> fe05a7c124596701c8ed7e31fa2957b694d09ce6
  );
}

