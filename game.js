let board = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',''];
//pobranie elementu przycisku
const button = document.querySelector("button");
const timer = document.querySelector('#timer');
let cards = document.querySelectorAll("div");
cards = [...cards];
// console.log(cards);

let currentTime = 0;
let IsStarted = 0;

//przetasowanie tablicy z numerami
// console.log(board);
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

    if(cards[0].textContent==="1" &&
    cards[1].textContent==="2" &&
    cards[2].textContent==="3" &&
    cards[3].textContent==="4" &&
    cards[4].textContent==="5" &&
    cards[5].textContent==="6" &&
    cards[6].textContent==="7" &&
    cards[7].textContent==="8" &&
    cards[8].textContent==="9" &&
    cards[9].textContent==="10" &&
    cards[10].textContent==="11" &&
    cards[11].textContent==="12" &&
    cards[12].textContent==="13" &&
    cards[13].textContent==="14" &&
    cards[14].textContent==="15"){
        const endTime = new Date().getTime();
        const gameTime = startTime-endTime/1000
        alert(`Wygrana! Twój czas gry ${gameTime}`)
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
    // console.log(shuffle(board));
    for (let i = 15;i>=0; i--){
        cards[i].textContent = board[i];
    }
    //ustawianie koloru tla dla square
    displayBGC();
    IsStarted = 1;
    console.log(IsStarted)
    return IsStarted=1;
}
//koniec dzialania przycisku
console.log(IsStarted)
//funkcjonalnosci divow
const gameNotStarted = function() {
    alert('Game not started!')
}

const cornerCase0 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[1].textContent === ""){
            cards[1].textContent = cards[0].textContent
            cards[0].textContent = ""
        } 
        else if(cards[4].textContent === ""){
            cards[4].textContent = cards[0].textContent
            cards[0].textContent = ""
        }
        displayBGC();
    }
}
const cornerCase3 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[2].textContent === ""){
            cards[2].textContent = cards[3].textContent
            cards[3].textContent = ""
        } 
        else if(cards[7].textContent === ""){
            cards[7].textContent = cards[3].textContent
            cards[3].textContent = ""
        }
        displayBGC();
    }
}
const cornerCase12 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[8].textContent === ""){
            cards[8].textContent = cards[12].textContent
            cards[12].textContent = ""
        } 
        else if(cards[13].textContent === ""){
            cards[13].textContent = cards[12].textContent
            cards[12].textContent = ""
        }
        displayBGC();
    }
}
const cornerCase15 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[11].textContent === ""){
            cards[11].textContent = cards[15].textContent
            cards[15].textContent = ""
            } 
        else if(cards[14].textContent === ""){
            cards[14].textContent = cards[15].textContent
            cards[15].textContent = ""
            }
        displayBGC();
        }
}

const edgeCase1 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[0].textContent === "") {
            cards[0].textContent = cards[1].textContent
            cards[1].textContent = ""
        } 
        else if(cards[2].textContent === "") {
            cards[2].textContent = cards[1].textContent
            cards[1].textContent = ""
        }
        else if(cards[5].textContent === ""){
            cards[5].textContent = cards[1].textContent
            cards[1].textContent = ""
        }
        displayBGC();
    }
    }
const edgeCase2 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[1].textContent === "") {
            cards[1].textContent = cards[2].textContent
            cards[2].textContent = ""
        } 
        else if(cards[3].textContent === "") {
            cards[3].textContent = cards[2].textContent
            cards[2].textContent = ""
        }
        else if(cards[6].textContent === ""){
            cards[6].textContent = cards[2].textContent
            cards[2].textContent = ""
        }
        displayBGC();
    }
}
const edgeCase4 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[0].textContent === "") {
            cards[0].textContent = cards[4].textContent
            cards[4].textContent = ""
        } 
        else if(cards[5].textContent === "") {
            cards[5].textContent = cards[4].textContent
            cards[4].textContent = ""
        }
        else if(cards[8].textContent === ""){
            cards[8].textContent = cards[4].textContent
            cards[4].textContent = ""
        }
        displayBGC();
    }
}
const edgeCase7 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[3].textContent === "") {
            cards[3].textContent = cards[7].textContent
            cards[7].textContent = ""
        } 
        else if(cards[6].textContent === "") {
            cards[6].textContent = cards[7].textContent
            cards[7].textContent = ""
        }
        else if(cards[11].textContent === ""){
            cards[11].textContent = cards[7].textContent
            cards[7].textContent = ""
        }
        displayBGC();
    }
}
const edgeCase8 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[4].textContent === "") {
            cards[4].textContent = cards[8].textContent
            cards[8].textContent = ""
        } 
        else if(cards[9].textContent === "") {
            cards[9].textContent = cards[8].textContent
            cards[8].textContent = ""
        }
        else if(cards[12].textContent === ""){
            cards[12].textContent = cards[8].textContent
            cards[8].textContent = ""
        }
        displayBGC();
    }
}
const edgeCase11 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[7].textContent === "") {
            cards[7].textContent = cards[11].textContent
            cards[11].textContent = ""
        } 
        else if(cards[10].textContent === "") {
            cards[10].textContent = cards[11].textContent
            cards[11].textContent = ""
        }
        else if(cards[15].textContent === ""){
            cards[15].textContent = cards[11].textContent
            cards[11].textContent = ""
        }
        displayBGC();
    }
}
const edgeCase13 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[12].textContent === "") {
            cards[12].textContent = cards[13].textContent
            cards[13].textContent = ""
        } 
        else if(cards[9].textContent === "") {
            cards[9].textContent = cards[13].textContent
            cards[13].textContent = ""
        }
        else if(cards[14].textContent === ""){
            cards[14].textContent = cards[13].textContent
            cards[13].textContent = ""
        }
        displayBGC();
    }
}
const edgeCase14 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[13].textContent === "") {
            cards[13].textContent = cards[14].textContent
            cards[14].textContent = ""
        } 
        else if(cards[10].textContent === "") {
            cards[10].textContent = cards[14].textContent
            cards[14].textContent = ""
        }
        else if(cards[15].textContent === ""){
            cards[15].textContent = cards[14].textContent
            cards[14].textContent = ""
        }
        displayBGC();
    }
}

const middleCase5 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[1].textContent === ""){
            cards[1].textContent = cards[5].textContent
            cards[5].textContent = ""
        } 
        else if (cards[4].textContent === ""){
            cards[4].textContent = cards[5].textContent
            cards[5].textContent = ""
        }
        else if (cards[9].textContent === ""){
            cards[9].textContent = cards[5].textContent
            cards[5].textContent = ""
        }
        else if (cards[6].textContent === ""){
            cards[6].textContent = cards[5].textContent
            cards[5].textContent = ""
        }
        displayBGC();
    }
}
const middleCase6 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[2].textContent === ""){
            cards[2].textContent = cards[6].textContent
            cards[6].textContent = ""
        } 
        else if(cards[7].textContent === ""){
            cards[7].textContent = cards[6].textContent
            cards[6].textContent = ""
        }
        else if(cards[10].textContent === ""){
            cards[10].textContent = cards[6].textContent
            cards[6].textContent = ""
        }
        else if(cards[5].textContent === ""){
            cards[5].textContent = cards[6].textContent
            cards[6].textContent = ""
        }
    displayBGC();
    }
}
const middleCase9 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[8].textContent === ""){
            cards[8].textContent = cards[9].textContent
            cards[9].textContent = ""
        } 
        else if(cards[13].textContent === ""){
            cards[13].textContent = cards[9].textContent
            cards[9].textContent = ""
        }
        else if(cards[10].textContent === ""){
            cards[10].textContent = cards[9].textContent
            cards[9].textContent = ""
        }
        else if(cards[5].textContent === ""){
            cards[5].textContent = cards[9].textContent
            cards[9].textContent = ""
        }
    displayBGC();
    }
}
const middleCase10 = function() {
    if(IsStarted===0){
        gameNotStarted()
    }
    else{
        if(cards[11].textContent === ""){
            cards[11].textContent = cards[10].textContent
            cards[10].textContent = ""
            } 
        else if(cards[14].textContent === ""){
            cards[14].textContent = cards[10].textContent
            cards[10].textContent = ""
            }
        else if(cards[9].textContent === ""){
            cards[9].textContent = cards[10].textContent
            cards[10].textContent = ""
            }
        else if(cards[6].textContent === ""){
            cards[6].textContent = cards[10].textContent
            cards[10].textContent = ""
            }
        displayBGC();
    }
}
//koniec divow

//nasluchiwanie na klik
button.addEventListener("click", initialization)

cards[0].addEventListener('click',cornerCase0)
cards[1].addEventListener('click',edgeCase1)
cards[2].addEventListener('click',edgeCase2)
cards[3].addEventListener('click',cornerCase3)
cards[4].addEventListener('click',edgeCase4)
cards[5].addEventListener('click',middleCase5)
cards[6].addEventListener('click',middleCase6)
cards[7].addEventListener('click',edgeCase7)
cards[8].addEventListener('click',edgeCase8)
cards[9].addEventListener('click',middleCase9)
cards[10].addEventListener('click',middleCase10)
cards[11].addEventListener('click',edgeCase11)
cards[12].addEventListener('click',cornerCase12)
cards[13].addEventListener('click',edgeCase13)
cards[14].addEventListener('click',edgeCase14)
cards[15].addEventListener('click',cornerCase15)
