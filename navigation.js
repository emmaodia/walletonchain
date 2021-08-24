import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from './pages/home'
import { Wallet } from './pages/wallets'
import { Prices } from './pages/pricefeed'

const Stack = createStackNavigator();

export function Navigation() {
    return (
      
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Wallet" component={Wallet} options={{headerShown: false}} />
          <Stack.Screen name="Prices" component={Prices} options={{headerShown: false}} />
        </Stack.Navigator>
     
    );
  }
