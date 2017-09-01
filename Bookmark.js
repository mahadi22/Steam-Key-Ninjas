javascript:
var selection = window.getSelection().toString();

if (selection) {
  location.href = 'https://store.steampowered.com/account/registerkey?key=' + selection;
} else {
  location.href = 'https://store.steampowered.com/account/registerkey?key=' + prompt('Insert Steam Key');
}