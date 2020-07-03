require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth random come hunt describe front tattoo'; 
let testAccounts = [
"0x33acd8b32b94140b49216852270337444e9c9330028a1c396f36a78562226cdc",
"0x77c991829828c5bd678e83d0bca34496184a1a4c34590d4a155064020c14c99f",
"0x0961befc91e453f9ea885980ad1de005ff55d6dec5e1ce8c7d36de8ab8f32952",
"0x4ade31acbc0bde928fdaaaab3d466b32df3c7b47dfc681ec9a340b91a17843b3",
"0x0a6d1ba695b89893a1b5a43b01c0da41d61bc19b59108da1cd363db1cd247a28",
"0x7e712fdb860b6cb90ec7382a99b749c283fc357f4aab676d0359484c36038492",
"0xc3810c8558756bdf1cf0d338c0196a046addbd3af66cc19bbaeb30cbfc61a28b",
"0x90f0b34d240d8f7564610e0f7b60e8b33b69f732e20cd722ca85505995a1cb2d",
"0x9cc82ccbcfc0dc03bd46363782a41d0ab4a859b7019c187107b9dd65ce396305",
"0x5d9ebc94c3f40083cfec7d92c0469d83be0a7e6347cb8d8705afe1b9ca216422"
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
            version: '^0.5.11'
        }
    }
};
