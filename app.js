const cardArray = [
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    }
];


cardArray.sort(() => 0.5 - Math.random()); //random the 12 cards
//console.log(cardArray);


const gridDisplay = document.querySelector('#grid')
//console.log(gridDisplay);

const cardsChosen = []

//check what does 'data-id' do!!!!

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card =  document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        //console.log(card, i)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard() {
    //console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    //console.log('clicked', cardId)
    //console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
}







