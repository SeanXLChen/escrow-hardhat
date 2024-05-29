require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.SEAN_PRIVATE_KEY, process.env.SEAN_PRIVATE_KEY2, process.env.SEAN_PRIVATE_KEY3],
    },
    localhost: {
      url: "http://127.0.0.1:8545/"
    }
  },
  paths: {
    artifacts: "./app/src/artifacts",
  }
};
