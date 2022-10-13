function rps() {
    alert('Welcome to Rock Paper Scissors');
    let keepGoing = true;
    let comp = 0;
    let you = 0;
    while(keepGoing){
        let x = rpsRound();
        switch(x){
            case 'win!':
            you++
                break;
            case 'lose!':
            comp++
        }
        console.log(`score: You:${you}; Computer:${comp}`);
        if (comp == 5){
            keepGoing = false;
            console.log('You lose the best to 5!');
        } else if (you == 5){
            keepGoing = false;
            console.log('You win the best to 5!');
        }
    }
}

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