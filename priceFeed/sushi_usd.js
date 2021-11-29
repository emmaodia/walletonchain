const Web3 = require('ethers');
const url = 'https://arb-mainnet.g.alchemy.com/v2/r5zbp5Jv4uaDmya91xzAi3A97HE46iRK'
const provider = new Web3.providers.JsonRpcProvider(url);
const aggregatorV3InterfaceABI = [{ 'inputs':[], 'name':'decimals', 'outputs':[{ 'internalType':'uint8', 'name':"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const addr = '0xb2a8ba74cbca38508ba1632761b56c897060147c';
const priceFeed = new Web3.Contract(addr, aggregatorV3InterfaceABI, provider);

export const sushiUSD = async () => {
    try {
        const response = await priceFeed.latestRoundData()
        const result =  await response.answer * Math.pow(10, -8)
        return result
        
    } catch (error) {
        console.log(error)
    }   
}