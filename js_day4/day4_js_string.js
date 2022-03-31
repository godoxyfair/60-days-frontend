//сбор слова с помощью интерполяции
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
// BEGIN (write your solution here)
console.log(`${one[2]+two[1]+three[3]+two[4]+two[2]}`);
// END


//функция length() возвращает длину строки
const company1 = 'Apple';
const company2 = 'Samsung';
const comp3 = company1+company2;
// BEGIN (write your solution here)
const result = comp3.length;
console.log(result);
// END

//модуль числа функция Math.abs
const soldiersCount = -2309;
// BEGIN (write your solution here)
console.log(Math.abs(soldiersCount));
// END

//округление числа в большую сторону
const number = 923.2238;
// BEGIN (write your solution here)
console.log(Math.ceil(number));
// END

//округление числа нужной точностью
//const number1 = 10.1234;
// BEGIN (write your solution here)
//const result1 = Math.round( number1,2 );
//console.log(result1);
// END

//большое составное выражение (вывести первую и послежнюю букву фразы)
const text = 'Never forget what you are, for surely the world will not';
// BEGIN (write your solution here)
console.log(`First: ${text[0]}\nLast: ${text[text.length-1]}`);
// END