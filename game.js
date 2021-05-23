let board = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',''];
//pobranie elementu przycisku
const button = document.querySelector("button");
const timer = document.querySelector('#timer');
let cards = document.querySelectorAll("div");
cards = [...cards];
console.log(cards);

let currentTime = 0;
let currentTime2 = 0;
let IsStarted = 0;


//przetasowanie tablicy z numerami
console.log(board);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    return array;
}

// console.log(shuffle(board));
//koniec tasowania

//odliczanie czasu (wrazliwe na multiclick)
function countUp() {
    currentTime++
    timer.textContent = currentTime +' s'
}
//koniec odliczania czasu

//funkcjonalnosc przycisku start/restart
const initialization = function() {
    const startTime = new Date().getTime();
    let countUpTimer = setInterval(countUp,1000)
    shuffle(board);
    console.log(shuffle(board));
    for (let i = 15;i>=0; i--){
        cards[i].textContent = board[i];
    }
}
//koniec dzialania przycisku

//nasluchiwanie na klik
button.addEventListener("click", initialization)