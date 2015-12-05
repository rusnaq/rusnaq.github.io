var names = [];

for (var i = 0; i < 5; i++) {
  names[i] = prompt("Введите имя пользователя ");
}

console.log(names);

var userName = prompt("Введите свое имя");
var flag = false;

for (var i = 0; i < names.length; i++) {
  if (names[i] === userName) {
    flag = true;
    break;
  }
console.log(i);
}

if (flag){
  alert(userName + " вы успешно вошли");
} else {
  alert("Такого пользователя не существует");
}
