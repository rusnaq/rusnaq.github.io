// var chislo;
// var stepen;

var chislo = +prompt('Введите число');
var stepen = +prompt('Введите степень, в которую вы хотите возвести число');

function pow (a, b) {
var result = 1;

for (var i = 0; i < stepen; i++) {
    result = result * chislo;
}

return result;

}

var powResult = pow(chislo, stepen);

alert(chislo + ' в степени ' + stepen + ' = ' + powResult);
