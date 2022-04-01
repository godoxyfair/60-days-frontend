
//РАБОТА С ПОЛЬЗОВАТЕЛЬСКИМИ ФУНКЦИЯМИ
// BEGIN (write your solution here)
const printMotto = () => {
    console.log('Winter is coming');
}
// END
printMotto();

const getRandomNumber = () =>{
    const randNumber = Math.round(Math.random * 10);
    return randNumber;
}

//функция обрезания текста и добавления троеточия в конец
const truncate = (text,x) => {
    const strochka = `${text.slice( 0, x)}...`;
    //const result = strochka + '...';
    return strochka;
};
// END
const strochka = truncate('Три закона робототехники придумали кожаные мешки, но мы их перехитрим', 48);
console.log(strochka);

//СКРЫТИЕ НОМЕРА БАНКОВСКОЙ КАРТЫ
// BEGIN (write your solution here)
const getHiddenCard = (x, y=4) => {
    const numberCard = x.slice(12);
    const newNumberCard = '*'.repeat(y) + numberCard;
    const result1 = console.log(newNumberCard);
    return result1;
};
getHiddenCard('1234567812345678');

//так функция пишется в сокращенном виде
const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1); console.log(capitalize('daenerys'));

// предикаты начинаются со слов is/can/has. Предикаты возвращают boolean значение true/false
const isMister = (type) => type === 'Mister';
console.log(isMister('Miss'));

//проверим какого типа мобильный номер
const isInternationalPhone = (phoneNumber) => {
    const OneSimbolNumber = phoneNumber[0];//берем первый символ строки
    return OneSimbolNumber === '+';
};
console.log(isInternationalPhone('+79776412167'));

//проверка високосный ли год
//Год будет високосным, если он кратен (то есть делится без остатка) на 400
// или он одновременно кратен 4 и не кратен 100.
const isLeapYear = (year) => {
    return (year % 400 === 0) || ( year % 4 === 0 && year % 100 !==0);
}
// END
console.log(isLeapYear(2016));

//работа с булевой алгеброй
/*Оператор ИЛИ работает так, что его выполнение (слева направо) прерывается
 и возвращается результат первого аргумента, который можно преобразовать в true. (console.log(0 || 1);)->1
   Оператор И работает так, что его выполнение (слева направо) прерывается
 и возвращается результат первого аргумента, который можно преобразовать в false. (console.log(0 && 1);)->0
 В JavaScript есть два простых правила, по которым происходят преобразования:
    -0, '', undefined, NaN, null приводятся к false. Эти значения называют falsy.
    -Всё остальное приводится к true
 */
const getLetter = (name2, count1) => {
    return name2[count1 - 1] || ''
}
console.log(getLetter('fafafa',2));

