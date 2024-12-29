export const CRYPTOCURRENCIES = [
  {
    id: 'usdt',
    label: 'USDT',
    value: 'usdt',
    icon: require('../assets/images/cryptos/usdt.png'),
    minDeposit: '1 USDT',
    minWithdraw: '1 USDT',
    withdrawFee: '0.5 USDT',
    networks: [
      {
        id: 'bep20',
        label: 'BNB Chain(BEP20)',
        value: 'bnb',
        icon: require('../assets/images/cryptos/bnb.png'),
      }
    ]
  },
  {
    id: 'btc',
    label: 'BTC',
    value: 'btc',
    icon: require('../assets/images/cryptos/btc.png'),
    minDeposit: '0.0001 BTC',
    minWithdraw: '0.0001 BTC',
    withdrawFee: '0.0001 BTC',
    networks: [
      {
        id: 'btc',
        label: 'Bitcoin Network',
        value: 'btc',
        icon: require('../assets/images/cryptos/btc.png'),
      }
    ]
  },
  {
    id: 'eth',
    label: 'ETH',
    value: 'eth',
    icon: require('../assets/images/cryptos/eth.png'),
    minDeposit: '0.01 ETH',
    minWithdraw: '0.01 ETH',
    withdrawFee: '0.005 ETH',
    networks: [
      {
        id: 'erc20',
        label: 'Ethereum (ERC20)',
        value: 'eth',
        icon: require('../assets/images/cryptos/eth.png'),
      }
    ]
  },
  {
    id: 'bnb',
    label: 'BNB',
    value: 'bnb',
    icon: require('../assets/images/cryptos/bnb.png'),
    minDeposit: '0.01 BNB',
    minWithdraw: '0.01 BNB',
    withdrawFee: '0.001 BNB',
    networks: [
      {
        id: 'bep20',
        label: 'BNB Chain(BEP20)',
        value: 'bnb',
        icon: require('../assets/images/cryptos/bnb.png'),
      }
    ]
  },
  {
    id: 'sol',
    label: 'SOL',
    value: 'sol',
    icon: require('../assets/images/cryptos/sol.png'),
    minDeposit: '0.1 SOL',
    minWithdraw: '0.1 SOL',
    withdrawFee: '0.01 SOL',
    networks: [
      {
        id: 'sol',
        label: 'Solana Network',
        value: 'sol',
        icon: require('../assets/images/cryptos/sol.png'),
      }
    ]
  }
];

export const getCryptoById = (id) => CRYPTOCURRENCIES.find(crypto => crypto.id === id);

export const getNetworksByCryptoId = (cryptoId) => {
  const crypto = getCryptoById(cryptoId);
  return crypto ? crypto.networks : [];
}; 