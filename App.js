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