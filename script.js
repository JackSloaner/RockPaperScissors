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

function rpsRound(){
    const compChoice = getComputerChoice();
    const userChoice = prompt('R, P, or S');
    let result;
    if (userChoice.toUpperCase() === 'R') {
        if (compChoice === 'Rock') {
            result = 'tie!';
        } else if (compChoice === 'Paper'){
            result = 'lose!';
        } else if (compChoice === 'Scissors'){
            result = 'win!';
        }
        console.log(`${compChoice}! You ${result}`)
    } else if (userChoice.toUpperCase() === 'P') {
        if (compChoice === 'Rock') {
            result = 'win!';
        } else if (compChoice === 'Paper'){
            result = 'tie!';
        } else if (compChoice === 'Scissors'){
            result = 'lose!';
        }
        console.log(`${compChoice}! You ${result}`)
        
    } else if (userChoice.toUpperCase() === 'S'){
        if (compChoice === 'Rock') {
            result = 'lose!';
        } else if (compChoice === 'Paper'){
            result = 'win!';
        } else if (compChoice === 'Scissors'){
            result = 'tie!';
        }
        console.log(`${compChoice}! You ${result}`)
    } else {
        alert('please choose either "R", "P", or "S"');
        rpsRound();
    }
    return result;
}

rps();