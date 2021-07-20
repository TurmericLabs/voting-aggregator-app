const {usePlugin} = require('@nomiclabs/buidler/config')

usePlugin('@aragon/buidler-aragon')
usePlugin('@nomiclabs/buidler-truffle5')
// usePlugin('buidler-gas-reporter') // Must have a ganache instance running but execute with buidlerevm, otherwise errors occur

module.exports = {
    defaultNetwork: 'buidlerevm',
    networks: {
        buidlerevm: {
        },
        ganache: {
            url: 'http://localhost:8545'
        },
        rinkeby: {
            url: 'https://rinkeby.infura.io/v3/460f40a260564ac4a4f4b3fffb032dad',
            accounts: [process.env.ETH_KEY],
            gas: 7.9e6,
            gasPrice: 15000000001
        },
        xdai: {
            url: 'https://xdai.1hive.org/',
            accounts: [process.env.ETH_KEY_2],
            gas: 4e6,
            gasPrice: 2000000000
        },
        arbtest: {
            url: 'https://rinkeby.arbitrum.io/rpc',
            accounts: [process.env.ETH_KEY],
            gasPrice: 0,
        },
        arbitrum: {
            url: 'https://arb1.arbitrum.io/rpc',
            accounts: [process.env.ETH_KEY],
            gasPrice: 0,
        },
    },
    solc: {
        version: '0.4.24',
        optimizer: {
            enabled: true,
            runs: 20000
        },
    }
}
