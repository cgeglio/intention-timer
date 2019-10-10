//Activate Icons
function activeStudy() {
  var pic = document.querySelector('.study');
  var select = document.querySelector('.study2');
  var timerBtn = document.querySelector("#start");
  var titleHeader = document.querySelector("output");
  var timerHeader = document.querySelector("h4");
  pic.src ="assets/study-active.svg";
  pic.classList.add("li-study");
  pic.classList.remove("study");
  select.classList.add("li-study");
  select.classList.remove("study");
  timerBtn.classList.add("timerStudy");
  titleHeader.classList.add("timerHeader")
  timerHeader.classList.add("timerHeader")
}

function activeMeditate() {
  var pic = document.querySelector('.meditate');
  var select = document.querySelector('.meditate2');
  var timerBtn = document.querySelector("#start");
  var titleHeader = document.querySelector("output");
  var timerHeader = document.querySelector("h4");
  pic.src = "assets/meditate-active.svg";
  pic.classList.add("li-meditate");
  pic.classList.remove("meditate");
  select.classList.add("li-meditate");
  select.classList.remove("meditate");
  timerBtn.classList.add("timerMeditate");
  titleHeader.classList.add("timerHeader")
  timerHeader.classList.add("timerHeader")
}

function activeExercise() {
  var pic = document.querySelector('.exercise');
  var select = document.querySelector('.exercise2');
  var timerBtn = document.querySelector("#start");
  var titleHeader = document.querySelector("output");
  var timerHeader = document.querySelector("h4");
  pic.src = "assets/exercise-active.svg";
  pic.classList.add("li-exercise");
  pic.classList.remove("exercise");
  select.classList.add("li-exercise");
  select.classList.remove("exercise");
  timerBtn.classList.add("timerExercise");
  titleHeader.classList.add("timerHeader")
  timerHeader.classList.add("timerHeader")
}








document.querySelector('.study').addEventListener('click', activeStudy);
document.querySelector('.meditate').addEventListener('click', activeMeditate);
document.querySelector('.exercise').addEventListener('click', activeExercise);



// get description to show above timer
var setTime = document.getElementById('submitter');

function showDescrip () {
  var descrip = document.querySelector('h4');
  var activity = document.getElementById('description');
  descrip.innerText = activity.value;
};

setTime.addEventListener('click', showDescrip);





// get error messages to show on all four inputs
var study = false;
var meditate = false;
var exercise = false;

var descriptor = document.getElementById('description');
var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var error1 = document.getElementById('error-description');
var error2 = document.getElementById('error-minutes');
var error3 = document.getElementById('error-seconds');
var error4 = document.getElementById('error-button');
var warning1 = document.getElementById('warn-description');
var warning2 = document.getElementById('warn-min');
var warning3 = document.getElementById('warn-sec');
var warning4 = document.getElementById('warn-button');

function formValidation () {
  event.preventDefault();
  var timeForm = document.querySelector('form');
  var timer = document.getElementById('show-timer');
    if (descriptor.value.length>0 && minutes.value.length>0 && seconds.value.length>0 && (study === true || meditate === true || exercise === true)) {
      timeForm.style.display = "none";
      timer.style.display = "block";
    }
    if (descriptor.value.length<1) {
        error1.innerText = "A Description is Required.";
        warning1.style.visibility = "visible";
    }
    if (minutes.value.length<1) {
        error2.innerText = "Please Enter Number of Minutes.";
        warning2.style.visibility = "visible";
    }
    if (seconds.value.length<1) {
        error3.innerText = "Please Enter Number of Seconds.";
        warning3.style.visibility = "visible";
    }
    if (study === false && meditate === false && exercise === false) {
      error4.innerText = "Please Select an Activity.";
      warning4.style.visibility = "visible";
    }
  };

function studyClicked () {
  study = true
};
function meditateClicked() {
  meditate = true
};
function exerciseClicked() {
  exercise = true
};


document.querySelector('.study2').addEventListener('click', studyClicked)
document.querySelector('.meditate2').addEventListener('click', meditateClicked)
document.querySelector('.exercise2').addEventListener('click', exerciseClicked)










setTime.addEventListener('click', showDescrip);



setTime.addEventListener('click', formValidation);

// get timer to work
var out = document.querySelector('output');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var starter = document.getElementById('start');


starter.addEventListener('click', function(){
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
          starter.disabled = true;
				}
        if(userSec===0){
          starter.innerHTML = "Great Job!";
      }
			}
		}

		timer();
	}, false);


// function hideForm () {
//     event.preventDefault();
//     var timeForm = document.querySelector('form');
//     if (timeForm.style.display === "none") {
//       timeForm.style.display = "block";
//     } else {
//       timeForm.style.display = "none";
//     }
//   };

// function getTimer () {
//   var timer = document.getElementById('show-timer');
//   if (timer.style.display === "block") {
//     timer.style.display = "none";
//   } else {
//     timer.style.display = "block";
//   }
// };


// setTime.addEventListener('click', hideForm);
// setTime.addEventListener('click', getTimer);
