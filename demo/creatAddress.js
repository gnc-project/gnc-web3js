var Web3 = require('gncweb3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

console.log(web3.eth.accounts.create())


