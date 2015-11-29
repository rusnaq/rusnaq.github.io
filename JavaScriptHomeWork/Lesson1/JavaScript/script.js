var chislo;
var stepen;

chislo = prompt('Введите число');
stepen = prompt('Введите степень, в которую вы хотите возвести число');

result = Math.pow(chislo, stepen);

alert(chislo + ' в степени ' + stepen + ' = ' + result);
