// config.js - تنظیمات DApp
const CONFIG = {
    // آدرس قرارداد
    CONTRACT_ADDRESS: "0x166dd205590240c90ca4e0e545ad69db47d8f22f",
    
    // آدرس سازنده (آدرس خودتان را قرار دهید)
    CREATOR_ADDRESS: "0xYourCreatorAddressHere",
    
    // تنظیمات شبکه
    NETWORK: {
        chainId: "0x89", // 137 در مبنای دهدهی - Polygon Mainnet
        chainName: "Polygon Mainnet",
        rpcUrls: ["https://polygon-rpc.com"],
        blockExplorerUrls: ["https://polygonscan.com"],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        }
    },
    
    // تنظیمات WalletConnect
    WALLET_CONNECT: {
        infuraId: "YOUR_INFURA_ID" // از infura.io دریافت کنید
    },
    
    // تنظیمات DApp
    DAPP: {
        name: "PToken DApp",
        description: "A beautiful PToken DApp with miner features",
        version: "1.0.0"
    }
};

// ABI قرارداد
const CONTRACT_ABI = [
    {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "string", "name": "message", "type": "string"}],
        "name": "DebugMessage",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "uint256", "name": "newFee", "type": "uint256"}],
        "name": "EntryFeeUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
        {"indexed": false, "internalType": "string", "name": "poolType", "type": "string"},
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "ManualWithdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {"indexed": true, "internalType": "address", "name": "contributor", "type": "address"},
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "MinerPoolContribution",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"}
        ],
        "name": "MinerTokensBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "string", "name": "poolType", "type": "string"}],
        "name": "NoEligibleUsers",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
        {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
        {"indexed": true, "internalType": "address", "name": "upline", "type": "address"},
        {"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"},
        {"indexed": false, "internalType": "bool", "name": "placeOnLeft", "type": "bool"}
        ],
        "name": "Registered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
        {"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}
        ],
        "name": "UserMigrated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "CYCLE_DURATION",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ENTRY_FEE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_CYCLE_BALANCES",
        "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINER_BUY_INTERVAL",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PTOKEN_CONTRACT",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "userId", "type": "uint256"}],
        "name": "_getSpecialUserInfoForMigrateToNewFork",
        "outputs": [
        {"internalType": "uint256", "name": "id", "type": "uint256"},
        {"internalType": "address", "name": "userAddress", "type": "address"},
        {"internalType": "uint256", "name": "leftCount", "type": "uint256"},
        {"internalType": "uint256", "name": "rightCount", "type": "uint256"},
        {"internalType": "uint256", "name": "saveLeft", "type": "uint256"},
        {"internalType": "uint256", "name": "saveRight", "type": "uint256"},
        {"internalType": "uint256", "name": "balanceCount", "type": "uint256"},
        {"internalType": "address", "name": "upline", "type": "address"},
        {"internalType": "uint256", "name": "specialBalanceCount", "type": "uint256"},
        {"internalType": "uint256", "name": "totalMinerRewards", "type": "uint256"},
        {"internalType": "uint256", "name": "entryPrice", "type": "uint256"},
        {"internalType": "bool", "name": "isMiner", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyMinerTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contributeToMinerPool",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributeMinerTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eligiblePoolUserCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eligibleSpecialUserCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinerStats",
        "outputs": [
        {"internalType": "uint256", "name": "checkedOutPaidCount", "type": "uint256"},
        {"internalType": "uint256", "name": "eligibleInProgressCount", "type": "uint256"},
        {"internalType": "uint256", "name": "totalRemain", "type": "uint256"},
        {"internalType": "uint256", "name": "networkerCount", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "percent", "type": "uint256"}],
        "name": "getMinerStatsByPercent",
        "outputs": [
        {"internalType": "uint256", "name": "usersAbovePercent", "type": "uint256"},
        {"internalType": "uint256", "name": "totalRemaining", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSpecialPoolParticipants",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenPrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "userId", "type": "uint256"}],
        "name": "getUserDirects",
        "outputs": [
        {"internalType": "uint256", "name": "leftId", "type": "uint256"},
        {"internalType": "uint256", "name": "rightId", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
        "name": "getUserInfo",
        "outputs": [
        {"internalType": "uint256", "name": "id", "type": "uint256"},
        {"internalType": "uint256", "name": "uplineId", "type": "uint256"},
        {"internalType": "uint256", "name": "leftCount", "type": "uint256"},
        {"internalType": "uint256", "name": "rightCount", "type": "uint256"},
        {"internalType": "uint256", "name": "saveLeft", "type": "uint256"},
        {"internalType": "uint256", "name": "saveRight", "type": "uint256"},
        {"internalType": "uint256", "name": "balanceCount", "type": "uint256"},
        {"internalType": "uint256", "name": "specialBalanceCount", "type": "uint256"},
        {"internalType": "uint256", "name": "totalMinerRewards", "type": "uint256"},
        {"internalType": "uint256", "name": "entryPrice", "type": "uint256"},
        {"internalType": "bool", "name": "isMiner", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint8", "name": "day", "type": "uint8"}],
        "name": "isCurrentTimeMatchToDay",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isPoolWithdrawable",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastMinerBuyTime",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastPoolWithdrawTime",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minerTokenPool",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {"internalType": "uint256", "name": "id", "type": "uint256"},
        {"internalType": "address", "name": "userWallet", "type": "address"},
        {"internalType": "uint256", "name": "uplineId", "type": "uint256"},
        {"internalType": "address", "name": "leftChildAddress", "type": "address"},
        {"internalType": "address", "name": "rightChildAddress", "type": "address"},
        {"internalType": "uint256", "name": "oldLeftCount", "type": "uint256"},
        {"internalType": "uint256", "name": "oldRightCount", "type": "uint256"},
        {"internalType": "uint256", "name": "oldLeftSave", "type": "uint256"},
        {"internalType": "uint256", "name": "oldRightSave", "type": "uint256"}
        ],
        "name": "mpu",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pendingMinerFunds",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "poolBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "poolPointCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {"internalType": "uint256", "name": "uplineCode", "type": "uint256"},
        {"internalType": "bool", "name": "placeOnLeft", "type": "bool"}
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "specialPointCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "specialRewardPool",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalUsers",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
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
        "inputs": [{"internalType": "uint256", "name": "newFee", "type": "uint256"}],
        "name": "updateEntryFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawSpecials",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];