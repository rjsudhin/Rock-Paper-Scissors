console.log('Hello World')

// players scores 
let humanScore = 0
let computerScore = 0

// getting computer choice
function getComputerChoice() {
   let randomNumber = Math.floor(Math.random() * 3) + 1
   // choices
   let choice = ''
   switch(randomNumber) {
      case 1:
         choice = 'rock'
         break
      case 2:
         choice = 'paper'
         break
      case 3:
         choice = 'scissors'
   }   

   return choice

}

// getting user choice 
function getHumanChoice() {
   // users valid choices
   let choices = ['rock', 'paper', 'scissors']
   let result = false
   while(result == false) {
      // getting the user choice via prompt
      let userChoice = prompt('rock, paper, scissors', 'rock')
      // checking the choices includes or not
      if (!choices.includes(userChoice)) {
         console.log('enter the includes value like "rock", "paper", "scissors" ')
         result = false
      } else {
         // if get the choice it will make to lowercase
         let userChoiceCase = userChoice.toLowerCase()
         result = true
         return userChoiceCase
      }
   }
}

function playRound(humanChoice, computerChoice) {
   console.log(`user entered ${humanChoice}`)
   console.log(`computer entered ${computerChoice}`)
   if (humanChoice == computerChoice) {
      console.log('draw')
   } else if (
      (humanChoice == 'rock' && computerChoice == 'scissors') ||
      (humanChoice == 'paper' && computerChoice == 'rock') ||
      (humanChoice == 'scissors' && computerChoice == 'paper') 
   ) {
      humanScore++
      console.log(`you win '${humanChoice}' beats '${computerChoice}'`)
   } else {
      computerScore++
      console.log(`you loss '${computerChoice}' beats ${humanChoice}`)
   }
}


// playing a round game
function playGame() {
   for (let i = 1; i <= 5; i += 1) {
      let computerSelection = getComputerChoice()
      let humanSelection = getHumanChoice()
      playRound(humanSelection, computerSelection)
      console.log(`score 
      user : ${humanScore} computer : ${computerScore}`)
   }
   
   if (humanScore > computerScore) {
      console.log('You win ' + humanScore)
   } else {
      console.log('computer wins ' + computerScore)
   }
}

playGame()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             




