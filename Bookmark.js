javascript:
var selects = window.getSelection().toString();
if (selects) {
	var sel2 = selects.match(/((((?![osuOSU])[a-zA-z1-9]){5}-){2}){1,2}((?![osuOSU])[a-zA-z1-9]){5}$|((?![osuOSU])[a-zA-z1-9]){15}$/g);
	if (sel2 != null){ location.href = 'https://store.steampowered.com/account/registerkey?key=' + selects;
	}
	else { alert('Its not a key.\nBye......♥');}
	}
else {
	keys = prompt('WARNING\nYou will be directed to the activation page and losing this page.\n\nInsert your steam key here...!'); 
	if(keys != null){
		var keys2 = keys.match(/((((?![osuOSU])[a-zA-z1-9]){5}-){2}){1,2}((?![osuOSU])[a-zA-z1-9]){5}$|((?![osuOSU])[a-zA-z1-9]){15}$/g);
		if (keys == '' | keys2 == null){ alert('No Valid Key Detected....!');} 
		if (keys == keys2){ window.location.href = 'https://store.steampowered.com/account/registerkey?key=' + keys; }
	}
	else { alert('Bye......♥');}
}
