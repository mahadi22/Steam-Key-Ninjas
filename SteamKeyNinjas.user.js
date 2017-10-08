// ==UserScript==
// @name         Steam Key Ninjas
// @version      0.5a
// @description  Steam Key Ninjas...! Redeem that key quickly, ON BROWSER....!! ♥
// @namespace    https://github.com/mahadi22/Steam-Key-Ninjas
// @updateURL    https://github.com/mahadi22/Steam-Key-Ninjas/raw/master/SteamKeyNinjas.user.js
// @downloadURL  https://github.com/mahadi22/Steam-Key-Ninjas/raw/master/SteamKeyNinjas.user.js
// @supportURL	 http://steamcommunity.com/profiles/76561198087066156
// @author       adi_a12
// @icon		 data:image/ico;base64,AAABAAEAEBAAAAEAIAAoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8A/wD/AP8A//8AADu2Hhq4mjQq75Y2MfidJibY7gAAdwD/AP8A/wD/AAD//wAA//8AAP//AAD//wAA////AAAEAAAAAP8dCVioSTn53Jdx//G4hP/ztXn/56Rw/7xoWP+5HRev/wAABv8AAAQAAP//AAD//wAA////AAADAAD/Af8NACioTTT8+seV/P7kuvj+0Jv+/r53/v6wU/z+uWHzzXtl/+wZEYUAAAAA/wAABQAA//8A/wD//1UABgAAAAD3USua6KR6/f7t0vb83cH//dCe//69d//8mzX//o0S/f60ZfmmTUHw/wAAFAAAAAAA/wD/AP8A/wAAAAAAAAADy2pK1/uycP7+6tb7/uvW/v/Ll///jhz//34A//16AP/+mCn6xHlg//8HAEsAAAAAAP8A/wD/AP8AAAAA/wAAD8l4XOr+qFn//qBD/P+8ff//lS7//4US//6MHP/+hBD+/pgr9tiNav7/MANkAAAAAAD/AP8A/wD/AAAAAP8AAAbUeVHf/MGN//6gQvv+nkL+/qJJ//+lTv//pU3//Z1B//6zZfjQim7//ygAUwAAAAAA/wD/AP8A//9VAAYAAAAA/XgvovPAmv3+y5T3/r+E///AhP/+vX3//r1+/v66df3+0aT8u2hL8/8AABgAAAAAAP8A/wD/AP//AAADAAAAAP9QADDPg1f8/ubN+f7Wr/7+17L+/9iy//7Tqv/+4cH45a6S//1gHpAAAAAA/wAABQD/AP8A/wD/AAAAAP9mAAUAAAAA/Xcdjuy3lf/++vX4//Hk//7x5f7+8ub7/OXX+8ttO+b/KwAS/wD/A/8AAAIA/wD/AP8A/wAAAAD/AAAB/0AABP9NAArphD7Z/Ojb/Pz+/vv//Pv/+/3++NiUbP//WgNPAAAAAP8AAAUAAAAAAP8A/wD/AP8AAAAAAAAAAP8AAAQAAAAA/3MJPN+baP3++/n6+/7++PPKrv/9fCeiAAAAAP8rAAYAAAAAAAAAAAD/AP8A/wD/AAAAAAAAAAAAAAAA/4AABgAAAAD9hymV99K0//759vjjjUzp/14AE/9VAAP/AAABAAAAAAAAAAAA/wD/AAD//wAAAAAAAAAAAAAAAP8AAAH/Vf8D/0cAEvmucOT1vo///4IbYAAAAAD/ZgAFAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAAAAAAAAAAAAAAA/20kBwAAAAD/oUR/9JhD4wAAAAD/vwAEAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD//wAA//8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AAD//wAA//8AAP//
// @match        https://store.steampowered.com/account/registerkey*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';

// dont forget to update your bookmark script https://github.com/mahadi22/Steam-Key-Ninjas/raw/master/Bookmark.js

document.getElementById('accept_ssa').click();  // automatically tick SSA checkbox, ready to redeem the keys 
if (document.getElementById('product_key').value != '') {  // check if any steam keys carried to this page by scripts
    document.getElementById('register_btn').click();
}

