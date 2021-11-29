import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Wallet } from './pages/wallets'
import { Prices } from './pages/pricefeed'

const Stack = createStackNavigator();

export function Navigation() {
    return (
      
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Wallet" component={NavigationBottom} options={{headerShown: false}} />
          <Stack.Screen name="Prices" component={Prices} options={{headerShown: false}} />
        </Stack.Navigator>
     
    );
  }



 const Tab = createBottomTabNavigator();

  const NavigationBottom = () => {
    return (
      
        <Tab.Navigator
          screenOptions={{
            "tabBarActiveTintColor": "blue",
          "tabBarInactiveTintColor": "gray",
          "tabBarLabelStyle": {
            "fontSize": 20,
            "textAlign": "center",
            "paddingBottom": '5%',
            "alignItems": "center",
            "justifyContent": "space-between"
          },
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]}}          
        >
          <Tab.Screen name="Arbitrum" component={Wallet} options={{headerShown: false}}
          />
          <Tab.Screen name="Fantom" component={Prices} />
          <Tab.Screen name="Ethereum" component={Prices} />
        </Tab.Navigator>
      
    );
  }