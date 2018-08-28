
function startModule () {
  var starter = document.getElementById('startbutton')
  starter.parentNode.removeChild(starter)
  var infoPanelText = document.getElementById('infoPanel')
  var timesClicked = 0
  infoPanelText.innerHTML = 'We will be learning how saving and loans can help you and your community improve.'
  var nextButton = document.getElementById('nextButton')
  var fieldHighlighter = document.getElementById('fieldcontainer')
  nextButton.onclick = function () {
    console.log(timesClicked)
    if (timesClicked === 0) {
      infoPanelText.innerHTML = 'We will be meeting four farmers, each with different ideas about how to use their money.'
      timesClicked++
    } else if (timesClicked === 1) {
      infoPanelText.innerHTML = 'You will play as each farmer for 5 years and compare where they are at the end.'
      timesClicked++
    } else if (timesClicked === 2) {
      infoPanelText.innerHTML = 'They are going to help us learn how we can improve our own ideas about money'
      timesClicked++
    } else if (timesClicked === 3) {
      infoPanelText.innerHTML = 'Let’s go over how to play the game.'
      timesClicked++
    } else if (timesClicked === 4) {
      infoPanelText.innerHTML = 'Below is your Field, in this game each Farmer will only have one field to plant and Harvest.'
      timesClicked++
      fieldHighlighter.style.backgroundColor = 'gold'
    } else if (timesClicked === 5) {
      fieldHighlighter.style.backgroundColor = 'white'
      infoPanelText.innerHTML = 'Each year, a normal field will produce three units of crop as seen below.'
      timesClicked++
      spawnCrops(12)
    }
  }
}

function spawnCrops (numCrops) {
  var handcontainer = document.getElementById('handcontainer')
  for (var i = 0; i < numCrops; i++) {
    var container = document.createElement('div')
    var image = document.createElement('img')
    image.src = './images/card.png'
    var card = document.createElement('div')
    card.id = 'card'
    card.style.display = 'inline-block'
    container.appendChild(image)
    card.appendChild(container)
    handcontainer.appendChild(card)
    container.style.display = 'inline-block'

  }
}
