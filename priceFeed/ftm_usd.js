const Web3 = require('ethers');
const url = 'https://opt-mainnet.g.alchemy.com/v2/JAQ1picEdAMxdwO498ta5VbEyrbTZVLK'

const provider = new Web3.providers.JsonRpcProvider(url);
const aggregatorV3InterfaceABI = [{ 'inputs':[], 'name':'decimals', 'outputs':[{ 'internalType':'uint8', 'name':"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const addr = '0xA969bEB73d918f6100163Cd0fba3C586C269bee1';
const priceFeed = new Web3.Contract(addr, aggregatorV3InterfaceABI, provider);


const price = async () => {

    try {
    const response = await priceFeed.latestRoundData()
    
    console.log(response.answer * Math.pow(10, -8))
    
    const result =  await response.answer * Math.pow(10, -8)

    return result
        
    } catch (error) {
        console.log(error)
    }
    
}

price();
// export default price;

