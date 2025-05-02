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


const gridDisplay = document.querySelector("#grid")
//console.log(gridDisplay);

function createBoard () {
    for (let i = 0; i < 10; i++) {
        const card =  document.createElement("img")
        card.setAttribute('src','images/blank.png')
        console.log(card, i)
    }
}

createBoard()







