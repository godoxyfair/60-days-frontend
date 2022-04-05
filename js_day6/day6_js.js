//принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр.
// n – задается на входе в функцию.
// Для определения каждого n-ного элемента понадобится остаток от деления %.
/* (i + 1) по факту проверяет именно номер элемента, если вам будет так проще понять - зачем вам тут "+1",
 так как по условиям мы проверяем индекс элемента и если мы запустим программу с (i % el === 0),
 то она так и посчитает, что i = 3 подходит под это условие, а str[3] = nnnN, т.е. 4 число. */
const makeItFunny = (text, x) => {
    let i =0;
    let result = '';
    while (i < text.length) {
        if ((i+1) % x !== 0){
            result = result + text[i];
        }else{result = result+ text[i].toUpperCase() }
        i ++;
    }
    return result;
};

console.log(makeItFunny('I like to blalba bla blablablabla lalalala', 5));

//hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву.
const  hasChar = (str,x) => {
    let i = 0;
    let answer = false
//result = '';

    while (i<str.length){
        if (str[i] === x) {
            return true;
            answer = true;
        }
        i++;
    }


    return false;
    return answer;
};
console.log(hasChar('myrmry mryrymry','z'));

//шифр меняем местами две буквы в слове
const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        const nextSymbol = str[i + 1] || '';
        result = `${result}${nextSymbol}${str[i]}`;
    }

    return result;
};
console.log(encrypt('cotic'));

//тоже самое но принцып другой

const encrypt1 = (str) =>{
    let result = '';

    for (let i =0; i < str.length-1; i=i+2){
        result = result + str[i+1]+ str [i];
    }
    if (str.length % 2 === 0){
        return result;
    }else{return result + str[str.length -1]

    }

    return result;
};

console.log(encrypt1('tarampam'));