//The Game
const bashFlashCards = {
    correctAnswer: 0,
    incorrectAnswer: 0,

    //Start the Game
    start: function() {
        alert(`Start Studying! Hover over each card to see the questions.  Then click to review the definition.  Did you answer correctly?  Push the "Correct" button.  Did you answer incorrectly? Push the "Incorrect" button.`)
        document.querySelectorAll(`.buttonCorrect`).forEach(button => button.addEventListener(`click`, bashFlashCards.buttonClickCorrect))
        document.querySelectorAll(`.buttonIncorrect`).forEach(button => button.addEventListener(`click`, bashFlashCards.buttonClickIncorrect))
        this.flipCard()
    },

    //Flip Cards
    //DOM event listener
    flipCard: function () {
        document.querySelectorAll(`.card`).forEach(card => card.addEventListener(`click`, (e) => {
            e.currentTarget.children[0].classList.toggle(`flipped`)
            e.currentTarget.children[1].classList.toggle(`flipped`)
        }))  
    },

    //Button Correct
    buttonClickCorrect: function () {
        alert(`Your answer is correct! Your score is ${bashFlashCards.correctAnswer +=1} points.  Answer all 9 correctly to pass!`)
        bashFlashCards.checkForWin()
    },

    //Button Incorrect
    buttonClickIncorrect: function () {
        alert(`Your answer is incorrect.  You score remains ${bashFlashCards.incorrectAnswer = bashFlashCards.correctAnswer}.`)
    },

    //Winning Function
    checkForWin: function (){
        if (this.correctAnswer === 9) {
        alert(`You answered all 9 cards, correctly.  You're going to ace that test!!!`)
        }
    }
}

//Call the Start
bashFlashCards.start()   

