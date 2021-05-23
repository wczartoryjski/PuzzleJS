let board = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',''];
//pobranie elementu przycisku
const button = document.querySelector("button");
const timer = document.querySelector('#timer');
let cards = document.querySelectorAll("div");
cards = [...cards];
console.log(cards);

let currentTime = 0;
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
function countUp(startTime) {
    currentTime++
    timer.textContent = currentTime +' s'
}
//koniec odliczania czasu

//ustawianie koloru tla
function displayBGC() {
    for (let i = 0;i<=15; i++){
        if (cards[i].textContent == i+1) {
            cards[i].className = 'correct'
        }
        else if(cards[i].textContent == "") {
            cards[i].className = 'empty'
        }
        else{
            cards[i].className = 'square' 
        }
    }
}
//

//funkcjonalnosc przycisku start/restart
const initialization = function() {
    const startTime = new Date().getTime();
    let countUpTimer = setInterval(countUp,1000)
    if (currentTime!==0){
        clearTimeout(countUpTimer)
        currentTime=0
    }
    shuffle(board);
    console.log(shuffle(board));
    for (let i = 15;i>=0; i--){
        cards[i].textContent = board[i];
    }
    //ustawianie koloru tla dla square
    displayBGC();
}
//koniec dzialania przycisku

//nasluchiwanie na klik
button.addEventListener("click", initialization)