//console.log("Lets Play")


//create 3 cards front and back for each category+
//define all variables
const flashCard1 = document.querySelector('.back1')
//add on-click event listener to select cards

//flip card function
function flipCard(){
    flashCard1.classList.toggle('is-flipped')
}
console.log(flashCard1)

//connect the left and right arrow keys for flipping through cards
//create buttons to mark correct and incorrect
//if card is on front left arrow key to move to back
//if card is on back right arrow key to move to front
//if 9 responses are correct you pass! Else try again.
