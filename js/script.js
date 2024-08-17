let userScore = 0
let computerScore = 0

const userScoreDisplay = document.querySelector('.user-score-display')
const computerScoreDisplay = document.querySelector('.computer-score-display')

const choices = ['rock', 'paper', 'scissor']

const userSelectionIcon = document.querySelector('#user-selection-icon')
const computerSelectionIcon = document.querySelector('#computer-selection-icon')

const gameControls = document.querySelector('#game-controls')

const buttonsContainer = document.querySelector('#buttons-container')
const buttons = document.querySelectorAll('img')

buttons.forEach((img) => {
   img.addEventListener('click', (e) => {
      checkingUserUI()
      checkingComputerUI()
      let userSelection = e.target.className
      let computerSelection = gettingComputerChoice()
      startingGame(userSelection, computerSelection)
      gameRound(userSelection, computerSelection)
      checkingWinner()
   })
})

function checkingUserUI() {
   if (userSelectionIcon.childElementCount > 0) {
      let currentIcon = userSelectionIcon.firstElementChild
      userSelectionIcon.removeChild(currentIcon)
   }
}

function checkingComputerUI() {
   if (computerSelectionIcon.childElementCount > 0) {
      let currentIcon = computerSelectionIcon.firstElementChild
      computerSelectionIcon.removeChild(currentIcon)
   }
}


function gettingComputerChoice() {
   return choices[Math.floor(Math.random() * choices.length)]
}

function startingGame(user, computer) {
   // adding user selection UI
   let userUI = document.createElement('img')
   userUI.src = './icons/' + user + '.png'
   userUI.classList.add('selection-ui')
   console.log(userUI)
   userSelectionIcon.appendChild(userUI)
   // adding computer selection UI
   let computerUI = document.createElement('img')
   computerUI.src = './icons/' + computer + '.png'
   computerUI.classList.add('selection-ui')
   computerSelectionIcon.appendChild(computerUI)
}


function gameRound(user, computer) {
   let output = document.querySelector('#output-showing')
   output.classList.add('output-text')

   if (user == computer) {
      console.log('draw')
      output.textContent = 'Draw Game'
   } else if (
      (user === 'rock' && computer === 'scissor') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissor' && computer === 'paper')
   ) {
      console.log('user win')
      userScore++
      userScoreDisplay.textContent = userScore
      output.textContent = `You won ${user} beats ${computer}`
   } else {
      console.log('computer win')
      computerScore++
      computerScoreDisplay.textContent = computerScore
      output.textContent = `You loss ${computer} beats ${user}`
   }
}


function checkingWinner() {
   if (userScore == 5 || computerScore == 5) {
      let winnerText = ''
      console.log('game ends')
      if (!document.querySelector('#output-showing') == '') {
         document.querySelector('#output-showing').textContent = 'The Game is over'
      }
      
      let newGameBtn = document.createElement('button')
      newGameBtn.textContent = 'new game'
      newGameBtn.classList.add('new-game-btn')
      if (userScore > computerScore) {
         winnerText = 'You are the winner'
      } else {
         winnerText = 'Computer is the winner'
      }
      document.querySelector('#output-showing').textContent += " " + winnerText
      newGameBtn.addEventListener('click', resetNewGame)
      buttonsContainer.replaceWith(newGameBtn)
   }
}

function resetNewGame(e) {
   let currentTargetBtn = e.target
   currentTargetBtn.replaceWith(buttonsContainer)
   document.querySelector('#output-showing').textContent = ''
   userScore = 0
   computerScore = 0
   userScoreDisplay.textContent = ''
   computerScoreDisplay.textContent = ''
   let computerUI = computerSelectionIcon.firstElementChild
   let userUI = userSelectionIcon.firstElementChild
   computerSelectionIcon.removeChild(computerUI)
   userSelectionIcon.removeChild(userUI)
}
