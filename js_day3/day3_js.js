
//работа с переменными и константами

console.log(String.fromCharCode(126));//запрос символа по таблице ASCII
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));

// greeting - переводится как приветствие
let greeting1 = 'Father!'; //создание переменной
console.log(greeting1); // => Father!
console.log(greeting1); // => Father!

/* eslint prefer-const: 0 */

// BEGIN (write your solution here)
let motto = 'What Is Dead May Never Die!';
console.log(motto);
// END

let name = 'Brienna'; //изменение переменной
// BEGIN (write your solution here)
name = 'anneirB';
// END
console.log(name);

let eurosCount = 100;

//КАЛЬКУЛЯТОР ЕВРО_ДОЛЛАР_РУБ
// BEGIN (write your solution here)
let dollar = 1.25;
let rubble = 60;
let dollarsCount = eurosCount * dollar;
let rublesCount = dollarsCount * rubble;
console.log(dollarsCount);
console.log(rublesCount);
// END

//ФОРМИРОВАНИЕ АВТОМАТИЧЕСКОГО email
let info = "We couldn't verify you mother's maiden name.";
let intro = 'Here is important information about your account security.\n';

let firstName = 'Joffrey';
let greeting = 'Hello';

// BEGIN (write your solution here)
let title = greeting + ', ' + firstName + '!';
let body = intro + info;
console.log(title);
console.log(body);
// END

const stark = 'Arya';

// BEGIN (write your solution here)
console.log(`Do you want to eat, ${stark}?`);

const firstName1 = 'Joffrey';
const greeting2 = 'Hello';

// Обратите внимание на ограничители строки, это бектики
// Интерполяция не работает с одинарными и двойными кавычками
console.log(`${greeting2}, ${firstName1}!`);
// => 'Hello, Joffrey!'
