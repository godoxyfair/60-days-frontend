console.log(5);

function printOne() {
    console.log(1);
}

console.log(9);

function printFour() {
    console.log(4);
}

setTimeout(printSix, 3000)
setTimeout(printOne, 0)
setTimeout(printFour, 0)
setTimeout(printSeven, 2000)

function printSix() {
    console.log(6);
}

function printSeven() {
    console.log(7);
}
function showName(name) {
    return(`Hello, student ` + name + '!');
}

const studentGreeting = setInterval(showName, 3000, "Alex");
clearInterval(studentGreeting);

//anonimus function
const setSettingsVar = function setSettings() {
    return "Settings have saved.";
};

const cats = ["Persian Cats", "Sphynx Cats", "Scottish Fold Cats"];
(function() {
    setTimeout(function () {
        getCatsMeow(cats);
    }, 3000);
}(cats));

//arrow functions
let func1 = (a, b) => a / b + a * b;
let func2 = (c, d) => c + 5 * d / c;
// change the code above this line
let result = 7 - func1(50, 4) / func2(40, 30);