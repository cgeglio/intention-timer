//Activate Icons

var selectStudy = document.querySelector('.study2');
var picStudy = document.querySelector('.study');

function activeStudy() {
  // var pic = document.querySelector('.study');
  // var select = document.querySelector('.study2');
  var timerBtn = document.querySelector("#start");
  var titleHeader = document.querySelector("output");
  var timerHeader = document.querySelector("h4");
  picStudy.src ="assets/study-active.svg";
  picStudy.classList.add("li-study");
  picStudy.classList.remove("study");
  selectStudy.classList.add("li-study");
  selectStudy.classList.remove("study");
  // select.classList.add("li-study");
  // select.classList.remove("study");
  timerBtn.classList.add("timerStudy");
  titleHeader.classList.add("timerHeader")
  timerHeader.classList.add("timerHeader")
}

var selectMeditate = document.querySelector('.meditate2');
var picMeditate = document.querySelector('.meditate');
// selectMeditate.classList.add("li-meditate");
// selectMeditate.classList.remove("meditate");

function activeMeditate() {
  // var pic = document.querySelector('.meditate');
  // var select = document.querySelector('.meditate2');
  var timerBtn = document.querySelector("#start");
  var titleHeader = document.querySelector("output");
  var timerHeader = document.querySelector("h4");
  picMeditate.src = "assets/meditate-active.svg";
  picMeditate.classList.add("li-meditate");
  picMeditate.classList.remove("meditate");
  selectMeditate.classList.add("li-meditate");
  selectMeditate.classList.remove("meditate");
  // select.classList.add("li-meditate");
  // select.classList.remove("meditate");
  timerBtn.classList.add("timerMeditate");
  titleHeader.classList.add("timerHeader")
  timerHeader.classList.add("timerHeader")
}

var selectExercise = document.querySelector('.exercise2');
var picExercise = document.querySelector('.exercise');
// selectExercise.classList.add("li-exercise");
// selectExercise.classList.remove("exercise");

function activeExercise() {
  // var pic = document.querySelector('.exercise');
  // var select = document.querySelector('.exercise2');
  var timerBtn = document.querySelector("#start");
  var titleHeader = document.querySelector("output");
  var timerHeader = document.querySelector("h4");
  picExercise.src = "assets/exercise-active.svg";
  picExercise.classList.add("li-exercise");
  picExercise.classList.remove("exercise");
  selectExercise.classList.add("li-exercise");
  selectExercise.classList.remove("exercise");
  // select.classList.add("li-exercise");
  // select.classList.remove("exercise");
  timerBtn.classList.add("timerExercise");
  titleHeader.classList.add("timerHeader")
  timerHeader.classList.add("timerHeader")
}








document.querySelector('.study').addEventListener('click', activeStudy);
document.querySelector('.meditate').addEventListener('click', activeMeditate);
document.querySelector('.exercise').addEventListener('click', activeExercise);



// get description to show above timer
var setTime = document.getElementById('submitter');
var descrip = document.querySelector('h4');
var activity = document.getElementById('description');

function showDescrip () {
  descrip.innerText = activity.value;
};

// setTime.addEventListener('click', showDescrip);
// get error messages to show on all four

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
var timeForm = document.querySelector('.hide-timer');
var timerShow = document.querySelector('.show-timer');

function formValidation () {
  event.preventDefault();
    if (descriptor.value.length>0 && minutes.value.length>0 && seconds.value.length>0 && (study === true || meditate === true || exercise === true)) {
      timeForm.style.display = "none";
      logger.style.visibility = "visible";
      starter.style.visibility = "visible";
      descrip.style.visibility = "visible";
      out.style.visibility = "visible";
      timerShow.style.display = "flex";

      function showDescrip () {
        descrip.innerText = activity.value;
      };

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
  logger.disabled = true;
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
          logger.disabled = false;
      }
			}
		}

		timer();
	});

// gets input to display on article card
var logger = document.getElementById('log');
var showCard = document.getElementById('card');
var sideP = document.querySelector('.sidebar');
var cardAct = document.querySelector('.cardActivity');
var cardTime = document.querySelector('.cardTime');
var cardChoice = document.querySelector('.cardChoice');
var cardMins = document.getElementById('cardMins');
var cardSecs = document.getElementById('cardSecs');
var newAct = document.getElementById('new');

// newAct.addEventListener('click', goAgain);
//
// function goAgain () {
//
// }
var log = false;

function logClicked () {
  log = true
};

logger.addEventListener('click', logClicked);
logger.addEventListener('click', createCard);
logger.addEventListener('click', newInput);


// function newCard(){
//   event.preventDefault();
//        if (log === true) {
//             var plusCard = document.createElement('div');
//             plusCard.className = 'newcard';
//               //div.style.backgroundColor = "black";
//          document.getElementsByTagName('aside')[0].appendChild(plusCard);
//       }
//   };

function newInput () {
   var plusCard = document.createElement("div");
   plusCard.className = 'newcard';
   plusCard.innerHTML = '<p class="cardInfo"><p>'
   document.getElementsByTagName('aside')[0].appendChild(plusCard);
   plusCard.innerText = (`${minutes.value}:${seconds.value} ${descriptor.value}`);
};

function createCard () {
  event.preventDefault();
     if (log === true) {
       showCard.style.display = "block";
       sideP.style.display = "none";
       newAct.style.visibility = "visible";
       logger.disabled = true;
       logger.style.visibility = "hidden";
       starter.innerHTML = "Start";
       starter.disabled = false;
       starter.style.visibility = "hidden";
       descrip.style.visibility = "hidden";
       out.style.visibility = "hidden";
     } else {
       showCard.style.display = "none";
     }
};

newAct.addEventListener('click', newForm);

function newForm () {
  event.preventDefault();
  timeForm.style.display = "block";
  timeForm.reset();
  newAct.style.visibility = "hidden";
  timerShow.style.display = "none";
  log === false;

  if (study === true) {
    selectStudy.classList.remove("li-study");
    selectStudy.classList.add("study");
    picStudy.src ="assets/study.svg";
    study === false;
  }
  if (exercise === true) {
    selectExercise.classList.remove("li-exercise");
    selectExercise.classList.add("exercise");
    picExercise.src = "assets/exercise.svg";
    exercise === false;
  }
  if (meditate === true) {
    selectMeditate.classList.remove("li-meditate");
    selectMeditate.classList.add("meditate");
    picMeditate.src = "assets/meditate.svg";
    meditate === false;
  }
};


              // if (study === true) {
              //    cardChoice.innerText = "Study";
              //  }
              //  if (meditate === true) {
              //    cardChoice.innerText = "Meditate";
              //  }
              //  if (exercise === true) {
              //    cardChoice.innerText = "Exercise";
              //  };

// descriptor.value = "";
// minutes.value = "";
// seconds.value = "";
// logger.style.display = "none";
// starter.style.display = "none";
// descrip.style.display = "none";
// out.style.display = "none";

  // setTime.addEventListener('click', showDescrip);
  // setTime.addEventListener('click', formValidation);

//  function hideForm () {
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
// //
// class Card {
//   constructor(time, category, description) {
//     this.time = time;
//     this.category = category;
//     this.description = description;
//   }
// };
