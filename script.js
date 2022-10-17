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
        resultDiv.textContent = `${compChoice}! You ${result}`;
        scoreDiv.textContent = `You: ${userScore} | Computer: ${computerScore}`;
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
        resultDiv.textContent = `${compChoice}! You ${result}`
        scoreDiv.textContent = `You: ${userScore} | Computer: ${computerScore}`;
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
        resultDiv.textContent = `${compChoice}! You ${result}`
        scoreDiv.textContent = `You: ${userScore} | Computer: ${computerScore}`;
    } 
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

