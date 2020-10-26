const header = document.querySelector('.headerInput');
const footer = document.querySelector('.footerInput');

const images = document.querySelectorAll('.images')

function print (e) {
    const element = e.target;
    console.log(element.value);
}

header.addEventListener('keyup', renderText('#header'))
footer.addEventListener('keyup', renderText('#footer'))

images.forEach(e => e.addEventListener('click', setSource))

function setSource (e) {
    const memeImage =  document.querySelector('.memeImage')
    memeImage.src = e.target.src
}

function renderText (id) {
    return function (e) {
        const text = e.target.value;
        document.querySelector(id).innerHTML = text;
    }
}
const btn= document.querySelector('button')
btn.addEventListener("click", generateMeme)
function generateMeme (){
    html2canvas(document.querySelector(".meme-container"), {
        useCORS: true, //By passing this option in function Cross origin images will be rendered properly in the downloaded version of the PDF
        allowTaint: true
    })
    .then(canvas => {
        // var img = canvas.toDataURL()
        //    window.open(img);
        document.body.appendChild(canvas)
    });
}


// const lijst = [1,2,3,4,5,6,7]
// const lijstPlus5 = lijst.map(plus5)

// function plus5 (getal) {
//     return getal + 5
// }