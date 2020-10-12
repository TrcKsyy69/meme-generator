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

document.querySelectorAll('.image')
.forEach(function (e) {
    e.addEventListener('click', renderImage)
})

function renderImage (e) {
    const url = e.target.src;

    console.log(url)

    document.querySelector('.grey').src = url
}