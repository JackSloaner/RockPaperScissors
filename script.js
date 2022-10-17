const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');

const resultDiv = document.getElementById('Result');
const scoreDiv = document.getElementById('Score');

rock.addEventListener('click', rpsRound);
paper.addEventListener('click', rpsRound);
scissors.addEventListener('click', rpsRound);

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    let choice = '';
    switch(randNum){
        case 0:
            choice = "Rock";
        break;
        case 1:
            choice = "Paper";
        break;
        case 2:
            choice = "Scissors";
    }
    return choice;
}

function rpsRound(e){
    const compChoice = getComputerChoice();
    const userChoice = findUserChoice(e);
    let result;
    if (userChoice.toUpperCase() === 'R') {
        if (compChoice === 'Rock') {
            result = 'tie!';
        } else if (compChoice === 'Paper'){
            result = 'lose!';
            computerScore++;
        } else if (compChoice === 'Scissors'){
            result = 'win!';
            userScore++;
        }
    } else if (userChoice.toUpperCase() === 'P') {
        if (compChoice === 'Rock') {
            result = 'win!';
            userScore++;
        } else if (compChoice === 'Paper'){
            result = 'tie!';
        } else if (compChoice === 'Scissors'){
            result = 'lose!';
            computerScore++;
        }
    } else if (userChoice.toUpperCase() === 'S'){
        if (compChoice === 'Rock') {
            result = 'lose!';
            computerScore++;
        } else if (compChoice === 'Paper'){
            result = 'win!';
            userScore++;
        } else if (compChoice === 'Scissors'){
            result = 'tie!';
        }
    } 
    resultDiv.textContent = `${compChoice}! You ${result}`;
    scoreDiv.textContent = `You: ${userScore} | Computer: ${computerScore}`;
    checkGameOver();
    return result;
}

function findUserChoice(e){
    if (e.target.id === 'Rock'){
        return 'R';
    } else if (e.target.id === 'Paper'){
        return 'P';
    } else {
        return 'S';
    }
}

function checkGameOver(){
    if (userScore === 5){
        userScore = 0;
        computerScore = 0;
        resultMessage(true);
    } else if (computerScore === 5){
        userScore = 0
        computerScore = 0;
        resultMessage(false);
    }
}

function resultMessage(win){
    const resultBox = document.createElement('div');

    resultBox.classList.add('resultBox')
    let result;

    if (win){
        resultBox.classList.add('win');
        result = 'won';
    } else{
        resultBox.classList.add('lose');
        result = 'lost';
    }
    removeAll();
    resultBox.textContent = `You ${result} the best of 5!`;
    const body = document.querySelector('body')
    body.appendChild(resultBox);
    setTimeout(putBack, 3000);
    scoreDiv.textContent = `You: ${userScore} | Computer: ${computerScore}`;
}

function removeAll(){
    const elements = Array.from(document.getElementsByClassName('disappear'))
    elements.forEach(element => {
        element.style.display = 'none';
    });
}

function putBack(){
    resultBox = document.querySelector('.resultBox');
    resultBox.remove();
    const elements = Array.from(document.getElementsByClassName('disappear'))
    elements.forEach(element => {
        element.style.removeProperty('display')
    });
}