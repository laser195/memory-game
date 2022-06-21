
 audio = new Audio('sound/sound.mp3');
 let body = document.querySelector('body');
  body.addEventListener('click',()=>{
    audio.play()
  },{once:true})

document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.jpg'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
      },
      {
        name: 'fries',
        img: 'images/fries.jpg'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
      
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
        audio.pause();
        setTimeout(() => {
          console.log('conting');
         location.reload();
        }, 5000);
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
      
    }
  
    createBoard()
  })