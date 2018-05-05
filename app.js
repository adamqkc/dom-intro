window.onload = function() {
  console.log("JavaScript is alive!");

  //change text content of greeting ID
  let greeting = document.querySelector('#greeting');
  greeting.textContent = 'Hello, World!';

  //change li background to yellow
  let li = document.querySelectorAll('#essentials li');
  li.forEach((element) => {
    element.style.backgroundColor = 'yellow';
  });

  //create img element and append to greeting ID
  let img = document.createElement('img');
  img.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
  img.alt = 'Ralph';
  img.className = 'ralph'
  greeting.appendChild(img);


  //add event listeners to each li
  li.forEach((element) => {
    element.addEventListener('click', moveSelector)
    element.addEventListener('click', changePicture)
  })

  //move selector class when clicked
  function moveSelector() {
    let selected = document.querySelector('.selected');
    selected.className = '';
    this.className = 'selected';
  }

  // change drink picture when clicked
  function changePicture() {
    document.querySelectorAll('img')[1].src = './images/' + this.textContent + '.jpeg';
  }

  //remove #ghosting property when moused over
  let greyDiv = document.querySelector('#ghosting');
  greyDiv.addEventListener('mouseover', removeGreyDiv)

  function removeGreyDiv() {
    greyDiv.removeAttribute('id');
  }

  //double the width of orange div
  let orangeDiv = document.querySelector('#resize');
  orangeDiv.addEventListener('mouseover', doubleWidth);
  orangeDiv.addEventListener('mouseleave', normalWidth)

  function doubleWidth() {
    orangeDiv.style.width = '400px';
  }

  function normalWidth() {
    orangeDiv.style.width = '200px';
  }

  //remove selected class and change top img when reset is clicked
  let resetButton = document.querySelector('#reset')
  resetButton.addEventListener('click', reset);

  function reset() {
    let ralphImage = document.querySelector('.ralph');
    ralphImage.src = 'images/panic.jpeg';

    let selected = document.querySelector('.selected');
    selected.className = '';
  }

  //alert message when any number key is pressed
  document.addEventListener('keypress', alertMessage);

  function alertMessage() {
    if (event.key >= 0 && event.key <= 9) {
      alert('I HATE NUMBERZZZ');
    }
  }

  // alert message if user types konami code
  document.addEventListener('keydown', alertKonamiCode);

  const konamiCode= [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let index = 0;

  function alertKonamiCode(e) {
    let keyCode = e.which;

    if (keyCode === konamiCode[index]) {
      index++;
    } else {
      index = 0;
    }

    if (index === konamiCode.length) {
      alert('YOU ARE AN EVENT HANDLER GURUUUUUUUUU');
      index = 0;
    }
  }
}
