//pobranie elementu przycisku
const button = document.querySelector("button");
const timer = document.querySelector('#timer');

let currentTime = 0;

function countUp() {
    currentTime++
    timer.textContent = currentTime +' s'
}

const initialization = function() {
    console.log('kliknieto')
    let countUpTimer = setInterval(countUp,1000)

}

//nasluchiwanie na klik
button.addEventListener("click", initialization)