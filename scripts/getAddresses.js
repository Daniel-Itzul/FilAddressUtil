// address processing
require('dotenv').config();
const fa = require("@glif/filecoin-address");
const deployer = new ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY);

function hexToBytes(hex) {
    // ref: https://stackoverflow.com/a/34356351
    for (var bytes = [], c = 0; c < hex.length; c += 2)
      bytes.push(parseInt(hex.substr(c, 2), 16));
      console.log(hex.substr(c, 2))
    return new Uint8Array(bytes);
  }
  
const pubKey = hexToBytes(deployer.publicKey.slice(2));

const f1addr = fa.newSecp256k1Address(pubKey);

console.log("Your Public key is " + deployer.publicKey)
console.log("Your Ethereum(EVM) Address is " +deployer["address"]+" Your Filecoin Address is "+f1addr)
