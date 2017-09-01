javascript:
var keys = window.getSelection().toString();
if (keys) {
  location.href = 'https://store.steampowered.com/account/registerkey?key=' + keys;
} else {
  location.href = 'https://store.steampowered.com/account/registerkey?key=' + prompt('Insert Steam Key');
}