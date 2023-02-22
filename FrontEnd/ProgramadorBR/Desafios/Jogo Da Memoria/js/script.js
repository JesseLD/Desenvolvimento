const FRONT = "card-front"
const BACK = "card-back"
const CARD = "card"

let techs=[
  'bootstrap',
  'css',
  'electron',
  'firebase',
  'html',
  'javascript',
  'jquery',
  'mongo',
  'node',
  'react'
]

let cards = null

startGame()

function startGame(){
  cards = createCardsFromTechs(techs)
  shuffleCards(cards)
  initializeCards(cards)
}

function initializeCards(cards){
  let gameBoard= document.querySelector("#gameBoard")
  
  cards.forEach(()=>{
    let cardElement = document.createElement('div')
    cardElement.id = card.id
    cardElement.classList.add(CARD)
    cardElement.dataset.icon = card.icon

    cardElement.addEventListener('click',flipCard)
    gameBoard.appendChild(cardElement)


  })


}

function createCardContent(card,element){

}


function shuffleCards(cards){

  let currentIndex = cards.length
  randomIndex = 0

  while(currentIndex !== 0){

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [cards[randomIndex],cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]

  }

}

function createCardsFromTechs(techs){
  let cards = []

  techs.forEach((tech)=>{
    cards.push(createPairFromTechs(tech))
  })

  return cards.flatMap(pair=>pair)
}

function createPairFromTechs(tech){
  return [{
    id:createIdWithTech(tech),
    icon:tech,
    flipped:false
  },{
    id:createIdWithTech(tech),
    icon:tech,
    flipped:false
  }]
}

function createIdWithTech(tech){

  return tech + parseInt(Math.random()*1000)
}

function flipCard(){

}