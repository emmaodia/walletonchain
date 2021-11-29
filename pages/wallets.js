import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Navigation, NavigationBottom } from '../navigation';
import { Divider } from '@ui-kitten/components';
import { CardItem } from '../components/card';
import { price } from '../priceFeed/btc_usd'
import { linkUSD } from '../priceFeed/link_usd'
import { ethUSD } from '../priceFeed/eth_usd';
import { aaveUSD } from '../priceFeed/aave_usd';
import { usdcUSD } from '../priceFeed/usdc_usd';
import { yfiUSD } from '../priceFeed/yfi_usd';
import { uniUSD } from '../priceFeed/uni_usd';
import { sushiUSD } from '../priceFeed/sushi_usd';
import { NavigationContainer } from '@react-navigation/native';


export function Wallet({navigation}) {

  const [ BTCUSD, setBTCUSD ] = useState('')
  const [ LINKUSD, setLINKUSD ] = useState('')
  const [ ETHUSD, setETHUSD ] = useState('')
  const [ AAVEUSD, setAAVEUSD ] = useState('')
  const [ USDCUSD, setUSDCUSD ] = useState('')
  const [ YFIUSD, setYFIUSD ] = useState('')
  const [ UNIUSD, setUNIUSD ] = useState('')
  const [ SUSHIUSD, setSUSHIUSD ] = useState('')

  useEffect(() => {
    waitForResponse(),
    waitForLinkUSD(),
    waitForEthUSD(),
    waitForAaveUSD(),
    waitForUsdcUSD(),
    waitForYfiUSD(),
    waitForUniUSD(),
    waitForSushiUSD()
  }, [])

  const waitForResponse = async () => {
    try {
        const resp = await price()
        console.log('resp')
        console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

        setBTCUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        return resp;
             
    } catch (error) {
        console.log(error)
    }
}    

const waitForEthUSD = async () => {
  try {
      const resp = await ethUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setETHUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}    

const waitForAaveUSD = async () => {
  try {
      const resp = await aaveUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setAAVEUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}    

const waitForLinkUSD = async () => {
  try {
      const resp = await linkUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setLINKUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}    

const waitForUsdcUSD = async () => {
  try {
      const resp = await usdcUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setUSDCUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}    

const waitForYfiUSD = async () => {
  try {
      const resp = await yfiUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setYFIUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}

const waitForUniUSD = async () => {
  try {
      const resp = await uniUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setUNIUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}

const waitForSushiUSD = async () => {
  try {
      const resp = await sushiUSD()
      console.log('resp')
      console.log(resp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

      setSUSHIUSD(resp.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      return resp;
           
  } catch (error) {
      console.log(error)
  }
}

  return (
   
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Prices')}>
      <Text style={{fontFamily: 'scp-bold'}} category='h1' >Price Feed</Text>
      </TouchableOpacity>
      <Divider style={{ margin: 5 }}/>
      <ScrollView style={{width: '100%'}}>
      <CardItem 
      // key={ethUSD}
      name={'BTC/USD'}
      num={BTCUSD}
      />
      <CardItem 
        name={'ETH/USD'}
        num={ETHUSD}
      />
      <CardItem 
       name={'AAVE/USD'}
       num={AAVEUSD}
      />
      <CardItem 
      name={'LINK/USD'}
      num={LINKUSD}
      />
      <CardItem
      name={'USDC/USD'}
      num={USDCUSD}
      />
      <CardItem
      name={'YFI/USD'}
      num={YFIUSD}
      />
      <CardItem
      name={'UNI/USD'}
      num={UNIUSD}
      />
      <CardItem
      name={'SUSHI/USD'}
      num={SUSHIUSD}
      />
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
