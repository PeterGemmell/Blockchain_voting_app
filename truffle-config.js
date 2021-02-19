module.exports = {
  compilers: {
    solc: {
      version: "0.4.22"
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};

// module.exports = {
//   // your existing config goes here
//   // don't forget to put comma on the last element before proceeding to next line
//
//   compilers: {
//     solc: {
//       version: "0.4.22"
//     }
//   }
// }
