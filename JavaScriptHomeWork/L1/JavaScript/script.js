var number = +prompt('Введите число');
var exponent = +prompt('Введите степень, в которую вы хотите возвести число');

function pow(a, b) {
    var result = 1;

    for (var i = 0; i < exponent; i++) {
        result = result * number;
    }

    return result;

}

var powResult = pow(number, exponent);

alert(number + ' в степени ' + exponent + ' = ' + powResult);
