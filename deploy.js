const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'YOUR MNEMONIC PHRASES',
  'YOUR NETWORK API'
);
const web3 = new Web3(provider);

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  console.log('Attemping to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy( { data: bytecode, arguments: ['Hi there!'] })
      .send({ from: accounts[0], gas: '1000000' });
  result.setProvider(provider);

  console.log('Contract deployted to', result.options.address);
};
deploy();
