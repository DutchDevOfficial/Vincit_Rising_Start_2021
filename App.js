<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import MarketScreen from './screens/MarketScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#f44c34',
          tabBarInactiveTintColor: 'gray',
          tabBarInactiveBackgroundColor: 'lightyellow',
          tabBarActiveBackgroundColor: 'lightyellow',
          headerShown: false
        }
        )}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Market" component={MarketScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
=======
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
  const [parentData2, setParentData2] = useState('');
  const [parentData3, setParentData3] = useState([]);
  //const [isDisabled, SetIsDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Show price chart");

  const childToParent = (childData) => {
   // if (childData.length > 4 ) {
    //  SetIsDisabled(false)
   // } else {
   //   SetIsDisabled(true)
   //   setShowChart(false);
   // }
   
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

  const [showChart, setShowChart] = useState(false);
  const API = "https://api.coingecko.com/api/v3/coins/" + crypto + "/market_chart/range?vs_currency=" + currency + "&from="
  const listAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + currency + "&order=market_cap_desc&per_page=10"

  return (
    <View style={style.containerBackground}>
      <ScrollView>
        <Header />
        <CurrencyPicker getCurrency={getCurrency} />
        <CryptoPicker getCrypto={getCrypto} listAPI={listAPI} />
        <DatePicker childToParent={childToParent}  childToParent2={childToParent2} childToParent3={childToParent3} API={API} />
        {showChart ? (
          <Text>Bitcoin price Chart</Text>,
          <ChartComponent parentData={parentData} currency={currency} parentData2={parentData2} parentData3={parentData3}/>
        ) : null}
        <View style={style.container}>
        <Pressable style={style.button} onPress={() => {
          setShowChart(!showChart);
          showChart ? setButtonText("Show price chart") : setButtonText("Hide price chart");
        }}
        >
          <Text style={style.buttonText}>
            {buttonText}
          </Text>
        </Pressable>
        </View>
        <MaximizeProfit parentData={parentData} currency={currency} />
        <Footer />
      </ScrollView>
    </View>
  );
}

>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
