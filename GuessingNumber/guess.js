let guessinput = document.querySelector('#guessinput');
let submit = document.querySelector('#submit');
let prevNum = document.querySelector('#prevNum');  // 
let count = document.querySelector('#count');
// let form = document.querySelector('form');
let para = document.querySelector('#para');
let startOver = document.querySelector('#resultpara')
let randomNumber = Math.floor(Math.random()*100+1);
let p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;

// form.addEventListener('submit', function(e) {
//     e.preventDefault();   // sunmit nhi krna server ke pass jane se rokta hai

//     let inputval = parseInt(guessinput.value);
//     console.log(inputval);
//     const random = Math.floor(Math.random()*100+1);
//     console.log(random);
//     if (inputval === random) {
//         // console.log(`You guessed it right ${random}`);
//         para.innerHTML = `You guessed it right ${random}`;
//     }
//     else if (inputval > random) {
//         para.innerHTML = `Lower number please`;
//     }
//     else {
//         para.innerHTML = `Higher number please`;
//     }
// })

if (playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(guessinput.value);
        console.log(guess); 
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please enter the number less than 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
       }
       else {
        displayGuess(guess);
        checkGuess(guess);
       }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right')
        endGame()
    }
    else if (guess > randomNumber) {
        displayMessage('Please enter lower number')
    }
    else if (guess < randomNumber) {
        displayMessage(`Please enter higher number`)
    }
}

function displayGuess(guess) {
    guessinput.value = ''
    prevNum.innerHTML += `[${guess}], `;
    numGuess++;
    count.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    para.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', function(e) {
        randomNumber = Math.floor(Math.random()*100+1);
        prevGuess = []
        numGuess = 1;
        prevNum.innerHTML = '';
        count.innerHTML = `${11 - numGuess}`
        guessinput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = 'true';
    })
}

function endGame() {
    guessinput.value = '';
    guessinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}