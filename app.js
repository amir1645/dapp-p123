// آدرس قرارداد
let contractAddress = "0x5Bf4F9E5B09B8bE4078fcC4Ca778A5Cb51E67035";

// ABI قرارداد (کامل)
let contractAbi = [
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
let web3;
let contract;
let userAccount;

// تابع اتصال به کیف پول
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      userAccount = accounts[0];
      document.getElementById("account").innerText = "آدرس شما: " + userAccount;
      document.getElementById("register-section").style.display = "block";

      // چک کن Web3 لود شده باشه
      if (typeof Web3 === 'undefined') {
        document.getElementById("message").innerText = "خطا: Web3 لود نشد. صفحه را رفرش کنید.";
        return;
      }
// مقداردهی اولیه Web3 و قرارداد
      web3 = new Web3(window.ethereum);
      contract = new web3.eth.Contract(contractAbi, contractAddress);

      // اطلاعات کاربر رو بگیر
      await fetchUserInfo();
    } catch (err) {
      console.error("User rejected request:", err);
      document.getElementById("message").innerText = "خطا: " + (err.message || "کاربر درخواست را رد کرد");
    }
  } else {
    alert("لطفاً MetaMask را نصب کنید!");
  }
}

// تابع گرفتن اطلاعات کاربر
async function fetchUserInfo() {
  if (contract && userAccount) {
    try {
      const user = await contract.methods.getUser(userAccount).call();
      document.getElementById("user-info").style.display = "block";
      document.getElementById("user-id").innerText = user.id;
      document.getElementById("user-upline").innerText = user.upline;
      document.getElementById("left-count").innerText = user.leftCount;
      document.getElementById("right-count").innerText = user.rightCount;
    } catch (err) {
      document.getElementById("message").innerText = "خطا در گرفتن اطلاعات: " + err.message;
    }
  }
}

// تابع ثبت‌نام
async function register() {
  const uplineAddress = document.getElementById("upline-address").value;
  const placeOnLeft = document.querySelector('input[name="place"]:checked').value === "left";

  if (!web3.utils.isAddress(uplineAddress)) {
    document.getElementById("message").innerText = "خطا: آدرس آپلاین نامعتبر است";
    return;
  }

  try {
    const gasEstimate = await contract.methods.register(uplineAddress, placeOnLeft).estimateGas({
      from: userAccount,
      value: web3.utils.toWei("350", "ether")
    });
    await contract.methods.register(uplineAddress, placeOnLeft).send({
      from: userAccount,
      value: web3.utils.toWei("350", "ether"),
      gas: gasEstimate
    });
    document.getElementById("message").innerText = "موفقیت: ثبت‌نام انجام شد";
    await fetchUserInfo();
  } catch (err) {
    console.error("Register error:", err);
    document.getElementById("message").innerText = "خطا: " + (err.message || "تراکنش رد شد");
  }
}