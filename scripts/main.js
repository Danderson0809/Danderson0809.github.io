var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/funko-logo.png') {
      myImage.setAttribute ('src','images/funko2.png');
    } else {
      myImage.setAttribute ('src','images/funko-logo.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'What are you searching for ' + myName+'?' ;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'What are you searching for ' + storedName+'?';
	}
myButton.onclick = function() {
  setUserName();
}