// آدرس قرارداد و آدرس سازنده
const contractAddress = "0x166dd205590240c90ca4e0e545ad69db47d8f22f";
const creatorAddress = "0xYourCreatorAddressHere"; // آدرس خودت رو اینجا بذار

// ABI قرارداد
const contractAbi = [
  {"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"DebugMessage","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"EntryFeeUpdated","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"poolType","type":"string"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ManualWithdraw","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contributor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MinerPoolContribution","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MinerTokensBought","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"poolType","type":"string"}],"name":"NoEligibleUsers","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"bool","name":"placeOnLeft","type":"bool"}],"name":"Registered","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"UserMigrated","type":"event"},
  {"inputs":[],"name":"CYCLE_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"ENTRY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"MAX_CYCLE_BALANCES","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"MINER_BUY_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"PTOKEN_CONTRACT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"userId","type":"uint256"}],"name":"_getSpecialUserInfoForMigrateToNewFork","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"leftCount","type":"uint256"},{"internalType":"uint256","name":"rightCount","type":"uint256"},{"internalType":"uint256","name":"saveLeft","type":"uint256"},{"internalType":"uint256","name":"saveRight","type":"uint256"},{"internalType":"uint256","name":"balanceCount","type":"uint256"},{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"specialBalanceCount","type":"uint256"},{"internalType":"uint256","name":"totalMinerRewards","type":"uint256"},{"internalType":"uint256","name":"entryPrice","type":"uint256"},{"internalType":"bool","name":"isMiner","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"buyMinerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"contributeToMinerPool","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[],"name":"distributeMinerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"eligiblePoolUserCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"eligibleSpecialUserCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getMinerStats","outputs":[{"internalType":"uint256","name":"checkedOutPaidCount","type":"uint256"},{"internalType":"uint256","name":"eligibleInProgressCount","type":"uint256"},{"internalType":"uint256","name":"totalRemain","type":"uint256"},{"internalType":"uint256","name":"networkerCount","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"getMinerStatsByPercent","outputs":[{"internalType":"uint256","name":"usersAbovePercent","type":"uint256"},{"internalType":"uint256","name":"totalRemaining","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getSpecialPoolParticipants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"userId","type":"uint256"}],"name":"getUserDirects","outputs":[{"internalType":"uint256","name":"leftId","type":"uint256"},{"internalType":"uint256","name":"rightId","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"uplineId","type":"uint256"},{"internalType":"uint256","name":"leftCount","type":"uint256"},{"internalType":"uint256","name":"rightCount","type":"uint256"},{"internalType":"uint256","name":"saveLeft","type":"uint256"},{"internalType":"uint256","name":"saveRight","type":"uint256"},{"internalType":"uint256","name":"balanceCount","type":"uint256"},{"internalType":"uint256","name":"specialBalanceCount","type":"uint256"},{"internalType":"uint256","name":"totalMinerRewards","type":"uint256"},{"internalType":"uint256","name":"entryPrice","type":"uint256"},{"internalType":"bool","name":"isMiner","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint8","name":"day","type":"uint8"}],"name":"isCurrentTimeMatchToDay","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"isPoolWithdrawable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"lastMinerBuyTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"lastPoolWithdrawTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"minerTokenPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"userWallet","type":"address"},{"internalType":"uint256","name":"uplineId","type":"uint256"},{"internalType":"address","name":"leftChildAddress","type":"address"},{"internalType":"address","name":"rightChildAddress","type":"address"},{"internalType":"uint256","name":"oldLeftCount","type":"uint256"},{"internalType":"uint256","name":"oldRightCount","type":"uint256"},{"internalType":"uint256","name":"oldLeftSave","type":"uint256"},{"internalType":"uint256","name":"oldRightSave","type":"uint256"}],"name":"mpu","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"pendingMinerFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"poolBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"poolPointCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"uplineCode","type":"uint256"},{"internalType":"bool","name":"placeOnLeft","type":"bool"}],"name":"register","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[],"name":"specialPointCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"specialRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"updateEntryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"withdrawPool","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"withdrawSpecials","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

// متغیرهای گلوبال
let provider = null;
let signer = null;
let contract = null;
let userAccount = null;
let walletProvider = "metamask";
let isInWalletApp = false;

// تشخیص محیط اپلیکیشن کیف پول
function detectWalletApp() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("metamask") || userAgent.includes("coinbase") || userAgent.includes("trust")) {
    isInWalletApp = true;
  }
}

// متن‌ها برای زبان‌ها
const translations = {
  fa: {
    title: "PToken DApp",
    connect: "اتصال به کیف پول",
    disconnect: "قطع اتصال",
    account: "آدرس شما: ",
    registerTitle: "ثبت‌نام",
    leftLabel: "سمت چپ",
    rightLabel: "سمت راست",
    userInfoTitle: "اطلاعات کاربر",
    treeTitle: "ساختار درختی",
    successRegister: "موفقیت: ثبت‌نام انجام شد",
    errorConnection: "خطا: ",
    errorRegister: "خطا: ",
    errorUserInfo: "خطا در گرفتن اطلاعات: ",
    errorTree: "خطا در نمایش درخت: ",
    installMetaMask: "لطفاً کیف پول را نصب کنید یا از مرورگر داخلی کیف پول استفاده کنید!",
    invalidUpline: "خطا: کد آپلاین نامعتبر است",
    noTree: "درختی برای نمایش وجود ندارد.",
    minerTitle: "بخش ماینر",
    minerStatus: "وضعیت ماینر",
    minerRewards: "پرداخت‌های ماینر",
    withdrawTitle: "برداشت",
    buyMiner: "خرید توکن‌های ماینر",
    withdrawPoolBtn: "برداشت از استخر اصلی",
    withdrawSpecialBtn: "برداشت از استخر ویژه"
  },
  ar: {
    title: "تطبيق PToken",
    connect: "توصيل بالمحفظة",
    disconnect: "فصل المحفظة",
    account: "عنوانك: ",
    registerTitle: "التسجيل",
    leftLabel: "الجانب الأيسر",
    rightLabel: "الجانب الأيمن",
    userInfoTitle: "معلومات المستخدم",
    treeTitle: "الهيكل الشجري",
    successRegister: "نجاح: تم التسجيل",
    errorConnection: "خطأ: ",
    errorRegister: "خطأ: ",
    errorUserInfo: "خطأ في جلب المعلومات: ",
    errorTree: "خطأ في عرض الشجرة: ",
    installMetaMask: "يرجى تثبيت المحفظة أو استخدام متصفح المحفظة الداخلي!",
    invalidUpline: "خطأ: عنوان الراعي غير صالح",
    noTree: "لا يوجد شجرة للعرض.",
    minerTitle: "قسم الماينر",
    minerStatus: "حالة الماينر",
    minerRewards: "دفعات الماينر",
    withdrawTitle: "سحب",
    buyMiner: "شراء رموز الماينر",
    withdrawPoolBtn: "سحب من حوض الرئيسي",
    withdrawSpecialBtn: "سحب من حوض الخاص"
  },
  en: {
    title: "PToken DApp",
    connect: "Connect Wallet",
    disconnect: "Disconnect Wallet",
    account: "Your address: ",
    registerTitle: "Register",
    leftLabel: "Left Side",
    rightLabel: "Right Side",
    userInfoTitle: "User Information",
    treeTitle: "Tree Structure",
    successRegister: "Success: Registration completed",
    errorConnection: "Error: ",
    errorRegister: "Error: ",
    errorUserInfo: "Error fetching information: ",
    errorTree: "Error displaying tree: ",
    installMetaMask: "Please install a wallet or use the wallet's built-in browser!",
    invalidUpline: "Error: Upline code is invalid",
    noTree: "No tree to display.",
    minerTitle: "Miner Section",
    minerStatus: "Miner Status",
    minerRewards: "Miner Rewards",
    withdrawTitle: "Withdraw",
    buyMiner: "Buy Miner Tokens",
    withdrawPoolBtn: "Withdraw from Main Pool",
    withdrawSpecialBtn: "Withdraw from Special Pool"
  }
};

// تنظیم زبان پیش‌فرض
let currentLanguage = 'fa';
function changeLanguage() {
  currentLanguage = document.getElementById("language").value;
  updateTexts();
}

function updateTexts() {
  const t = translations[currentLanguage];
  document.querySelector(".title").textContent = t.title;
  document.getElementById("connect-btn").textContent = t.connect;
  document.getElementById("disconnect-btn").textContent = t.disconnect;
  document.getElementById("register-title").textContent = t.registerTitle;
  document.getElementById("left-label").textContent = t.leftLabel;
  document.getElementById("right-label").textContent = t.rightLabel;
  document.getElementById("user-info-title").textContent = t.userInfoTitle;
  document.getElementById("tree-title").textContent = t.treeTitle;
  document.querySelectorAll('.tabs button')[0].textContent = t.userInfoTitle;
  document.querySelectorAll('.tabs button')[1].textContent = t.treeTitle;
  document.querySelectorAll('.tabs button')[2].textContent = t.minerTitle;
  document.querySelectorAll('.tabs button')[3].textContent = t.withdrawTitle;
  document.querySelector('.miner-section .miner-status').textContent = t.minerStatus + ': ';
  document.querySelector('.miner-section div:nth-child(2)').textContent = t.minerRewards + ': ';
  document.querySelector('.miner-section button').textContent = t.buyMiner;
  document.querySelectorAll('.withdraw-button')[0].textContent = t.withdrawPoolBtn;
  document.querySelectorAll('.withdraw-button')[1].textContent = t.withdrawSpecialBtn;
}

// تابع باز کردن تب
function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  const buttons = document.querySelectorAll('.tabs button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  if (tabId === 'miner-tab') {
    fetchMinerInfo();
  } else if (tabId === 'tree-tab') {
    displayTree();
  }
}

// انتخاب کیف پول
function selectWalletProvider() {
  walletProvider = document.getElementById("wallet-provider").value;
  document.getElementById("message").innerText = `کیف پول انتخاب‌شده: ${walletProvider}`;
}

// تابع اتصال به کیف پول
async function connectWallet() {
  if (typeof window.ethers === 'undefined') {
    document.getElementById("message").innerText = translations[currentLanguage].errorConnection + "ethers.js لود نشده است.";
    return;
  }

  try {
    if (provider && walletProvider === "walletconnect") {
      await provider.provider.disconnect();
    }
    provider = null;
    signer = null;

    if (walletProvider === "metamask") {
      if (!window.ethereum) {
        document.getElementById("message").innerText = translations[currentLanguage].installMetaMask;
        return;
      }
      provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
    } else if (walletProvider === "walletconnect") {
      const WalletConnectProvider = window.WalletConnectProvider.default;
      const wcProvider = new WalletConnectProvider({
        infuraId: "YOUR_INFURA_ID", // اینجا Infura ID خودت رو بذار
        rpc: {
          137: "https://polygon-rpc.com",
        },
      });
      provider = new ethers.providers.Web3Provider(wcProvider);
      await provider.send("eth_requestAccounts", []);
    } else if (walletProvider === "coinbase") {
      const CoinbaseWalletSDK = window.CoinbaseWalletSDK;
      if (!CoinbaseWalletSDK) {
        document.getElementById("message").innerText = translations[currentLanguage].installMetaMask;
        return;
      }
      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: "PToken DApp",
        appLogoUrl: "https://yourdomain.com/logo.png",
      });
      provider = new ethers.providers.Web3Provider(coinbaseWallet.makeWeb3Provider());
      await provider.send("eth_requestAccounts", []);
    } else {
      document.getElementById("message").innerText = translations[currentLanguage].installMetaMask;
      return;
    }

    signer = provider.getSigner();
    userAccount = await signer.getAddress();
    document.getElementById("account").innerText = translations[currentLanguage].account + userAccount;
    document.getElementById("connect-btn").style.display = "none";
    document.getElementById("disconnect-btn").style.display = "inline-block";
    document.getElementById("register-section").style.display = "block";
    contract = new ethers.Contract(contractAddress, contractAbi, signer);
    await fetchUserInfo();
    await displayTree();
    document.getElementById("wallet-section").classList.add("connected");
  } catch (err) {
    document.getElementById("message").innerText = translations[currentLanguage].errorConnection + err.message;
  }
}

// تابع قطع اتصال
function disconnectWallet() {
  document.getElementById("wallet-section").classList.remove("connected");
  document.getElementById("wallet-section").classList.add("disconnected");
  setTimeout(() => {
    if (provider && walletProvider === "walletconnect") {
      provider.provider.disconnect();
    }
    provider = null;
    signer = null;
    contract = null;
    userAccount = null;
    document.getElementById("account").innerText = "";
    document.getElementById("connect-btn").style.display = "inline-block";
    document.getElementById("disconnect-btn").style.display = "none";
    document.getElementById("register-section").style.display = "none";
    document.getElementById("user-info-tab").style.display = "none";
    document.getElementById("tree-tab").style.display = "none";
    document.getElementById("miner-tab").style.display = "none";
    document.getElementById("withdraw-tab").style.display = "none";
    document.getElementById("message").innerText = "";
    document.getElementById("tree").innerHTML = "";
    document.getElementById("wallet-section").classList.remove("disconnected");
    walletProvider = document.getElementById("wallet-provider").value;
  }, 500);
}

// تابع گرفتن اطلاعات کاربر
async function fetchUserInfo() {
  if (contract && userAccount) {
    try {
      const user = await contract.getUserInfo(userAccount);
      document.getElementById("user-id").innerText = user.id.toString();
      document.getElementById("user-upline").innerText = user.uplineId.toString();
      document.getElementById("left-count").innerText = user.leftCount.toString();
      document.getElementById("right-count").innerText = user.rightCount.toString();
      document.getElementById("balance-count").innerText = user.balanceCount.toString();
      document.getElementById("saved-balance-count").innerText = user.specialBalanceCount.toString();
    } catch (err) {
      document.getElementById("message").innerText = translations[currentLanguage].errorUserInfo + err.message;
    }
  }
}

// تابع گرفتن اطلاعات ماینر
async function fetchMinerInfo() {
  if (contract && userAccount) {
    try {
      const user = await contract.getUserInfo(userAccount);
      document.getElementById("miner-status").innerText = user.isMiner ? "فعال" : "غیرفعال";
      document.getElementById("miner-rewards").innerText = ethers.utils.formatEther(user.totalMinerRewards) + " MATIC";
    } catch (err) {
      document.getElementById("message").innerText = translations[currentLanguage].errorUserInfo + err.message;
    }
  }
}

// تابع ثبت‌نام
async function register() {
  const uplineCode = document.getElementById("upline-address").value;
  const placeOnLeft = document.querySelector('input[name="place"]:checked').value === "left";

  if (!uplineCode || isNaN(uplineCode)) {
    document.getElementById("message").innerText = translations[currentLanguage].invalidUpline;
    return;
  }

  try {
    const network = await provider.getNetwork();
    if (network.chainId !== 137) {
      document.getElementById("message").innerText = "لطفاً شبکه را به Polygon Mainnet تغییر دهید.";
      return;
    }

    const registrationFee = ethers.utils.parseEther("350");
    const balance = await provider.getBalance(userAccount);
    const gasPrice = ethers.utils.parseUnits("50", "gwei");
    const gasLimit = 2000000;
    const estimatedGasCost = gasPrice.mul(gasLimit);
    const totalRequired = registrationFee.add(estimatedGasCost);

    if (balance.lt(totalRequired)) {
      document.getElementById("message").innerText = "موجودی کافی نیست. حداقل 350 MATIC + هزینه گس نیاز است.";
      return;
    }

    const tx = await contract.register(uplineCode, placeOnLeft, {
      value: registrationFee,
      gasLimit: 2000000,
      gasPrice: gasPrice
    });
    await tx.wait();
    document.getElementById("message").innerText = translations[currentLanguage].successRegister;
    await fetchUserInfo();
    await displayTree();
  } catch (err) {
    document.getElementById("message").innerText = translations[currentLanguage].errorRegister + (err.reason || err.message || "تراکنش رد شد");
  }
}

// تابع نمایش ساختار درختی
async function displayTree() {
  if (!contract || !userAccount) return;

  document.getElementById("tree-tab").style.display = "block";
  const treeDiv = document.getElementById("tree");
  treeDiv.innerHTML = "";

  const userCache = {};

  async function getUserById(userId) {
    if (userId.toString() === "0") return null;
    if (userCache[userId]) return userCache[userId];

    try {
      const userInfo = await contract._getSpecialUserInfoForMigrateToNewFork(userId);
      const user = {
        userAddress: userInfo.userAddress,
        upline: userInfo.upline,
        leftCount: userInfo.leftCount,
        rightCount: userInfo.rightCount,
      };
      userCache[userId] = user;
      return user;
    } catch (err) {
      console.error("Error fetching user by ID:", err);
      return null;
    }
  }

  async function buildBinaryTree(userAddress, depth = 0) {
    if (!userAddress || userAddress === "0x0000000000000000000000000000000000000000") return "";

    try {
      const user = await contract.getUserInfo(userAddress);
      const directs = await contract.getUserDirects(user.id);

      let treeHTML = `<div class="tree-node" style="animation-delay: ${depth * 0.3}s;">`;
      treeHTML += `<span class="node-address">آدرس: ${userAddress}</span><br>`;
      treeHTML += `<span class="node-id">شناسه: ${user.id.toString()}</span><br>`;
      treeHTML += `<span class="node-upline">آپلاین: ${user.uplineId.toString()}</span><br>`;

      const leftUser = await getUserById(directs.leftId);
      const rightUser = await getUserById(directs.rightId);

      treeHTML += `<div class="tree-branch">`;
      treeHTML += `<div class="branch left">`;
      treeHTML += `<span class="branch-label">سمت چپ:</span><br>`;
      treeHTML += await buildBinaryTree(leftUser ? leftUser.userAddress : null, depth + 1);
      treeHTML += `</div>`;

      treeHTML += `<div class="branch right">`;
      treeHTML += `<span class="branch-label">سمت راست:</span><br>`;
      treeHTML += await buildBinaryTree(rightUser ? rightUser.userAddress : null, depth + 1);
      treeHTML += `</div>`;
      treeHTML += `</div>`;

      treeHTML += `</div>`;
      return treeHTML;
    } catch (err) {
      console.error("Error building tree:", err);
      return "";
    }
  }

  try {
    const treeHTML = await buildBinaryTree(userAccount);
    treeDiv.innerHTML = treeHTML || translations[currentLanguage].noTree;
  } catch (err) {
    treeDiv.innerHTML = translations[currentLanguage].errorTree + err.message;
  }
}

// تابع خرید توکن‌های ماینر
async function buyMinerTokens() {
  try {
    const tx = await contract.buyMinerTokens();
    await tx.wait();
    document.getElementById("message").innerText = "موفقیت: توکن‌های ماینر خریداری شد.";
    fetchMinerInfo();
  } catch (err) {
    document.getElementById("message").innerText = "خطا: " + err.message;
  }
}

// تابع برداشت از استخر اصلی
async function withdrawPool() {
  try {
    const tx = await contract.withdrawPool();
    await tx.wait();
    document.getElementById("message").innerText = "موفقیت: برداشت از استخر اصلی انجام شد.";
  } catch (err) {
    document.getElementById("message").innerText = "خطا: " + err.message;
  }
}

// تابع برداشت از استخر ویژه
async function withdrawSpecials() {
  try {
    const tx = await contract.withdrawSpecials();
    await tx.wait();
    document.getElementById("message").innerText = "موفقیت: برداشت از استخر ویژه انجام شد.";
  } catch (err) {
    document.getElementById("message").innerText = "خطا: " + err.message;
  }
}

// بارگذاری اولیه
detectWalletApp();
updateTexts();