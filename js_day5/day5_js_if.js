//проверка сходства заданого числа с переданным в функцию
const guessNumber = (number) => {
    const number1 = 42;
    if (number === number1){ //в if передается булево выражение
        return 'You win!';
    }
    return 'Try again!';
};
console.log(guessNumber(23));

//функция обрабатывает ссылку и возвращает ее в правильном формате
const normalizeUrl = (urlAdres) => {
    if (urlAdres.startsWith('https://')){
        return urlAdres;
    } else {
        return 'https://' + urlAdres;
    }
};
console.log(normalizeUrl('https://yandex.ru'));

//выводит тип переданного в функцию предложения
const getTypeOfSentence = (sentence) => {
    const lastChar = sentence[sentence.length - 1];
    let sentenceType;

    if (lastChar === '?') {
        sentenceType = 'question';
    } else if (lastChar === '!') {
        sentenceType = 'exclamation';
    } else {
        sentenceType = 'normal';
    }

    return `Sentence is ${sentenceType}`;
};
console.log(getTypeOfSentence('miy?'));

//функция выводит врагов и друзей из возможных введенных через конструкцию if-else if-else
const whoIsThisHouseToStarks = (lastNameFamily) => {
    if (lastNameFamily === 'Karstark' || lastNameFamily === 'Tally'){
        return 'friend'
    } else if (lastNameFamily === 'Lannister' || lastNameFamily === 'Frey'){
        return 'enemy'
    } else{return 'neutral'}
};
console.log(whoIsThisHouseToStarks('Lannister'));

//тернарный оператор <predicate> ? <expression on true> : <expression on false>
/*const abs = (number) => {
    if (number >= 0) {
        return number;
    }

    return -number;
};
const abs = (number) => {
    return number >= 0 ? number : -number;
};*/

//принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки.
// Если первая буква заглавная, то строка возвращается без изменений.
// Если на вход передана пустая строка, функция должна вернуть пустую строку.
/*const convertText = (stroka) => {
    if (stroka === '') {
        return '';
    } else if (stroka[0] === stroka[0].toUpperCase()){
        return stroka;
    } else if (stroka[0] !== stroka[0].toUpperCase())
    { return reverse(stroka);} //КОД РАБОТАЕТ ТОЛЬКО НА КУРСЕ ФУНКЦИЯ reverse самописная

};
console.log(convertText('may'));*/

//использование контрукции switch case
const getNumberExplanation= (countMind) => {
    let result;

    switch (countMind){
        case 666:
            result ='devil number';
            break;
        case 42:
            result = 'answer for everything';
            break;
        case 7:
            result = 'prime number';
            break;
        default:
            result = null;
    }
    return result;
}
console.log(getNumberExplanation(42));

//вывод чисел в обратном порядке с помощью цикла while
const printNumbers = (initialNumber) => {
    // BEGIN (write your solution here)
    let i =initialNumber;

    while (i>0){
        console.log(i);
        i=i-1;
    }
    console.log ('finished!');
    // END
};
console.log(printNumbers(6));

//в прямом порядке
const printNumbers1 = (lastNumber) => {
    // i сокращение от index (порядковый номер)
    // используется по общему соглашению во множестве языков
    // как счетчик цикла
    let i = 1;

    while (i <= lastNumber) {
        console.log(i);
        i = i + 1;
    }
    console.log('finished!');
};
console.log(printNumbers1(3));

//умножение чисел друг на друга в диапазоне
const multiplyNumbersFromRange = (start,finish) => {
    let i = start;
    let multiplication = 1;

    while (i<=finish){
        multiplication = multiplication * i;
        i = i+1;
    }
    return multiplication;
};
console.log(multiplyNumbersFromRange(2,5));

//прибавление строки к строке в диапазоне
const joinNumbersFromRange = (str,times) => {
    let result ='';
    let i=str;

    while (i<=times) {
        result =`${result}${i}`;
        i = i+1;
    }
    return result;
}
console.log(joinNumbersFromRange(2,2));

//выводит строку в обатном порядке посточно
const printReversedWordBySymbol = (name) =>{
    let i = name.length-1;

    while (i>=0){
        console.log(name[i]);
        i=i-1;
    }
};
printReversedWordBySymbol('мяумяу');

//выводит строку посточно
const printNameBySymbol = (name) => {
    let i = 0;
    // Такая проверка будет выполняться до конца строки
    // включая последний символ. Его индекс `length - 1`.
    while (i < name.length) {
        // Обращаемся к символу по индексу
        console.log(name[i]);
        i = i + 1;
    }
};
const name3 = 'Arya';
printNameBySymbol(name3);

//еще раз вывод строки в обратном порядке но в дургой форме

const reverse = (str) =>{
    let i = str.length-1;
    let result ='';

    while (i>=0){
        result = result + str[i];
        i = i -1;
    }
    return result;
};
console.log(reverse('мама'));

//найдем нужный символ в строчке
const filterString = (str,sumbol) => {
    let i = 0;
    let result = '';

    while (i<str.length) {
        if (str[i] === sumbol.toLowerCase() || str[i] === sumbol.toUpperCase()
            || str[i] === sumbol){
            result=result;
        } else {result = result + str[i]};
        i = i+1;
    }
    return result;
};
console.log(filterString('мяумур','м'));