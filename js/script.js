const userEnterIcon = document.querySelector('#user-enter-icon')
const computerEnterIcon = document.querySelector('#user-enter-icon')


const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')


rock.addEventListener('click', (e) => {
   let targetName = e.target.className
   console.log(targetName)
   addingIcons(targetName)
})

paper.addEventListener('click', (e) => {
   let targetName = e.target.className
   addingIcons(targetName)
})

scissors.addEventListener('click', (e) => {
   let targetName = e.target.className
   console.log(targetName)
   addingIcons(targetName)
})

function addingIcons(name) {
   let icon = document.createElement('img')
   icon.src = '/icons/' + name+ '.png'
   console.log(icon)
   userEnterIcon.appendChild(icon)
}