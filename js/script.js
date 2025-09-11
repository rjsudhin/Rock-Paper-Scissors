const userScoreDisplay = document.querySelector('.user-score-display')
const computerScoreDisplay = document.querySelector('.computer-score-display')
const gameCards = document.querySelector('.game-cards')

const gameController = document.querySelector('.game-controller')

const userCard = document.querySelector('.user-card')
const computerCard = document.querySelector('.computer-card')
const gameWinnerDisplay = document.querySelector('.game-winner-display')
let userScore = 0
let computerScore = 0
let countingGame = 0

// game begins
gameController.addEventListener('click', (e) => {
  playGame(e)
})

function playGame(e) {
  countingGame++
  console.log(countingGame)
  console.log(e.target.id)
  let userSelection = gettingUserSelection(e.target.id)
  let computerSelection = gettingComputerSelection()
  
  playRound(userSelection, computerSelection)
  if (countingGame == 5) {
    anouncingGameWinner()
  }
}

// reset game things and scores
function resetGame(e) {
  userScore = 0
  computerScore = 0
  countingGame = 0
  userScoreDisplay.textContent = ''
  computerScoreDisplay.textContent = ''
  gameWinnerDisplay.textContent = ''
  console.log(computerScoreDisplay)
  gameCards.removeChild(e.target)

}

// anouncing the winner 
function anouncingGameWinner() {
  if (userScore == computerScore) {
    gameWinnerDisplay.textcontent = 'Game Draw'
  } else if (userScore > computerScore) {
    gameWinnerDisplay.textContent = 'U Won'
  } else {
    gameWinnerDisplay.textContent = 'Computer Won'
  }
  gameEnding()
}

function gameEnding() {
  let resetBtn = document.createElement('button')
  resetBtn.textContent = 'reset'
  resetBtn.addEventListener('click', resetGame)
  gameCards.appendChild(resetBtn)
}


// checking the player who won the round
function playRound(user, computer) {
  if (user === computer) {
    console.log('draw')
  } else if (
    (user == 'rock' && computer == 'scissors') ||
    (user == 'paper' && computer == 'rock') ||
    (user == 'scissors' && computer == 'paper')
  ) {
    console.log('user wins')
    userScore++
    userScoreDisplay.textContent = userScore
  } else {
    console.log('computer wins')
    computerScore++
    computerScoreDisplay.textContent = computerScore
  }
}

function gettingComputerSelection() {
  let computerChoice = ''
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      computerChoice = 'rock'
      break
    case 1:
      computerChoice = 'scissors'
      break
    case 2:
      computerChoice = 'paper'
      break
  }
  computerCard.textContent = computerChoice
  return computerChoice
}

function gettingUserSelection(choice) {
  userCard.textContent = choice
  return choice
}


