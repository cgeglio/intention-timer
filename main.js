

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



var setTime = document.querySelector('button');

function hideForm () {
    event.preventDefault();
    var timeForm = document.querySelector('form');
    if (timeForm.style.display === "none") {
      timeForm.style.display = "block";
    } else {
      timeForm.style.display = "none";
    }
  };

function getTimer () {
  event.preventDefault();
  var timer = document.getElementById('show-timer');
  if (timer.style.display === "block") {
    timer.style.display = "none";
  } else {
    timer.style.display = "block";
  }
};

setTime.addEventListener('click', hideForm);
setTime.addEventListener('click', getTimer);


var out = document.querySelector('output');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var starter = document.getElementById('start');

starter.addEventListener('click', function(){
  event.preventDefault();
	var userMin = min.value;
	var	userSec = sec.value;
	timer = function(){
		if(userMin>0){
			if(userSec>0){
					userSec--;
				}
        // -- = decrement
				else{
					userMin--;
					userSec = 59;
				}
				setTimeout("timer()", 1000);
				out.value = (userMin<10 ? '0' + userMin : userMin) + ":" + (userSec<10 ? '0' + userSec : userSec);
			}
			else{
				if(userSec>0){
					userSec--;
					out.value = "00:" + (userSec<10 ? '0' + userSec : userSec);
					setTimeout("timer()", 1000);
				}
			}
		}

		timer();
	}, false);
