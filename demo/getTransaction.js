var Web3 = require('gncweb3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

web3.eth.getTransaction('0x059ac60edcfcf5b19377d18437a73fed2e0e5c147da94daf64037f267453ea86').then(console.log)