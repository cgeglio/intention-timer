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

function showDescrip () {
  event.preventDefault();
  var descrip = document.querySelector('h4');
  var activity = document.getElementById('description');
  descrip.innerText = activity.value;
};

setTime.addEventListener('click', hideForm);
setTime.addEventListener('click', getTimer);
setTime.addEventListener('click', showDescrip);

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
      if (userSec===0){
          alert('time up');
      }
			}
		}

		timer();
	}, false);

//
// function validateForm(){
// 	var description = document.getElementById('description').value;
// 	var minutes = document.getElementById('min').value;
// 	var seconds = document.getElementById('sec').value;
//
// 	if (description.length<1) {
//         document.getElementById('error-description').innerHTML = " Please Enter A Description *"
//     }
//     if (minutes.length<1 ) {
//         document.getElementById('error-minutes').innerHTML = " Please Enter Minutes *";
//     }
//     if (seconds.length<1 || seconds.length>2) {
//         document.getElementById('error-seconds').innerHTML = " Please Enter Seconds *";
//     }
//
//     if(description.length<1 || minutes.length<1 || seconds.length<1 ||{
//        	return false;
//     }
// };
