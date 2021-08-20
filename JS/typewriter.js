var span, textArr, textIndex, textToShow, textToShowLen, letterIndex, textTimer, letterTimer, textDelay, letterDelay, emptyTimer;

textArr = [
  "Eddy.",
  "Creative.",
  'a Developer.',
  'Curious.',
  'a Swimmer.',
  'a Reader.',
  'a Student.',
  'Fredward'
]

span = document.getElementsByTagName("span")[0];
textIndex = 0;
textDelay= 2300;
letterDelay = 130;

function showText() {
  textToShow = textArr[textIndex];
  textToShowLen = textToShow.length;
  letterIndex = 0;
  
  letterTimer = setInterval(function() {
    span.textContent += textToShow[letterIndex];
    console.log(textToShow[letterIndex]);
    letterIndex++;
    if (letterIndex > textToShowLen-1) {
      clearInterval(letterTimer);
      textTimer = setTimeout(nextText, textDelay)
    }
  } ,letterDelay)
  
}

function nextText() {
  clearTimeout(textTimer);
  textIndex++;
  if (textIndex > textArr.length-1) {
    textIndex = 0;
  }
  emptySpan();

}

function emptySpan() {
  emptyTimer = setInterval(removeLetter, letterDelay/2)
}


function removeLetter() {
  if (span.textContent.length != 0) {
    popedSpan = Array.prototype.slice.call(span.textContent).slice(0,span.textContent.length-1).join('');
    span.textContent = popedSpan;
  } else {
    clearInterval(emptyTimer);
    showText();
  }
}

emptySpan();
