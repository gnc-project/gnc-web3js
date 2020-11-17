
var Web3 = require('gncweb3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

var Address ='GNC7d4ed9084A364424d1087d26C4Ef092EAfB0b395'


web3.eth.getBalance(Address).then(
    console.log
)
