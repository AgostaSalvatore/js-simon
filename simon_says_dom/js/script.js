//inizio esercizio
//creo una variabile countdown e la collego all'elemento con id countdown
const countdown = document.getElementById('countdown');
console.log(countdown);

//instructions
const instructions = document.getElementById('instructions');
console.log(instructions);

//list
const list = document.getElementById('number-list');
console.log(list);

//form
const form = document.getElementById('answers-form');

//button
const button = document.querySelector('button');

//random
const random = Math.floor(Math.random() * 50) + 1;

//creo una variabile countdownValue e la inizializzo a 15
let countdownValue = 3; 

const timer = setInterval(() => {
    if (countdownValue >= 0) {
        countdown.innerHTML  = countdownValue; // Mostra il countdown sullo schermo
        countdownValue--;
    } else {
        clearInterval(timer);
        instructions.innerText = 'Indovina i numeri!'; // Mostra le istruzioni
        form.classList.remove('d-none'); // Mostra il form
        countdown.innerHTML = 'Tempo scaduto'; // Mostra il messaggio di fine countdown
    }
}, 1000);

//funzione per la generazione di numeri random

function generateRandomNumbers(min,max) {
    const randomarray = [];
    const arrayLength = 5;
    for(let i = 0; i < arrayLength; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        randomarray.push(random);
    }
}