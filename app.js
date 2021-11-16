//console.log("Lets Play")
let correctCard = 0;
let incorrectCard = 0;

//Begin/opening for game

// const bashFlashCards = {
//     start: function(){
//         alert(`Start Studying`)
//         while(this.correctCard <= 9){
//             this.studyBegin()
//         }
//     },

//create 3 cards front and back for each category+

//add on-click event listener to select cards
    //     flashCard1.addEventListener('click',
    // studyBegin: function(){
//flip card front and back function
    function flipCard(e){
    // console.log(e.target.children)
        e.currentTarget.children[0].classList.toggle('flipped')
        e.currentTarget.children[1].classList.toggle('flipped')
    }

// console.log(flipCard)
    document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard))


//connect the left and right arrow keys for flipping through cards
//create buttons to mark correct and incorrect
    // function clickButton(e){
    //     e.currentTarget.children[0].classList.buttonClick.addEventListener('click,') 
    //     e.target.children[1].classList.('click'
    //     )
    // }
    // document.querySelectorAll('.button').forEach(button => button.addEventListener('click', clickButton))

//if card is on front left arrow key to move to back
//if card is on back right arrow key to move to front
//if 9 responses are correct you pass! Else try again.


    // if (correctCard >= 9)
    // else if (correctCard >= 9 && incorrectCard <= 8 
        //anynumber )
//array for cards being clicked

//     }
// }

// bashFlashCards.start()

//define all variables
// const flashCard1 = document.querySelector('.flash-card1')
// const flashCard2 = document.querySelector('.flash-card2')
// const flashCard3 = document.querySelector('.flash-card3')
// const flashCard4 = document.querySelector('.flash-card4')
// const flashCard5 = document.querySelector('.flash-card5')
// const flashCard6 = document.querySelector('.flash-card6')
// const flashCard7 = document.querySelector('.flash-card7')
// const flashCard8 = document.querySelector('.flash-card8')
// const flashCard9 = document.querySelector('.flash-card9')