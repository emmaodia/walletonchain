import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from './pages/home'
import { Wallet } from './pages/wallets'

const Stack = createStackNavigator();

export function Navigation() {
    return (
      
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Wallet" component={Wallet} options={{headerShown: false}} />
        </Stack.Navigator>
     
    );
  }
