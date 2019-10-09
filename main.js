// var picS = document.querySelector('.study');
// var picM = document.querySelector('.meditate');
// var picE = document.querySelector('.exercise');

function activeStudy() {
  var pic = document.querySelector('.study');
  var select = document.querySelector('.study2');
  pic.src ="assets/study-active.svg";
  pic.classList.add("li-study");
  pic.classList.remove("study");
  select.classList.add("li-study");
  select.classList.remove("study");
}

function activeMeditate() {
  var pic = document.querySelector('.meditate');
  var select = document.querySelector('.meditate2');
  pic.src = "assets/meditate-active.svg";
  pic.classList.add("li-meditate");
  pic.classList.remove("meditate");
  select.classList.add("li-meditate");
  select.classList.remove("meditate");

  console.log(pic)
}

function activeExercise() {
  var pic = document.querySelector('.exercise');
  var select = document.querySelector('.exercise2');
  pic.src = "assets/exercise-active.svg";
  pic.classList.add("li-exercise");
  pic.classList.remove("exercise");
  select.classList.add("li-exercise");
  select.classList.remove("exercise");
}

// console.log(activeExercise);

document.querySelector('.study').addEventListener('click', activeStudy);

document.querySelector('.study').addEventListener('click', activeStudy);
document.querySelector('.meditate').addEventListener('click', activeMeditate);
document.querySelector('.exercise').addEventListener('click', activeExercise);
