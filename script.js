// Problem: I need to create a way for the end user
// to specify a value, compare that value
// to one randomly generated by the computer, 
// and declare a winner based on that comparison;
// I then need to loop this process so that it 
// repeats 5 times and console.log the result
// of each round, 
// keeping track of wins and losses
// and ultimately declaring a winner

function getComputerChoice () {
    let randomNumber = Math.random(); 
    if(randomNumber < .33) {return 'rock';
}   else if(randomNumber < .66) {return 'paper';
}   else {return 'scissors'}
};


function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
};


function playRound () {
   
    computerSelection = getComputerChoice(); 
    // playerSelection = prompt('What will you choose?', 'Rock, Paper, or Scissors?').toLowerCase();
    let wins = 0; 
    let losses = 0;

    // Don't think I'll need this bit 
    
    // while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    //     playerSelection = prompt('Invalid entry! Please choose rock, paper, or scissors').toLowerCase()
    // };


    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper')
        {return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`}
    else if (playerSelection === computerSelection)
            {return 'It\'s a tie!'}
    else {return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`}
    
}; 




function game () {
    let wins = 0; 
    let losses = 0;
    for (let i = 0; i < 5 && wins < 3 && losses < 3; i++) {
            let result = playRound(); 
            alert(result);
            console.log(result);
            if (result.includes('win')) {console.log(`Wins: ${++wins}`)}
            else if (result.includes('lose')) {console.log(`Losses: ${++losses}`)}
            
        }

     if (wins > losses) {return 'You win the match!'}
     else if (losses > wins) {return 'You lose the match!'}
     else {return 'It\'s a tie!'}
    
};

let matchResult = game(); 

alert(matchResult); 
console.log(matchResult);