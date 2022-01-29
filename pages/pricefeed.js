import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import "@ethersproject/shims"
import { ethers } from "ethers";
import { price } from '../priceFeed/btc_usd'

export function Prices() {

    const [ amount, setAmount ] = useState('')
    const [ amoun, setAmoun ] = useState('')
    

    useEffect(() => {
        setAmount(ethUSD().result)
    }, [])
    

    const url = 'https://arb-mainnet.g.alchemy.com/v2/r5zbp5Jv4uaDmya91xzAi3A97HE46iRK'

    const provider = new ethers.providers.JsonRpcProvider(url);
    
    const aggregatorV3InterfaceABI = [{ 'inputs':[], 'name':'decimals', 'outputs':[{ 'internalType':'uint8', 'name':"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
    const addr = '0x639fe6ab55c921f74e7fac1ee960c0b6293ba612';
    const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider);
   

    console.log('here2')
    // console.log(price())

    const waitForResponse = async () => {
        try {
            const resp = await price()
            console.log('resp')
            console.log(resp)

            setAmoun(resp)
            return resp;
                
        } catch (error) {
            console.log(error)
        }
    }    
    
    const ethUSD = async () => {

        try {
            // let validId = BigInt("18446744073709562301")
        const response = await priceFeed.latestRoundData()
        console.log('response')
        // console.log(response)
        console.log(response.answer * Math.pow(10, -8))
        console.log('here')
        const result =  await response.answer * Math.pow(10, -8)

        setAmount(result.toFixed(2))
        return result
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <View style={{marginTop: '10%', padding: '10%'}}>
            <Text>Prices {amount} {amoun}</Text>
        </View>
    )
}