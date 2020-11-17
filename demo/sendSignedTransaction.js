
var Web3 = require('gncweb3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

var toAddress ='GNC6cBe9DF6DF54281D363e7a5e1790dc66212438C7'

let fromPrivateKey= 'a59bc058eb76eea5b64f1e55a803aa0968efda8a943f8f7eb835a6df9ac3a835';
let fromAddress = 'GNC7d4ed9084A364424d1087d26C4Ef092EAfB0b395';

if (!web3.utils.isAddress(fromAddress)){
  console.log("address is unverifity")
  return
}

var rawTx={
    from:fromAddress,
    to:toAddress,
    value:"",
    data:"",
    gas:0,
    txType:0,
}
async function run(){
  
     //get gasPrice ,if only transaction,gasPrice just set 100000000;
     // var gasprice = web3.utils.toHex(100000000);
     rawTx.gasPrice = await web3.eth.gasPrice;

     //set transaction value,is "wei"；
     rawTx.value="1"

     //get nonce
      var n = await web3.eth.getTransactionCount(fromAddress,'pending');
      rawTx.nonce= web3.utils.toHex(n);
      rawTx.gas=await web3.eth.estimateGas(rawTx)

      //signTransaction and send
      var Data=await web3.eth.accounts.signTransaction(rawTx,fromPrivateKey)
        console.log(Data)
        console.log("--------waiting transaction,about four minutes-------")
        await web3.eth.sendSignedTransaction(Data.rawTransaction)
          .on('receipt',function(res){
            console.log(res)
          }).on('error', err => {
              console.log('send error ', err)
          }); 
  }
run()
