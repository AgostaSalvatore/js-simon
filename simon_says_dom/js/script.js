//inizio esercizio
//creo una variabile countdown e la collego all'elemento con id countdown
const countdown = document.getElementById('countdown');
console.log(countdown);

//instructions
const instructions = document.getElementById('instructions');
console.log(instructions);

//list
const list = document.getElementById('numbers-list');
console.log(list);

//form
const form = document.getElementById('answers-form');

//button
const button = document.querySelector('button');

//random
const random = Math.floor(Math.random() * 50) + 1;

//creo una variabile countdownValue e la inizializzo a 15
let countdownValue = 10; 

countdown.innerHTML = countdownValue; // Mostra il countdown sullo schermo

const timer = setInterval(() => {
    if (countdownValue >= 0) { // Se il countdown è maggiore o uguale a 0
        countdown.innerHTML  = countdownValue; // Mostra il countdown sullo schermo
        countdownValue--; // Decrementa il countdown
    } else {
        clearInterval(timer);
        instructions.innerText = 'Indovina i numeri!'; // Mostra le istruzioni
        form.classList.remove('d-none'); // Mostra il form
        list.classList.add('d-none'); // Nasconde la lista
        countdown.innerHTML = 'Tempo scaduto'; // Mostra il messaggio di fine countdown
    }
}, 1000);

//funzione per la generazione di numeri random

function generateRandomNumbers(min,max) {
    const randomArray = [];
    // const arrayLength = 5;
    // for(let i = 0; i < arrayLength; i++) {
    //     let random = Math.floor(Math.random() * (max - min + 1) + min);
    //     randomArray.push(random);
    // }
    while(randomArray.length < 5) { //fino a quando l'array non ha 5 elementi
        const num = Math.floor(Math.random() * (max - min + 1) + min); //genero un numero random
        //se l'array non contiene il numero, lo aggiungo
        if(!randomArray.includes(num)) { //se il numero non è già presente nell'array
            randomArray.push(num); //lo aggiungo all'array
        }
    }
    return randomArray;
}

const numbers = generateRandomNumbers(1, 50);
console.log(numbers);


//creo una lista di numeri random
for(let i = 0; i<numbers.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = numbers[i];
    list.appendChild(listItem);
}

//evento bottone
button.addEventListener('click', (event) => { // Quando il bottone viene cliccato
    event.preventDefault(); // Previeni il comportamento di default del form
    const userNumbers = []; // Array per i numeri inseriti dall'utente
    const inputs = form.querySelectorAll('input'); // Seleziona tutti gli input del form

    inputs.forEach(input => { //Per ogni input
        const userNumber = parseInt(input.value); // Prendi il valore dell'input e trasformalo in numero
        if (!isNaN(userNumber)) { // Se il numero non è NaN
            userNumbers.push(userNumber); // Aggiungilo all'array
        }
    });

    const correctGuesses = userNumbers.filter(num => numbers.includes(num));

    instructions.innerText = `Hai indovinato ${correctGuesses.length} numeri: ${correctGuesses.join(', ')}`;
    form.classList.add('d-none'); // Nasconde il form
});


