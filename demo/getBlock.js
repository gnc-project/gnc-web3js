var Web3 = require('gncweb3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

web3.eth.getBlockNumber().then(
    function (res){
        web3.eth.getBlock(res).then(
            console.log
        )
    }
);

