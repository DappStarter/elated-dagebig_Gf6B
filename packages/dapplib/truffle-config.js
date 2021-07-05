require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rate machine uncover give enroll slot giggle'; 
let testAccounts = [
"0xe7afab2ca9292086b98350a83c8f40a448e14c5b4b2d6515bc51b65546472c58",
"0x616b161774095bd351daeb6a973c3a0cd0d37851e78758e73aa6fb6f3f372420",
"0x180cad75712ddce3cc0f2255af8784dda2a79595323760cf02b1aba05e96a615",
"0xe99f310c66fef337a5e45730b0de9701c1554f838b806dc29dc3516088c49f01",
"0x5110921786e0b7132c5007b8c03bd2760b844b21d961ad9b910498c15f482816",
"0xcc313404a622896d8d7be23526b7089c14f5db9accaa9cd4d67b8d9a41b9e730",
"0x95f7d1b7c1bee5574e9903f45ee40aa52e53f00157bf9014f03a1362d653b725",
"0xc098e04bfcf5210517496e1735649eac71da3f108ee0c6e03449e4ee2050bcd9",
"0x43b721ec2b176f016b224f66a9187240637b03cbd1f5fddb27e3172b8aebc47d",
"0x99c9d3d9edd8587cd1ef2a21e504328f3d033d14db9cd9b7f02f01c251589677"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

