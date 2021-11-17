//console.log("Lets Play")
// const bashFlashCards = {
    let correctCard = '.buttonCorrect' === 0
    let incorrectCard = '.buttonIncorrect' == 9

//Begin/opening for game


    // start: function(){
    //     alert(`Start Studying`)
    //     while(this.correctCard < 9){
    //     this.studyBegin()
    //     }
    // }

    // studyBegin: function(){

    //FLIP CARDs front and back function
    function flipCard(e){
    // console.log(e.target.children)
        e.currentTarget.children[0].classList.toggle('flipped')
        e.currentTarget.children[1].classList.toggle('flipped')
    }
    // console.log(flipCard)
        document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard))

 //BUTTONS to mark correct and incorrect
    // function clickButton(e){
    //     e.currentTarget.children[0].buttonClick.toggle('click') 
    //     e.currentTarget.children[1].buttonClick.toggle('click')
    // }
    // console.log(clickButton)
        document.querySelectorAll('.buttonCorrect').forEach(button => button.addEventListener('click', function (){
            alert(`Your answer is correct! Your score is ${correctCard += 1}.`)
        }))

        document.querySelectorAll('.buttonIncorrect').forEach(button => button.addEventListener('click', function (){
            alert(`Your answer is incorrect.  You have ${incorrectCard -= 1} more turns.`)
        }))

        //  if (correctCard <= 9)

//     }
// }
 // How to win.  If 9 attempts are correct you pass! Else try again.

    // correctCard () {
    //     if (clickButton === ('.buttonCorrect') += 1)
    //      alert(`Move to next card!`)
    //     else if (clickButton === ('.buttonIncorrect') += 0)
    // }
     // correctCard >= 9)
     //>= 9 && incorrectCard <= 8 
        //anynumber )



// bashFlashCards.start()        


//Connect the left and right arrow keys for flipping through cards




//if card is on front left arrow key to move to back
//if card is on back right arrow key to move to front
//array for cards being clicked



// Define all variables
        // const flashCard1 = document.querySelector('.flash-card1')
        // const flashCard2 = document.querySelector('.flash-card2')
        // const flashCard3 = document.querySelector('.flash-card3')
        // const flashCard4 = document.querySelector('.flash-card4')
        // const flashCard5 = document.querySelector('.flash-card5')
        // const flashCard6 = document.querySelector('.flash-card6')
        // const flashCard7 = document.querySelector('.flash-card7')
        // const flashCard8 = document.querySelector('.flash-card8')
        // const flashCard9 = document.querySelector('.flash-card9')

//  STRETCH 
// Users can create cards