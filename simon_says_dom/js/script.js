//inizio esercizio
//creo una variabile countdown e la collego all'elemento con id countdown
const countdown = document.getElementById('countdown');
console.log(countdown);

const instructions = document.getElementById('instructions');
console.log(instructions);

//list
const list = document.getElementById('number-list');
console.log(list);

//form
const form = document.getElementById('answer-form');

//button
const button = document.querySelector('start-button');


//creo una variabile countdownValue e la inizializzo a 15
let countdownValue = 15; 

const timer = setInterval(() => {
    if (countdownValue > 0) {
        countdown.innerHTML  = countdownValue; // Mostra il countdown sullo schermo
        countdownValue--;
    } else {
        clearInterval(timer);
        countdown.innerHTML = 'Tempo scaduto'; // Mostra il messaggio di fine countdown
    }
}, 1000);

