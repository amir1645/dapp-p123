/* ... بقیه کد بدون تغییر ... */

// تابع نمایش ساختار درختی باینری با افکت ستاره‌های در حال سقوط
async function displayTree() {
  if (!contract || !userAccount) return;

  document.getElementById("tree-section").style.display = "block";
  const treeDiv = document.getElementById("tree");
  treeDiv.innerHTML = "";

  // آرایه‌ای برای ذخیره کش آدرس‌های کاربران بر اساس ID
  const userAddressCache = {};

  async function getUserAddressById(userId) {
    if (userId.toString() === "0") return "0x0000000000000000000000000000000000000000";
    if (userAddressCache[userId]) return userAddressCache[userId];

    // فرض می‌کنیم قرارداد تابع getUserInfo رو برای گرفتن آدرس کاربر از ID پشتیبانی می‌کنه
    // اگر چنین تابعی وجود نداره، باید یه روش جایگزین پیاده‌سازی بشه
    try {
      const userInfo = await contract.getUserInfoById(userId); // فرضی
      userAddressCache[userId] = userInfo.userAddress;
      return userInfo.userAddress;
    } catch (err) {
      console.error(`Error fetching user address for ID ${userId}:`, err);
      return "0x0000000000000000000000000000000000000000";
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

      // گرفتن آدرس‌های چپ و راست
      const leftAddress = await getUserAddressById(directs.leftId);
      const rightAddress = await getUserAddressById(directs.rightId);

      treeHTML += `<div class="tree-branch left">`;
      treeHTML += `<span class="branch-label">سمت چپ:</span><br>`;
      treeHTML += await buildBinaryTree(leftAddress, depth + 1);
      treeHTML += `</div>`;

      treeHTML += `<div class="tree-branch right">`;
      treeHTML += `<span class="branch-label">سمت راست:</span><br>`;
      treeHTML += await buildBinaryTree(rightAddress, depth + 1);
      treeHTML += `</div>`;

      treeHTML += `</div>`;
      return treeHTML;
    } catch (err) {
      console.error(`Error building tree for address ${userAddress}:`, err);
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

/* ... بقیه کد بدون تغییر ... */