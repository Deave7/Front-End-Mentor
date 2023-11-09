let rating = 2;

submitButton = document.getElementById('submit-button')
ratingSpan = document.getElementById('rating-span')
ratingButtons = document.querySelectorAll(".button-hover")
ratingScreen = document.getElementById('rating-state')
thankYouScreen = document.getElementById('thank-you-state')


submitButton.addEventListener("click", function(){
    ratingSpan.innerText = rating
    showResult()
})

const showResult = () => {
    ratingScreen.style.display = 'none'
    thankYouScreen.style.display = 'flex'
}

thankYouScreen.addEventListener("click", function() {
    showRating()
})

const showRating = () => {
    ratingScreen.style.display = 'flex'
    thankYouScreen.style.display = 'none'
}



