let btnNo = document.querySelector('#no');
let btnChi = document.querySelector('#chi')
let img = document.querySelector('#imagen');
let txtHead = document.querySelector('#head');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const huyo = ()=>{

    let widthView = screen.width;
    let heightView = screen.height;

    let directionTop = getRandomIntInclusive(1,heightView-200);
    let directionLeft = getRandomIntInclusive(1,widthView-200);

    btnNo.style.position = 'absolute';
    btnNo.style.top = `${directionTop}px`;
    btnNo.style.left = `${directionLeft}px`;

}
const love = ()=>{
    img.style.display = 'block';
    txtHead.innerHTML = '💗💗💗💗💗 Yo tambien te amo mucho 💗💗💗💗💗'
    btnNo.style.display = 'none'
}

btnNo.addEventListener('mouseover',huyo);
btnChi.addEventListener('click',love);