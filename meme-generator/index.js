const header = document.querySelector('.headerInput');
const footer = document.querySelector('.footerInput');

function print (e) {
    const element = e.target;
    console.log(element.value);
}

const xs = [header, footer]

header.addEventListener('keyup', print)
footer.addEventListener('keyup', print)

const getallen = [1,2,3,4,5]

function plus5 (n) {
    return n + 5;
}

function min50 (n) {
    return n - 50;
}

function keer (n, m) {
    return n * m;
}

var getal1 = 5;
var getal2 = plus5(20);

// keer(5, 10);
