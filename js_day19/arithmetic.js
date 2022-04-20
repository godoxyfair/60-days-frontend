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