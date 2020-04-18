/* 22. altERnaTIng cAsE to ALTerNAtiNG CaSe
    >each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
    NOTES:
*/

var item = 'PiPPo';

var funzione = alternateCase(item);
console.log(funzione);

function alternateCase(item) {
    var stringSwitch = '';

    for (var i = 0; i < item.length; i++) {
        if (item[i] == item[i].toLowerCase()) {
            stringSwitch += item[i].toUpperCase();
        } else {
            stringSwitch += item[i].toLowerCase();
        }
    }

    return stringSwitch;
}
