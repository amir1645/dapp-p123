// app.js - منطق اصلی DApp

// متغیرهای گلوبال
let provider = null;
let signer = null;
let contract = null;
let userAccount = null;
let walletProvider = "metamask";
let isInWalletApp = false;
let currentLanguage = 'fa';

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
        adTitle: "تبلیغات",
        adLinkPlaceholder: "لینک تبلیغ",
        adDescPlaceholder: "توضیحات تبلیغ",
        saveAd: "ذخیره تبلیغ",
        successRegister: "موفقیت: ثبت‌نام انجام شد",
        errorConnection: "خطا: ",
        errorRegister: "خطا: ",
        errorUserInfo: "خطا در گرفتن اطلاعات: ",
        errorTree: "خطا در نمایش درخت: ",
        installMetaMask: "لطفاً کیف پول را نصب کنید یا از مرورگر داخلی کیف پول استفاده کنید!",
        invalidUpline: "خطا: آدرس آپلاین نامعتبر است",
        noTree: "درختی برای نمایش وجود ندارد.",
        adRestricted: "فقط سازنده DApp می‌تواند تبلیغ بگذارد!",
        minerActive: "فعال",
        minerInactive: "غیرفعال",
        contributeMiner: "مشارکت در ماینر",
        buyMinerTokens: "خرید توکن ماینر",
        distributeMinerTokens: "توزیع توکن ماینر",
        withdrawPool: "برداشت از استخر",
        withdrawSpecial: "برداشت ویژه",
        manualWithdraw: "برداشت دستی",
        networkError: "لطفاً شبکه را به Polygon Mainnet تغییر دهید.",
        insufficientBalance: "موجودی کافی نیست. حداقل 350 MATIC + هزینه گس نیاز است.",
        transactionRejected: "تراکنش رد شد",
        successContribution: "مشارکت شما در استخر ماینر با موفقیت ثبت شد!",
        successTokenBuy: "خرید توکن ماینر با موفقیت انجام شد!",
        successTokenDistribution: "توزیع توکن ماینر با موفقیت انجام شد!",
        successWithdrawPool: "برداشت از استخر با موفقیت انجام شد!",
        successWithdrawSpecial: "برداشت ویژه با موفقیت انجام شد!",
        featureComingSoon: "این قابلیت به زودی اضافه خواهد شد"
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
        adTitle: "الإعلانات",
        adLinkPlaceholder: "رابط الإعلان",
        adDescPlaceholder: "وصف الإعلان",
        saveAd: "حفظ الإعلان",
        successRegister: "نجاح: تم التسجيل",
        errorConnection: "خطأ: ",
        errorRegister: "خطأ: ",
        errorUserInfo: "خطأ في جلب المعلومات: ",
        errorTree: "خطأ في عرض الشجرة: ",
        installMetaMask: "يرجى تثبيت المحفظة أو استخدام متصفح المحفظة الداخلي!",
        invalidUpline: "خطأ: عنوان الراعي غير صالح",
        noTree: "لا يوجد شجرة للعرض.",
        adRestricted: "فقط مبدع التطبيق يمكنه وضع الإعلانات!",
        minerActive: "نشط",
        minerInactive: "غير نشط",
        contributeMiner: "المساهمة في الماينر",
        buyMinerTokens: "شراء رموز الماينر",
        distributeMinerTokens: "توزيع رموز الماينر",
        withdrawPool: "سحب من البركة",
        withdrawSpecial: "سحب خاص",
        manualWithdraw: "سحب يدوي",
        networkError: "يرجى تبديل الشبكة إلى Polygon Mainnet.",
        insufficientBalance: "الرصيد غير كاف. يلزم 350 MATIC على الأقل + رسوم الغاز.",
        transactionRejected: "تم رفض المعاملة",
        successContribution: "تم تسجيل مساهمتك في بركة الماينر بنجاح!",
        successTokenBuy: "تم شراء رموز الماينر بنجاح!",
        successTokenDistribution: "تم توزيع رموز الماينر بنجاح!",
        successWithdrawPool: "تم السحب من البركة بنجاح!",
        successWithdrawSpecial: "تم السحب الخاص بنجاح!",
        featureComingSoon: "هذه الميزة ستضاف قريباً"
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
        adTitle: "Advertisements",
        adLinkPlaceholder: "Ad Link",
        adDescPlaceholder: "Ad Description",
        saveAd: "Save Ad",
        successRegister: "Success: Registration completed",
        errorConnection: "Error: ",
        errorRegister: "Error: ",
        errorUserInfo: "Error fetching information: ",
        errorTree: "Error displaying tree: ",
        installMetaMask: "Please install a wallet or use the wallet's built-in browser!",
        invalidUpline: "Error: Upline address is invalid",
        noTree: "No tree to display.",
        adRestricted: "Only the DApp creator can add advertisements!",
        minerActive: "Active",
        minerInactive: "Inactive",
        contributeMiner: "Contribute to Miner",
        buyMinerTokens: "Buy Miner Tokens",
        distributeMinerTokens: "Distribute Miner Tokens",
        withdrawPool: "Withdraw from Pool",
        withdrawSpecial: "Special Withdraw",
        manualWithdraw: "Manual Withdraw",
        networkError: "Please switch network to Polygon Mainnet.",
        insufficientBalance: "Insufficient balance. Minimum 350 MATIC + gas fee required.",
        transactionRejected: "Transaction rejected",
        successContribution: "Your contribution to the miner pool has been successfully recorded!",
        successTokenBuy: "Miner token purchase completed successfully!",
        successTokenDistribution: "Miner token distribution completed successfully!",
        successWithdrawPool: "Withdrawal from pool completed successfully!",
        successWithdrawSpecial: "Special withdrawal completed successfully!",
        featureComingSoon: "This feature will be added soon"
    }
};

// تابع تغییر تب‌ها
function switchTab(tabName) {
    // مخفی کردن همه تب‌ها
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // غیرفعال کردن همه تب‌ها
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // نمایش تب انتخاب شده
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // فعال کردن تب انتخاب شده
    document.querySelector(`.tab[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    // اگر تب اطلاعات کاربر است، اطلاعات را به‌روزرسانی کن
    if (tabName === 'user' && contract) {
        fetchUserInfo();
    }
    
    // اگر تب ماینر است، آمار را به‌روزرسانی کن
    if (tabName === 'miner' && contract) {
        updateMinerStats();
    }
    
    // اگر تب برداشت است، اطلاعات را به‌روزرسانی کن
    if (tabName === 'withdraw' && contract) {
        updateWithdrawInfo();
    }
    
    // اگر تب درخت است، درخت را نمایش بده
    if (tabName === 'tree' && contract) {
        displayTree();
    }
}

// تابع تغییر زبان
function changeLanguage() {
    currentLanguage = document.getElementById("language").value;
    updateTexts();
}

// تابع به‌روزرسانی متن‌ها
function updateTexts() {
    const t = translations[currentLanguage];
    document.querySelector(".title").textContent = t.title;
    document.getElementById("connect-btn").innerHTML = `<i class="fas fa-plug"></i> ${t.connect}`;
    document.getElementById("disconnect-btn").innerHTML = `<i class="fas fa-power-off"></i> ${t.disconnect}`;
    
    // به‌روزرسانی عناصر دیگر در صورت نیاز
    const elementsToUpdate = {
        'left-label': t.leftLabel,
        'right-label': t.rightLabel
    };
    
    for (const [id, text] of Object.entries(elementsToUpdate)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }
}

// تابع اتصال به کیف پول
async function connectWallet() {
    if (typeof window.ethers === 'undefined') {
        showMessage(translations[currentLanguage].errorConnection + "ethers.js not loaded.", "error");
        return;
    }

    try {
        // قطع اتصال قبلی اگر وجود دارد
        if (provider && walletProvider === "walletconnect") {
            await provider.provider.disconnect();
        }
        provider = null;
        signer = null;

        walletProvider = document.getElementById("wallet-provider").value;

        if (walletProvider === "metamask") {
            if (!window.ethereum) {
                showMessage(translations[currentLanguage].installMetaMask, "error");
                return;
            }
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
        } else if (walletProvider === "walletconnect") {
            const WalletConnectProvider = window.WalletConnectProvider.default;
            const wcProvider = new WalletConnectProvider({
                infuraId: CONFIG.WALLET_CONNECT.infuraId,
                rpc: {
                    137: "https://polygon-rpc.com",
                },
            });
            provider = new ethers.providers.Web3Provider(wcProvider);
            await provider.send("eth_requestAccounts", []);
        } else if (walletProvider === "coinbase") {
            const CoinbaseWalletSDK = window.CoinbaseWalletSDK;
            if (!CoinbaseWalletSDK) {
                showMessage(translations[currentLanguage].installMetaMask, "error");
                return;
            }
            const coinbaseWallet = new CoinbaseWalletSDK({
                appName: CONFIG.DAPP.name,
                appLogoUrl: "https://yourdomain.com/logo.png",
            });
            provider = new ethers.providers.Web3Provider(coinbaseWallet.makeWeb3Provider());
            await provider.send("eth_requestAccounts", []);
        } else {
            showMessage(translations[currentLanguage].installMetaMask, "error");
            return;
        }

        signer = provider.getSigner();
        userAccount = await signer.getAddress();
        
        // نمایش اطلاعات حساب
        document.getElementById("account").innerText = translations[currentLanguage].account + userAccount;
        document.getElementById("connect-btn").style.display = "none";
        document.getElementById("disconnect-btn").style.display = "inline-flex";
        
        // ایجاد قرارداد
        contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        
        // نمایش دکمه تبلیغات فقط برای سازنده
        document.getElementById("save-ad-btn").style.display = 
            userAccount.toLowerCase() === CONFIG.CREATOR_ADDRESS.toLowerCase() ? "inline-flex" : "none";
        
        // به‌روزرسانی اطلاعات
        await fetchUserInfo();
        await updateMinerStats();
        await updateWithdrawInfo();
        
        showMessage("اتصال با موفقیت برقرار شد!", "success");
        
    } catch (err) {
        console.error("Connection error:", err);
        showMessage(translations[currentLanguage].errorConnection + err.message, "error");
    }
}

// تابع قطع اتصال
function disconnectWallet() {
    try {
        if (provider && walletProvider === "walletconnect") {
            provider.provider.disconnect();
        }
    } catch (err) {
        console.error("Disconnection error:", err);
    } finally {
        provider = null;
        signer = null;
        contract = null;
        userAccount = null;
        
        // بازنشانی UI
        document.getElementById("account").innerText = "";
        document.getElementById("connect-btn").style.display = "inline-flex";
        document.getElementById("disconnect-btn").style.display = "none";
        document.getElementById("save-ad-btn").style.display = "none";
        
        // پاک کردن اطلاعات
        document.getElementById("user-id").textContent = "-";
        document.getElementById("user-upline").textContent = "-";
        document.getElementById("left-count").textContent = "0";
        document.getElementById("right-count").textContent = "0";
        document.getElementById("balance-count").textContent = "0";
        document.getElementById("saved-balance-count").textContent = "0";
        
        showMessage("اتصال قطع شد.", "info");
    }
}

// تابع ثبت‌نام
async function register() {
    if (!contract || !userAccount) {
        showMessage("لطفاً ابتدا به کیف پول متصل شوید.", "error");
        return;
    }

    const uplineCode = document.getElementById("upline-address").value;
    const placeOnLeft = document.querySelector('input[name="place"]:checked').value === "left";

    if (!uplineCode || isNaN(uplineCode)) {
        showMessage(translations[currentLanguage].invalidUpline, "error");
        return;
    }

    try {
        // بررسی شبکه
        const network = await provider.getNetwork();
        if (network.chainId !== 137) {
            showMessage(translations[currentLanguage].networkError, "error");
            return;
        }

        // مقدار ثابت 350 MATIC
        const registrationFee = ethers.utils.parseEther("350");

        // بررسی موجودی
        const balance = await provider.getBalance(userAccount);
        const gasPrice = ethers.utils.parseUnits("50", "gwei");
        const gasLimit = 2000000;
        const estimatedGasCost = gasPrice.mul(gasLimit);
        const totalRequired = registrationFee.add(estimatedGasCost);

        if (balance.lt(totalRequired)) {
            showMessage(translations[currentLanguage].insufficientBalance, "error");
            return;
        }

        // اجرای تراکنش
        const tx = await contract.register(uplineCode, placeOnLeft, {
            value: registrationFee,
            gasLimit: gasLimit,
            gasPrice: gasPrice
        });
        
        showMessage("در حال پردازش تراکنش...", "info");
        await tx.wait();
        
        showMessage(translations[currentLanguage].successRegister, "success");
        await fetchUserInfo();
        
    } catch (err) {
        console.error("Registration error:", err);
        showMessage(translations[currentLanguage].errorRegister + (err.reason || err.message || translations[currentLanguage].transactionRejected), "error");
    }
}

// تابع گرفتن اطلاعات کاربر
async function fetchUserInfo() {
    if (!contract || !userAccount) return;

    try {
        const user = await contract.getUserInfo(userAccount);
        
        // به‌روزرسانی UI
        document.getElementById("user-id").textContent = user.id.toString();
        document.getElementById("user-upline").textContent = user.uplineId.toString();
        document.getElementById("left-count").textContent = user.leftCount.toString();
        document.getElementById("right-count").textContent = user.rightCount.toString();
        document.getElementById("balance-count").textContent = user.balanceCount.toString();
        document.getElementById("saved-balance-count").textContent = user.specialBalanceCount.toString();
        
    } catch (err) {
        console.error("Error fetching user info:", err);
        // اگر کاربر ثبت‌نام نکرده باشد، خطا طبیعی است
        if (!err.message.includes("user not registered")) {
            showMessage(translations[currentLanguage].errorUserInfo + err.message, "error");
        }
    }
}

// تابع نمایش ساختار درختی
async function displayTree() {
    if (!contract || !userAccount) {
        document.getElementById("tree").innerHTML = "<p>لطفاً ابتدا به کیف پول متصل شوید.</p>";
        return;
    }

    const treeDiv = document.getElementById("tree");
    treeDiv.innerHTML = "<p>در حال بارگذاری ساختار درختی...</p>";

    try {
        const user = await contract.getUserInfo(userAccount);
        const treeHTML = await buildBinaryTree(userAccount, 0);
        treeDiv.innerHTML = treeHTML || translations[currentLanguage].noTree;
    } catch (err) {
        console.error("Tree display error:", err);
        treeDiv.innerHTML = translations[currentLanguage].errorTree + err.message;
    }
}

// تابع بازگشتی برای ساخت درخت باینری
async function buildBinaryTree(userAddress, depth = 0) {
    if (!userAddress || userAddress === "0x0000000000000000000000000000000000000000") {
        return "";
    }

    try {
        const user = await contract.getUserInfo(userAddress);
        const directs = await contract.getUserDirects(user.id);
        
        let treeHTML = `<div class="tree-node" style="animation-delay: ${depth * 0.3}s;">`;
        treeHTML += `<div class="node-content">`;
        treeHTML += `<div class="node-address">${userAddress.substring(0, 6)}...${userAddress.substring(38)}</div>`;
        treeHTML += `<div class="node-id">ID: ${user.id.toString()}</div>`;
        treeHTML += `<div class="node-upline">Upline: ${user.uplineId.toString()}</div>`;
        treeHTML += `</div>`;

        treeHTML += `<div class="tree-branch">`;
        
        // سمت چپ
        treeHTML += `<div class="branch">`;
        treeHTML += `<span class="branch-label">${translations[currentLanguage].leftLabel}</span>`;
        const leftUser = directs.leftId.toString() !== "0" ? await getUserAddressById(directs.leftId) : "0x0000000000000000000000000000000000000000";
        treeHTML += await buildBinaryTree(leftUser, depth + 1);
        treeHTML += `</div>`;

        // سمت راست
        treeHTML += `<div class="branch">`;
        treeHTML += `<span class="branch-label">${translations[currentLanguage].rightLabel}</span>`;
        const rightUser = directs.rightId.toString() !== "0" ? await getUserAddressById(directs.rightId) : "0x0000000000000000000000000000000000000000";
        treeHTML += await buildBinaryTree(rightUser, depth + 1);
        treeHTML += `</div>`;

        treeHTML += `</div>`;
        treeHTML += `</div>`;
        
        return treeHTML;
    } catch (err) {
        return `<div class="tree-node">خطا در بارگذاری</div>`;
    }
}

// تابع کمکی برای گرفتن آدرس کاربر بر اساس ID
async function getUserAddressById(userId) {
    try {
        // این تابع در ABI اصلی وجود ندارد، بنابراین از تابع موجود استفاده می‌کنیم
        const user = await contract._getSpecialUserInfoForMigrateToNewFork(userId);
        return user.userAddress;
    } catch (err) {
        return "0x0000000000000000000000000000000000000000";
    }
}

// توابع مربوط به ماینر
async function contributeToMiner() {
    if (!contract || !userAccount) {
        showMessage("لطفاً ابتدا به کیف پول متصل شوید.", "error");
        return;
    }

    try {
        const tx = await contract.contributeToMinerPool({
            value: ethers.utils.parseEther("0.1")
        });
        
        showMessage("در حال پردازش مشارکت...", "info");
        await tx.wait();
        
        showMessage(translations[currentLanguage].successContribution, "success");
        await updateMinerStats();
        
    } catch (err) {
        console.error("Contribution error:", err);
        showMessage("خطا در مشارکت: " + (err.reason || err.message), "error");
    }
}

async function buyMinerTokens() {
    if (!contract || !userAccount) {
        showMessage("لطفاً ابتدا به کیف پول متصل شوید.", "error");
        return;
    }

    try {
        const tx = await contract.buyMinerTokens();
        
        showMessage("در حال پردازش خرید...", "info");
        await tx.wait();
        
        showMessage(translations[currentLanguage].successTokenBuy, "success");
        await updateMinerStats();
        
    } catch (err) {
        console.error("Token buy error:", err);
        showMessage("خطا در خرید توکن: " + (err.reason || err.message), "error");
    }
}

async function distributeMinerTokens() {
    if (!contract || !userAccount) {
        showMessage("لطفاً ابتدا به کیف پول متصل شوید.", "error");
        return;
    }

    try {
        const tx = await contract.distributeMinerTokens();
        
        showMessage("در حال توزیع توکن‌ها...", "info");
        await tx.wait();
        
        showMessage(translations[currentLanguage].successTokenDistribution, "success");
        await updateMinerStats();
        
    } catch (err) {
        console.error("Distribution error:", err);
        showMessage("خطا در توزیع توکن: " + (err.reason || err.message), "error");
    }
}

// تابع به‌روزرسانی آمار ماینر
async function updateMinerStats() {
    if (!contract) return;
    
    try {
        const userInfo = await contract.getUserInfo(userAccount);
        const minerStats = await contract.getMinerStats();
        const poolBalance = await contract.poolBalance();
        const minerPool = await contract.minerTokenPool();
        
        // به‌روزرسانی وضعیت ماینر
        document.getElementById("miner-status").textContent = 
            userInfo.isMiner ? translations[currentLanguage].minerActive : translations[currentLanguage].minerInactive;
        
        // شبیه‌سازی پیشرفت پرداخت (در قرارداد واقعی باید از تابع مناسب استفاده شود)
        const percentage = userInfo.isMiner ? 100 : Math.min(userInfo.balanceCount.toNumber() / 10 * 100, 100);
        document.getElementById("miner-progress").style.width = `${percentage}%`;
        document.getElementById("miner-percentage").textContent = `${Math.round(percentage)}%`;
        
        // به‌روزرسانی آمار
        document.getElementById("eligible-users").textContent = minerStats.networkerCount.toString();
        document.getElementById("miner-count").textContent = minerStats.checkedOutPaidCount.toString();
        document.getElementById("total-miner-rewards").textContent = 
            ethers.utils.formatEther(minerStats.totalRemain || "0");
        document.getElementById("miner-pool-balance").textContent = 
            ethers.utils.formatEther(poolBalance);
            
    } catch (err) {
        console.error("Error updating miner stats:", err);
    }
}

// توابع مربوط به برداشت
async function withdrawPool() {
    if (!contract || !userAccount) {
        showMessage("لطفاً ابتدا به کیف پول متصل شوید.", "error");
        return;
    }

    try {
        const tx = await contract.withdrawPool();
        
        showMessage("در حال پردازش برداشت...", "info");
        await tx.wait();
        
        showMessage(translations[currentLanguage].successWithdrawPool, "success");
        await updateWithdrawInfo();
        
    } catch (err) {
        console.error("Withdraw error:", err);
        showMessage("خطا در برداشت: " + (err.reason || err.message), "error");
    }
}

async function withdrawSpecials() {
    if (!contract || !userAccount) {
        showMessage("لطفاً ابتدا به کیف پول متصل شوید.", "error");
        return;
    }

    try {
        const tx = await contract.withdrawSpecials();
        
        showMessage("در حال پردازش برداشت ویژه...", "info");
        await tx.wait();
        
        showMessage(translations[currentLanguage].successWithdrawSpecial, "success");
        await updateWithdrawInfo();
        
    } catch (err) {
        console.error("Special withdraw error:", err);
        showMessage("خطا در برداشت ویژه: " + (err.reason || err.message), "error");
    }
}

async function manualWithdraw() {
    showMessage(translations[currentLanguage].featureComingSoon, "info");
}

// تابع به‌روزرسانی اطلاعات برداشت
async function updateWithdrawInfo() {
    if (!contract) return;
    
    try {
        const poolBalance = await contract.poolBalance();
        const userInfo = await contract.getUserInfo(userAccount);
        
        document.getElementById("pool-balance").textContent = 
            `${ethers.utils.formatEther(poolBalance)} MATIC`;
        document.getElementById("special-balance").textContent = 
            `${ethers.utils.formatEther(userInfo.specialBalanceCount || "0")} MATIC`;
            
    } catch (err) {
        console.error("Error updating withdraw info:", err);
    }
}

// تابع ذخیره تبلیغ
function saveAd() {
    if (!userAccount || userAccount.toLowerCase() !== CONFIG.CREATOR_ADDRESS.toLowerCase()) {
        showMessage(translations[currentLanguage].adRestricted, "error");
        return;
    }

    const adLink = document.getElementById("ad-link").value;
    const adDesc = document.getElementById("ad-description").value;
    
    if (adLink && adDesc) {
        document.getElementById("ad-display").innerHTML = `
            <div class="ad-item">
                <a href="${adLink}" target="_blank" rel="noopener noreferrer">${adDesc}</a>
            </div>
        `;
        document.getElementById("ad-link").value = "";
        document.getElementById("ad-description").value = "";
        showMessage("تبلیغ با موفقیت ذخیره شد!", "success");
    } else {
        showMessage("لطفاً لینک و توضیحات تبلیغ را وارد کنید.", "error");
    }
}

// تابع نمایش پیام
function showMessage(message, type = "info") {
    const messageEl = document.getElementById("message");
    messageEl.textContent = message;
    messageEl.className = `message ${type}`;
    messageEl.style.display = "block";
    
    // پنهان کردن خودکار پیام پس از 5 ثانیه
    setTimeout(() => {
        messageEl.style.display = "none";
    }, 5000);
}

// بارگذاری اولیه
document.addEventListener('DOMContentLoaded', function() {
    updateTexts();
    
    // بررسی وجود متامسک
    if (typeof window.ethereum !== "undefined") {
        document.getElementById("connect-btn").style.display = "inline-flex";
    } else {
        showMessage(translations[currentLanguage].installMetaMask, "error");
        document.getElementById("connect-btn").style.display = "none";
    }
    
    // رویداد تغییر حساب در متامسک
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function(accounts) {
            if (accounts.length === 0) {
                disconnectWallet();
            } else {
                location.reload();
            }
        });
        
        window.ethereum.on('chainChanged', function() {
            location.reload();
        });
    }
});