let b = document.querySelector('.window');

let d = document.querySelector('.hamburger');

let c = document.getElementById("closeNavig");
let k = document.getElementById("mobNavig");

function mypPopClick(){
    b.style.visibility = 'visible';
    b.style.opacity = '1';
    b.style.transition = 'all 0.7s ease-out 0s';
}
function mypPopClose(){
    b.style.visibility = 'hidden';
    b.style.opacity = '0';
}

function menuClick() {
    d.style.display = 'flex';
    k.style.display = 'none';
    c.style.display = 'flex';
}

function menuClose() {
    c.style.display = 'none';
    d.style.display = 'none';
}