// آدرس قرارداد
const contractAddress = "0x5Bf4F9E5B09B8bE4078fcC4Ca778A5Cb51E67035";

// ABI قرارداد (کامل)
const contractAbi = [
  {
    "inputs": [{"internalType": "address", "name": "_starter", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
      {"indexed": true, "internalType": "address", "name": "upline", "type": "address"},
      {"indexed": false, "internalType": "bool", "name": "placeOnLeft", "type": "bool"}
    ],
    "name": "Registered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "cycleId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "caller", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "Withdrawn",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentCycleId",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentCycleDuration",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPoolBalance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "userAddress", "type": "address"}],
    "name": "getUser",
    "outputs": [
      {"internalType": "uint256", "name": "id", "type": "uint256"},
      {"internalType": "address", "name": "wallet", "type": "address"},
      {"internalType": "address", "name": "upline", "type": "address"},
      {"internalType": "address", "name": "left", "type": "address"},
      {"internalType": "address", "name": "right", "type": "address"},
      {"internalType": "uint256", "name": "balanceCount", "type": "uint256"},
      {"internalType": "uint256", "name": "lastBalanceReset", "type": "uint256"},
      {"internalType": "uint256", "name": "cycleBalanceCount", "type": "uint256"},
      {"internalType": "uint256", "name": "savedBalanceCount", "type": "uint256"},
      {"internalType": "uint256", "name": "leftCount", "type": "uint256"},
      {"internalType": "uint256", "name": "rightCount", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "upline", "type": "address"},
      {"internalType": "bool", "name": "placeOnLeft", "type": "bool"}
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "cycleId", "type": "uint256"}],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// متغیرهای گلوبال
let provider;
let signer;
let contract;
let userAccount;

// انتخاب کیف پول
function selectWalletProvider() {
  const providerType = document.getElementById("wallet-provider").value;
  if (providerType === "metamask" && window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else if (providerType === "walletconnect") {
    provider = new ethers.providers.Web3Provider(new WalletConnectProvider({ infuraId: "YOUR_INFURA_ID" }));
  } else if (providerType === "coinbase" && window.coinbaseWalletExtension) {
    provider = new ethers.providers.Web3Provider(window.coinbaseWalletExtension);
  }
}