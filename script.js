// // Problem: I need to create a way for the end user
// // to specify a value, compare that value
// // to one randomly generated by the computer, 
// // and declare a winner based on that comparison;
// // I then need to loop this process so that it 
// // repeats 5 times and console.log the result
// // of each round, 
// // keeping track of wins and losses
// // and ultimately declaring a winner




// function capitalize (string) {
//     return string.charAt(0).toUpperCase() + string.slice(1)
// };


// function playRound () {
   
//     computerSelection = getComputerChoice(); 
//     // playerSelection = prompt('What will you choose?', 'Rock, Paper, or Scissors?').toLowerCase();
//     let wins = 0; 
//     let losses = 0;

//     // Don't think I'll need this bit 
    
//     // while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
//     //     playerSelection = prompt('Invalid entry! Please choose rock, paper, or scissors').toLowerCase()
//     // };


//     if (playerSelection === 'rock' && computerSelection === 'scissors' ||
//         playerSelection === 'paper' && computerSelection === 'rock' ||
//         playerSelection === 'scissors' && computerSelection === 'paper')
//         {return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`}
//     else if (playerSelection === computerSelection)
//             {return 'It\'s a tie!'}
//     else {return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`}
    
// }; 




// function game () {
//     let wins = 0; 
//     let losses = 0;
//     for (let i = 0; i < 5 && wins < 3 && losses < 3; i++) {
//             let result = playRound(); 
//             alert(result);
//             console.log(result);
//             if (result.includes('win')) {console.log(`Wins: ${++wins}`)}
//             else if (result.includes('lose')) {console.log(`Losses: ${++losses}`)}
            
//         }

//      if (wins > losses) {return 'You win the match!'}
//      else if (losses > wins) {return 'You lose the match!'}
//      else {return 'It\'s a tie!'}
    
// };

// let matchResult = game(); 

// alert(matchResult); 
// console.log(matchResult);

// Get elements

const playerWeapons = document.querySelectorAll('.player .weapon');
const computerWeapons = document.querySelectorAll('.computer .weapon');
const selectionSection = document.querySelector('.top');
const playerArsenal = document.querySelector('.player.arsenal'); 
const centerSection = document.querySelector('.section.middle');
const startText = ["ROCK", "PAPER", "SCISSORS", "SHOOT"]; 
let computerChoice; 
let computerWeaponImage;
let playerWeapon;
let outcomeText;
let computerScore = 0; 
let playerScore = 0;
let outcome;
const playerScoreDisplay = document.querySelector('.player .current-score'); 
const computerScoreDisplay = document.querySelector('.computer .current-score');
playerScoreDisplay.textContent = `${playerScore}`; 
computerScoreDisplay.textContent = `${computerScore}`;

// Add eventListeners

playerWeapons.forEach(weapon => {weapon.addEventListener('click',  selectWeapon)
});

// function: disable hover effect on click, get computer choice, and trigger next step
function selectWeapon (e) {
  playerWeapon = e.target; 
  playerArsenal.classList.add('no-hover');
  playerWeapons.forEach(weapon => {weapon.classList.add('no-hover')});
  playerWeapons.forEach(weapon => {weapon.removeEventListener('click', selectWeapon)}); 
  startText.forEach((word, index) => {
    setTimeout(() => {slapDown(word, index)}, index * 1000);
  })
  getComputerChoice();
}

// function: get computer choice
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) +1; 
    if(randomNumber === 1) {computerChoice = 'rock';
}   else if(randomNumber === 2) {computerChoice = 'paper';
}   else {computerChoice = 'scissors'}; 
    computerWeaponImage = document.querySelector(`.computer .weapon[data-weapon="${computerChoice}"]`)
};


// function: display and animate startText
function slapDown(string, index) {
  const word = document.createElement('span'); // create a new word element for each word
  word.textContent = string;
  word.style.position = 'fixed'; 
  word.style.top = '50%'; 
  word.style.left = '51%';
  word.style.transform = 'translate(-50%, -50%)';
  word.style.webkitTextStroke = '2.5px black';
  centerSection.appendChild(word);
  if (string === "SHOOT") {
    word.style.animation = 'shoot .75s ease-in-out forwards'; 
  } else {
    word.style.animation = 'fadeout .75s ease-in-out forwards'; 
  }
  word.addEventListener("animationend", squareUp);
}

// function: move player weapon and computer weapon into battle position
function squareUp (e) {
  if (e.animationName === "shoot") {
    // Calculate the final position of the element
    const playerDestX = 48; // 50% from the left of the screen
    const playerDestY = 22.5; // 50% from the top of the screen
    const computerDestX = 48;
    const computerDestY = 65.5;;

    // Calculate the starting position of the elements dynamically
    const playerRect = playerWeapon.getBoundingClientRect();
    const computerRect = computerWeaponImage.getBoundingClientRect();
    const playerStartX = playerRect.left;
    const playerStartY = playerRect.top;
    const computerStartX = computerRect.left; 
    const computerStartY = computerRect.top;

    // Calculate the distance that the element needs to travel
    const playerDistanceX = (window.innerWidth * playerDestX / 100) - playerStartX; 
    const playerDistanceY = (window.innerHeight * playerDestY / 100) - playerStartY;

    const computerDistanceX = (window.innerWidth * computerDestX / 100) - computerStartX; 
    const computerDistanceY = (window.innerHeight * computerDestY / 100) - computerStartY;

    // Use CSS to animate the movement of the element
    playerWeapon.style.transform = `translate(${playerDistanceX}px, ${playerDistanceY}px) scale(1.5)`; 
    computerWeaponImage.style.transform = `translate(${computerDistanceX}px, ${computerDistanceY}px) scale(1.5)`;

    playerWeapon.addEventListener('transitionend', displayOutcome) 
  };
};

function displayOutcome () {
  setTimeout (() => {
  const outcomeText = document.createElement('span');
  outcomeText.style.position = 'fixed'; 
  outcomeText.style.top = '50%'; 
  outcomeText.style.left = '51%';
  outcomeText.style.transform = 'translate(-50%, -50%)';
  centerSection.appendChild(outcomeText);
  if (playerWeapon.dataset.weapon === 'rock' && computerChoice === 'scissors' ||
      playerWeapon.dataset.weapon === 'paper' && computerChoice === 'rock' ||
      playerWeapon.dataset.weapon === 'scissors' && computerChoice === 'paper')
      {outcomeText.textContent = 'VICTORY'; 
      outcomeText.style.color = 'green';
      outcomeText.style.textShadow = '0 0 20px rgba(0,255,0,.7)'}
  else if (playerWeapon.dataset.weapon === computerChoice) 
      {outcomeText.textContent = 'TIE';
      outcomeText.style.color = 'yellow';
      outcomeText.style.textShadow = '0 0 20px rgba(255,255,0,.7)'}
  else {outcomeText.textContent = 'DEFEAT'; 
        outcomeText.style.color = 'firebrick';
        outcomeText.style.textShadow = '0 0 20px rgba(178,34,34,.7)'}
  outcomeText.style.animation = 'fadein .75s ease-in-out forwards';
  outcomeText.style.marginTop = '-5px';
  outcomeText.style.webkitTextStroke = "3px black"; 
  outcome = outcomeText.textContent; 
  outcomeText.addEventListener('animationend', keepScore);
  }, 750);
  
};

function keepScore() {
  setTimeout (() => {
  if (outcome == 'TIE') {return}
  else if (outcome == 'VICTORY') {++playerScore}
  else {++computerScore};
  playerScoreDisplay.textContent = `${playerScore}`; 
  computerScoreDisplay.textContent = `${computerScore}`;
}, 750)
}




  // if (playerSelection === 'rock' && computerSelection === 'scissors' ||
  //       playerSelection === 'paper' && computerSelection === 'rock' ||
  //       playerSelection === 'scissors' && computerSelection === 'paper')
  //       {return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`}
  //   else if (playerSelection === computerSelection)
  //           {return 'It\'s a tie!'}
  //   else {return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`}



// function selectWeapon (e) {
//     selection = e.target; 
//     playerArsenal.classList.add('no-hover');
//     playerWeapons.forEach(weapon => {weapon.classList.add('no-hover')});
//     playerWeapons.forEach(weapon => {weapon.removeEventListener('click', selectWeapon)}); 
//     console.log(selection);
//     startText.forEach((word, index) => {
//         setTimeout(() => {slapDown(word, index)}, index * 1000);
//     });
// }
// ;

// slapDown = function (string, index) { 
//     const word = document.createElement('span'); 
//     word.textContent = '';
//     word.textContent = string;
//     word.style.position = 'fixed'; 
//     word.style.top = '50%'; px
//     word.style.left = '50%';
//     word.style.transform = 'translate(-50%, -50%)';
//     word.style.opacity = 0; 
//     centerSection.appendChild(word);
//     word.style.animation = 'fadeout .75s ease-in-out forwards'; 
//     }; 


 


// function rochambeau () {
//     let rockpaperscissors = ["ROCK", "PAPER", "SCISSORS", "SHOOT"]; 
//     let letter = document.createElement("span");
//     for (i = 0; i < 3; i++) {
//         for (x = 0; x < rockpaperscissors[i].length; x++) {
//             let displayedWord = rockpaperscissors[i];
//             letter.textContent = displayedWord[x];
//             centerSection.appendChild(letter); 
//             setTimeout(() => {letter.style.opacity = 1;}
//             , i * 1000);
//         }
//     }
// }

 
// fadeText = function (text) {for (i = 0; i < text.length; i++) {
//     const letter = document.createElement('span');
//     letter.textContent = '';
//     letter.textContent = text[i];
//     letter.style.opacity = 0;
//     letter.style.transition = 'opacity 0.9s';
//     centerSection.appendChild(letter); 
//     setTimeout(() => {
//         letter.style.opacity = 1;}, i * 100);
  
// }
// }



