let computerWord = document.querySelector('#computer-word')
const wordarr = [
  'football',
  'cricket',
  'Basketball',
  'pingpong',
  'Hockey',
  'chess',
  'monopoly',
  'snooker',
  'bridge',
  'casino',
  'hazard',
  'call of duty',
  'pokemon',
]
const randomword = Math.abs(Math.floor(Math.random() * wordarr.length - 1))
const splitarr = wordarr[randomword]
console.log(splitarr.toUpperCase())
let computerrandomword = ''
const jumbleword = splitarr.split('')
const generateword = jumbleword.sort().join('')
computerWord.innerHTML = generateword
let chance = 10
let chancetext = document.querySelector('#chance')
let check = document.querySelector('#check')
check.addEventListener('click', () => {
  let guessword = document.querySelector('#yourword')
  if (guessword.value.toUpperCase() === splitarr.toUpperCase()) {
    alert('Congratuation You won the game')
    location.reload()
    guessword.value = ''
  } else {
    chance--
    chancetext.innerHTML = chance
    guessword.value = ''
  }
})
