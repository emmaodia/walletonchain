import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export function Home({ navigation }) {
  return (
    <Layout style={styles.container}>
      <Text style={{fontFamily: 'scp-regular'}} category='h3' >The is the only mobile app in the world where you can view Chain.Link Price Feeds and set push notifications to receive changes in Token Pair Prices!</Text>
      <Button
      appearance='ghost'
      style={styles.button}
      size='giant'
      onPress={() =>
        navigation.navigate('Wallet')
      } 
    >{props => <Text {...props}>Launch App</Text>}</Button>
      <StatusBar style="auto" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: 'space-mono'
    padding: '10%'
  },
  button: {
      fontFamily: 'scp-regular',
      margin: 20,
      width: '50%'
  },

});
