//console.log("Lets Play")
const bashFlashCards = {
    correctAnswer: 0,
    incorrectAnswer: 0,
    //  incorrectCard: '.buttonIncorrect' == 9

//Begin/opening for game
//Did you answer correctly? Click the correct button.  Did you answer incorrectly?  Click the incorrect button.

    start: function() {
        alert(`Start Studying! Pick a card and click to review the definition.  Did you answer correctly?  Push the "Correct" button.  Did you answer incorrectly? Push the "Incorrect" button.`)
        // console.log(bashFlashCards.correctAnswer)
        document.querySelectorAll('.buttonCorrect').forEach(button => button.addEventListener('click', bashFlashCards.buttonClickCorrect))
        document.querySelectorAll('.buttonIncorrect').forEach(button => button.addEventListener('click', bashFlashCards.buttonClickIncorrect))
       
        while(this.correctAnswer < 9){
        this.studyBegin()
        this.buttonClickCorrect()
        this.buttonClickIncorrect()
        this.flipCard()
        this.checkForWin()
        }
    },

    studyBegin: function flipCard (e){
//FLIP CARDs front and back function
    // console.log(e.target.children)
            e.currentTarget.children[0].classList.toggle('flipped')
            e.currentTarget.children[1].classList.toggle('flipped')
        },

          flipCard: function () {
            //   console.log(flipCard)
              document.querySelectorAll('.card').forEach(card => card.addEventListener('click', bashFlashCards.flipCard))   
            },
 //BUTTONS to mark correct and incorrect
            buttonClickCorrect: function () {
                // bashFlashCards.correctAnswer += 1
                alert(`Your answer is correct! Your score is ${bashFlashCards.correctAnswer +=1}.`)
            },
            buttonClickIncorrect: function () {
            // bashFlashCards.incorrectAnswer == 0
                alert(`Your answer is incorrect.  You score remains ${bashFlashCards.incorrectAnswer = bashFlashCards.correctAnswer}.`)
            },

    checkForWin: function (){
        if (correctAnswer == 9) {
        alert(`You answered all 9 cards, correctly.  You passed!!!`)
        }   
    }
}
bashFlashCards.start()   


//BUTTONS to mark correct and incorrect
    // function clickButton(e){
    //     e.currentTarget.children[0].buttonClick.toggle('click') 
    //     e.currentTarget.children[1].buttonClick.toggle('click')
    // }
     // console.log(clickButton)

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