var nmbrOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < nmbrOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
}

//detects button pressed
function onClick() {
  var selectedButton = this.innerHTML;
  makeSound(selectedButton);
  buttonAnimation(selectedButton);
}

document.addEventListener("keydown", onPress);

//detects key pressed
function onPress(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}
