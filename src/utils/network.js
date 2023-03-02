export const networkIds = {
  BESC: 535037
}

const networks = {
  [networkIds.BESC]: {
    chainId: '0x829FD',
    chainName: 'BESC Network',
    nativeCurrency: {
      name: 'BESC Coin',
      symbol: 'BESC',
      decimals: 18
    },
    rpc: 'https://mainnet-rpc.bescscan.io',
    explorer: 'https://bescscan.io'
  }
}

export const getNetwork = (networkId) => networks[networkId]
