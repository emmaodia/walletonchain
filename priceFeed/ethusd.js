// const Web3 = require('web3');
const Web3 = require('ethers');



// const web3 = new Web3('https://kovan.infura.io/v3/9b7bcd2b0059444c9248ba5eba1716b3');
// const web3 = new Web3('https://polygon-mainnet.infura.io/v3/9b7bcd2b0059444c9248ba5eba1716b3');

const url = 'https://arb-mainnet.g.alchemy.com/v2/r5zbp5Jv4uaDmya91xzAi3A97HE46iRK'

const provider = new Web3.providers.JsonRpcProvider(url);
console.log(provider.connection);
const aggregatorV3InterfaceABI = [{ 'inputs':[], 'name':'decimals', 'outputs':[{ 'internalType':'uint8', 'name':"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const addr = '0x639fe6ab55c921f74e7fac1ee960c0b6293ba612';
const priceFeed = new Web3.Contract(addr, aggregatorV3InterfaceABI, provider);
// const value = await priceFeed.getValue();
console.log(priceFeed.address)
console.log(priceFeed)
console.log(priceFeed.latestRoundData)

console.log('here2')

// const value = async() => {
//     const response = await priceFeed.getValue();
//     console.log('value')
//     console.log(response)
// }

// console.log(value().result)

const etusd = async () => {

    try {
        // let validId = BigInt("18446744073709562301")
    const response = await priceFeed.latestRoundData()
    console.log('response')
    // console.log(response)
    console.log(response.answer * Math.pow(10, -8))
    console.log('here')
    const result =  await response.answer * Math.pow(10, -8)

    return result
        
    } catch (error) {
        console.log(error)
    }
    
}

// const result = 
etusd()

// console.log(etusd().result)
