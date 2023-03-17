// // Problem: I need to create a way for the end user
// // to specify a value, compare that value
// // to one randomly generated by the computer, 
// // and declare a winner based on that comparison;
// // I then need to loop this process so that it 
// // repeats 5 times and console.log the result
// // of each round, 
// // keeping track of wins and losses
// // and ultimately declaring a winner

// function getComputerChoice () {
//     let randomNumber = Math.random(); 
//     if(randomNumber < .33) {return 'rock';
// }   else if(randomNumber < .66) {return 'paper';
// }   else {return 'scissors'}
// };


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

const playerWeapons = document.querySelectorAll('.player .weapon');
const selectionSection = document.querySelector('.top');
const playerArsenal = document.querySelector('.player.arsenal'); 
const centerSection = document.querySelector('.section.middle');
const startText = ["ROCK", "PAPER", "SCISSORS", "SHOOT"]; 

let selection;

function selectWeapon (e) {
  selection = e.target; 
  playerArsenal.classList.add('selected');
  playerWeapons.forEach(weapon => {weapon.classList.add('selected')});
  playerWeapons.forEach(weapon => {weapon.removeEventListener('click', selectWeapon)}); 
  console.log(selection);
  startText.forEach((word, index) => {
    setTimeout(() => {slapDown(word, index)}, index * 1000);
  });
}

function slapDown(string, index) {
  const word = document.createElement('span'); // create a new word element for each word
  word.textContent = string;
  word.style.position = 'fixed'; 
  word.style.top = '50%'; 
  word.style.left = '50%';
  word.style.transform = 'translate(-50%, -50%)';
  centerSection.appendChild(word);
  if (string === "SHOOT") {
    word.style.animation = 'shoot .75s ease-in-out forwards'; 
  } else {
    word.style.animation = 'fadeout .75s ease-in-out forwards'; 
  }
  word.addEventListener("animationend", function(e) { // add the animationend listener here
    if (e.animationName === "shoot") {
      // Calculate the final position of the element
      const x = 48; // 50% from the left of the screen
      const y = 22.5; // 50% from the top of the screen

      // Calculate the starting position of the element dynamically
      const rect = selection.getBoundingClientRect();
      const startX = rect.left;
      const startY = rect.top;

      // Calculate the distance that the element needs to travel
      const distanceX = (window.innerWidth * x / 100) - startX;
      console.log(distanceX); 
      const distanceY = (window.innerHeight * y / 100) - startY;
      console.log(distanceY);

      // Use CSS to animate the movement of the element
      console.log(selection);
      selection.style.transform = `translate(${distanceX}px, ${distanceY}px) scale(1.5)`; 
      console.log(selection);
    }
  });
}


  // battle = function (selection) {
  //   if
  //   selection.style.animation = 'square-up 5s forwards';
  // }

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
//     word.style.top = '50%'; 
//     word.style.left = '50%';
//     word.style.transform = 'translate(-50%, -50%)';
//     word.style.opacity = 0; 
//     centerSection.appendChild(word);
//     word.style.animation = 'fadeout .75s ease-in-out forwards'; 
//     }; 


playerWeapons.forEach(weapon => {weapon.addEventListener('click',  selectWeapon)
}); 


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



