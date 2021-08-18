import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Divider } from '@ui-kitten/components';
import { CardItem } from '../components/card';

// import ethUSD from '../priceFeed/ethusd';

export function Wallet({navigation}) {

  // useEffect(() => {
  //   ethUSD();
  // }, [])

  return (
   
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Prices')}>
      <Text style={{fontFamily: 'scp-bold'}} category='h1' >Price Feed</Text>
      </TouchableOpacity>
      <Divider style={{ margin: 5 }}/>
      <ScrollView style={{width: '100%'}}>
      <CardItem 
      // key={ethUSD}
      // num={ethUSD}
      />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    margin: '1%',
    paddingTop: '15%',
  },
});
