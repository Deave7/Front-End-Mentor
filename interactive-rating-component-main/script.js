submitButton = document.getElementById('submit-button')
ratingSpan = document.getElementById('rating-span')
ratingButtons = document.querySelectorAll(".button-hover")
ratingScreen = document.getElementById('rating-state')
thankYouScreen = document.getElementById('thank-you-state')


submitButton.addEventListener("click", function(){
    showResult()
})

const showResult = () => {
    ratingScreen.style.display = 'none'
    thankYouScreen.style.display = 'flex'
}

thankYouScreen.addEventListener("click", function() {
    showRatingScreen()
})

const showRatingScreen = () => {
    ratingScreen.style.display = 'flex'
    thankYouScreen.style.display = 'none'
}

for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].addEventListener("click", function () {

        for (j = 0; j < ratingButtons.length; j++) {
            ratingButtons[j].classList.remove("active");
          }

        ratingButtons[i].classList += ' active'
        let rating = ratingButtons[i].innerText
        ratingSpan.innerText = rating
    });
  }

