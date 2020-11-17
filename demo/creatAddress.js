var Crypto=require("crypto");
var secp256k1=require("secp256k1");
var createKeccakHash=require("keccak");
var fs = require('fs');

//Generate a random number of 32 bytes
var privateKey=Crypto.randomBytes(32)

console.log("0x"+privateKey.toString("hex"))

//Generate publickey by secp256k1 elliptic curve
var pubKey=secp256k1.publicKeyCreate(Buffer.from(privateKey,"hex"),false).slice(1)

//keccak256 hash and get address
var add=createKeccakHash("keccak256").update(Buffer.from(pubKey,"hex")).digest()
console.log("GNC"+add.toString("hex").slice(-40))


