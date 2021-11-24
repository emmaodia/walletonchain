import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
// import Web3 from 'web3';

export function Prices() {

    // const [ amount, setAmount ] = useState('')

    // const web3 = new Web3('https://polygon-mainnet.infura.io/v3/9b7bcd2b0059444c9248ba5eba1716b3');

    // const aggregatorV3InterfaceABI = [{ 'inputs':[], 'name':'decimals', 'outputs':[{ 'internalType':'uint8', 'name':"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
    // const addr = '0xF9680D99D6C9589e2a93a78A04A279e509205945';
    // const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);

    // const result = priceFeed.methods.latestRoundData().call()
    // .then((roundData) => {
    //     // Do something with roundData
    //     // console.log("Latest Round Data", roundData)
    //     return roundData.answer
    // })

    // const ethUSD = () => {
    //     result.then((a) => { console.log(a)})
    // } 

    // useEffect(() => {
    //     setAmount = ethUSD();
    // })

    return(
        <View style={{padding: '45%'}}>
            <Text>Prices {amount} </Text>
        </View>
    )
}