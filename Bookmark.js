javascript:
var keys = prompt('Insert steam key here!');
if (keys != null){
	if (keys != ''){
		window.location.href = 'https://store.steampowered.com/account/registerkey?key=' + keys;
	}
}