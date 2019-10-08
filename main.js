

function activeStudy() {
  var pic = document.querySelector('.study');
  pic.src = "assets/study-active.svg";
  pic.classList.add(".li-study");
}



function activeMeditate() {
  var pic = document.querySelector('.meditate');
  pic.src = "assets/meditate-active.svg";
  pic.classList.add(".li-meditate");
}

function activeExercise() {
  var pic = document.querySelector('.exercise');
  pic.src = "assets/exercise-active.svg";
  // pic.classList.add(".li-study");
}

document.querySelector('.study').addEventListener('click', activeStudy);
document.querySelector('.meditate').addEventListener('click', activeMeditate);
document.querySelector('.exercise').addEventListener('click', activeExercise);
