let userSelectionChoice = ''
let computerSelectionChoice = ''

let userScore = 0
let computerScore = 0


const userEnterIconDisplay = document.querySelector('#user-enter-icon')
const computerEnterIconDisplay = document.querySelector('#computer-enter-icon')


let userScoreDisplay = document.querySelector('#user-score-display')
let computerScoreDisplay = document.querySelector('#computer-score-display')

const gameControls = document.querySelector('#game-Controls')

const selectionButtons = gameControls.querySelectorAll('button')
selectionButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      let targetName = e.target.className
      checkingContainsUserIcons()
      checkingContainsComputerIcons()
      addingIcons(targetName)
      addingComputerIcons(choices)
      checkingWinners(userSelectionChoice, computerSelectionChoice)
      playRound()
      gameEnds()
   })
})

let choices = ['rock', 'paper', 'scissor']

// computer enters a random selection
function gettingComputerSelection() {
   return choices[Math.floor(Math.random() * choices.length)]
}


function checkingContainsUserIcons() {
   if (userEnterIconDisplay.childElementCount > 0) {
      let childIcon = userEnterIconDisplay.firstElementChild
      userEnterIconDisplay.removeChild(childIcon)
   }
}

function checkingContainsComputerIcons() {
   if (computerEnterIconDisplay.childElementCount > 0) {
      let childIcon = computerEnterIconDisplay.firstElementChild
      computerEnterIconDisplay.removeChild(childIcon)
   }
}


function addingIcons(name) {
   let icon = document.createElement('img')
   icon.classList.add('icon')
   userSelectionChoice = name
   icon.src = '/icons/' + name+ '.png'
   userEnterIconDisplay.appendChild(icon)
}

function addingComputerIcons() {
   let computerChoice = gettingComputerSelection()
   computerSelectionChoice = computerChoice
   let icon = document.createElement('img')
   icon.classList.add('icon')
   icon.src = '/icons/' + computerChoice + '.png'
   computerEnterIconDisplay.appendChild(icon)
}

function checkingWinners(user, computer) {
   if (user == computer) {
      console.log('draw')
   } else if (
      (user == 'rock' && computer == 'scissor') ||
      (user == 'paper' && computer == 'rock') ||
      (user == 'scissor' && computer == 'paper')
   ) {
      userScore++
      userScoreDisplay.textContent = userScore
      console.log('user is the winner')
   } else {
      computerScore++
      computerScoreDisplay.textContent = computerScore
      console.log('computer is the winner')
   }
}

// checking the points and Announce the winner and ends the game
function playRound() {
   if (userScore === computerScore) {
      console.log('THE GAME DRAW')
   } else if (userScore > 3) {
      console.log('YOU ARE THE WINNER NOW')
   } else if (computerScore > 3) {
      console.log('COMPUTER IS THE WINNER')
   }
}

function gameEnds() {
   if (userScore == 4 || computerScore == 4) {
      console.log('Game ends...')
      newGameBegins()
   }
}


function newGameBegins() {

}


function resetAllThings(e) {
   
}