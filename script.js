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
