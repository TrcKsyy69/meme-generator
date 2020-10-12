const header = document.querySelector('.headerInput');
const footer = document.querySelector('.footerInput');

function print (e) {
    const element = e.target;
    console.log(element.value);
}

const xs = [header, footer]

function renderHeaderText (e) {
    const text = e.target.value;

    document.querySelector('.textInput #header').innerHTML = text;
}

function renderFooterText (e) {
    const text = e.target.value;

    document.querySelector('.textInput #footer').innerHTML = text;
}

header.addEventListener('keyup', renderHeaderText)
footer.addEventListener('keyup', renderFooterText)

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



