
function startModule () {
  var starter = document.getElementById('startbutton')
  starter.parentNode.removeChild(starter)
  var infoPanelText = document.getElementById('infoPanel')
  var timesClicked = 0
  infoPanelText.innerHTML = 'We will be learning how saving and loans can help you and your community improve.'
  var nextButton = document.getElementById('nextButton')
  var fieldHighlighter = document.getElementById('fieldcontainer')
  var handcontainer = document.getElementById('handcontainer')
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
      document.getElementById('fieldcontainer').style.animationName = 'blinking'
      document.getElementById('fieldcontainer').style.animationDuration = '1s'
      document.getElementById('fieldcontainer').style.animationIterationCount = 'infinite'
    } else if (timesClicked === 5) {
      document.getElementById('fieldcontainer').style.animationName = 'blinkingOff'
      infoPanelText.innerHTML = 'Each year, a normal field will produce three units of crop as seen below.'
      spawnCrops(3)
      handcontainer.style.animationName = 'blinking'
      handcontainer.style.animationDuration = '1s'
      handcontainer.style.animationIterationCount = 'infinite'
      timesClicked++
    } else if (timesClicked === 6) {
      handcontainer.style.animationName = 'blinkingOff'
      infoPanelText.innerHTML = 'You must use these crops to plant your field for the following year and eat during that year.'
      timesClicked++
    } else if (timesClicked === 7) {
      handcontainer.style.animationName = 'blinkingOff'
      infoPanelText.innerHTML = 'Try planting one of your crop cards by clicking on it'
      // disable the other cards
      document.getElementById('crop1').style.opacity = '0.5'
      document.getElementById('crop2').style.opacity = '0.5'
      document.getElementById('crop0').style.animationName = 'blinking'
      document.getElementById('crop0').style.animationDuration = '1s'
      document.getElementById('crop0').style.animationIterationCount = 'infinite'
      document.getElementById('crop0').onclick = function () {
        moveToField('crop0')
        document.getElementById('crop0').style.animationName = 'blinkingOff'
        timesClicked = 8
      }
    } else if (timesClicked === 8) {
      document.getElementById('crop0').parentNode.removeChild(document.getElementById('crop0'))
      document.getElementById('field').src = './images/fertalized.png'
      timesClicked++
    } else if (timesClicked === 9) {
      infoPanelText.innerHTML = 'Excellent, now you will get three new crop cards next year!'
      timesClicked++
    } else if (timesClicked === 10) {
      infoPanelText.innerHTML = 'Crop cards will also be used as food for a year, so one crop card must be saved each year.'
      document.getElementById('crop2').style.animationName = 'blinking'
      document.getElementById('crop2').style.animationDuration = '1s'
      document.getElementById('crop2').style.animationIterationCount = 'infinite'
      document.getElementById('crop2').style.opacity = '1.0'
      timesClicked++
    } else if (timesClicked === 11) {
      infoPanelText.innerHTML = 'Try eating on of your crop cards'
      document.getElementById('crop2').onclick = function () {
        document.getElementById('crop2').parentNode.removeChild(document.getElementById('crop2'))
        timesClicked++
      }
    } else if (timesClicked === 12) {
      infoPanelText.innerHTML = 'YUM! Now we are all set for the next year, but we still have one crop card left.'
      document.getElementById('crop1').style.opacity = '1.0'
      timesClicked++
    }
    else if (timesClicked === 13) {
      infoPanelText.innerHTML = 'YUM! Now we are all set for the next year, but we still have one crop card left.'
      document.getElementById('crop1').style.opacity = '1.0'
      timesClicked++
    }
    else if (timesClicked === 14) {
      infoPanelText.innerHTML = 'This crop card can be sold for PROFIT, each crop card will be worth one money card.'
      spawnBuySellBank()
      timesClicked++
    }

  }
}

function spawnCrops (numCrops) {
  var handcontainer = document.getElementById('handcontainer')
  for (var i = 0; i < numCrops; i++) {
    var container = document.createElement('div')
    container.id = 'cardcontainer'
    var image = document.createElement('img')
    image.src = './images/crops.png'
    var card = document.createElement('div')
    card.id = 'crop' + i
    card.style.display = 'inline-block'
    container.appendChild(image)
    card.appendChild(container)
    handcontainer.appendChild(card)
    card.style.padding = '10px'
  }
}

function moveToField (cardID) {
  var field = document.getElementById('field')
  var pos = getPosition(field)
  document.getElementById(cardID).style.position = 'absolute'
  document.getElementById(cardID).style.left = pos.x + 140
  document.getElementById(cardID).style.top = pos.y + 65
}

function getPosition (element) {
  var rect = element.getBoundingClientRect()
  return {x: rect.left, y: rect.top}
}

function spawnBuySellBank () {
  spawnButton('Sell', 'sellbutton')
  spawnButton('Buy', 'buybutton')
  spawnButton('Bank', 'bankbutton')
}

function spawnButton (buttonText, id) {
  var buttonsWrapper = document.getElementById('buysellbankcontainer')
  var Button = document.createElement('button')
  Button.type = 'button'
  Button.className = 'btn btn-primary'
  Button.innerHTML = buttonText
  Button.id = id
  buttonsWrapper.appendChild(Button)

}
