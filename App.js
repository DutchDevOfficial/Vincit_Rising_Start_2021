<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import MarketScreen from './screens/MarketScreen';

const Tab = createBottomTabNavigator();
<<<<<<< HEAD

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
=======
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

<<<<<<< HEAD
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
=======
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
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
