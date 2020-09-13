require('dotenv').config(); 
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC
  
  
  module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // Match any network id
      },
      ropsten: {
        provider: function() {
          return new HDWalletProvider(
            //mnemonic
            mnemonic,
             //URL to ethereum node
            `https://ropsten.infura.io/v3/1709f0e4924c4ae0a87b1bab48d3a398`     
            )
        },
        gas: 5000000,
        gasPrice: 25000000000,
        network_id: 3 // Match any network id
      }
    },
    contracts_directory: './src/contracts/',    
    compilers: {
      solc: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  } 