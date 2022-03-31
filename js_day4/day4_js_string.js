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

console.log((company1+company2).length);
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
//const result1 = Math.round(number1,2 );
//console.log(result1);
// END


//большое составное выражение (вывести первую и послежнюю букву фразы)
const text = 'Never forget what you are, for surely the world will not';
// BEGIN (write your solution here)
console.log(`First: ${text[0]}\nLast: ${text[text.length-1]}`);
// END

// функция называется детерминированной тогда,
// когда для одних и тех же входных параметров она возвращает один и тот же результат
// эта функция недетерминированная
console.log(Math.round(10 * Math.random()));

//метод приведения строки к нижнему регистру
const text1 = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
// BEGIN (write your solution here)
console.log(text1.toLowerCase());

/*С помощью метода slice() получите часть предложения, записанного в константу text,
 c 5 по 15 символы включительно.
 Полученную подстроку обработайте методом .trim()
 и выведите на экран длину итоговой подстроки.*/

const text2 = 'When \t\n you play a \t\n game of thrones you win or you die.';
// BEGIN (write your solution here)
console.log(text2.slice(5,15).trim().length);

