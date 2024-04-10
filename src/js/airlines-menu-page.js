const menuCardsContainer = document.querySelector('.menu-cards')
const menuCards = menuCardsContainer.querySelectorAll('.menu-card')

menuCards.forEach((menuCard, index) => {
    if (index === 4 || index === 5 || index === 10) {
        menuCard.style.gridColumn = 'span 2'
        menuCard.style.aspectRatio = '2/1'
    }
})
