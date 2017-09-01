javascript: 
var keys = prompt('WARNING\nYou will be directed to the activation page and losing this page.\n\nInsert your steam key here...!');
if (keys != null){
	if (keys == ''){alert('No string detected....!');}
	if (keys != ''){
	window.location.href = 'https://store.steampowered.com/account/registerkey?key=' + keys;
	}
}
else alert('Bye......♥');