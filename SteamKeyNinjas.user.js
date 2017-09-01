// ==UserScript==
// @name         Ninjas
// @namespace    https://github.com/mahadi22/Steam-Key-Ninjas
// @updateURL    https://github.com/mahadi22/Steam-Key-Ninjas/raw/master/SteamKeyNinjas.user.js
// @downloadURL  https://github.com/mahadi22/Steam-Key-Ninjas/raw/master/SteamKeyNinjas.user.js
// @version      0.4b
// @description  Try to be a steam key ninjas!
// @author       adi_a12
// @match        https://store.steampowered.com/account/registerkey*
// @run-at       document-end
// @grant none
// ==/UserScript==

document.getElementById('accept_ssa').click();
if (document.getElementById('product_key').value != '') {
    document.getElementById('register_btn').click();
}

