//Global Variables
// var boxColor = document.getElementById("card");
// var currentCategory = null;
var currentCategory = document.getElementById("card");
var descriptor = document.getElementById("description");
var exercise = false;
var log = false;
var logger = document.getElementById("log");
var meditate = false;
var minutes = document.getElementById("min");
var newAct = document.getElementById("new");
var picExercise = document.querySelector(".exercise");
var picMeditate = document.querySelector(".meditate");
var picStudy = document.querySelector(".study");
var seconds = document.getElementById("sec");
var setTime = document.getElementById("submitter");
var selectExercise = document.querySelector(".exercise-2");
var selectStudy = document.querySelector(".study-2");
var selectMeditate = document.querySelector(".meditate-2");
var starter = document.getElementById("start");
var study = false;
var timeForm = document.querySelector(".hide-timer");
var timerHeader = document.querySelector("h4");
var timerShow = document.querySelector(".show-timer");
var titleHeader = document.querySelector("output");

// Event Listeners
document.querySelector(".study-2").addEventListener("click", activeStudy);
document.querySelector(".meditate-2").addEventListener("click", activeMeditate);
document.querySelector(".exercise-2").addEventListener("click", activeExercise);
document.querySelector(".study-2").addEventListener("click", studyClicked);
document.querySelector(".meditate-2").addEventListener("click", meditateClicked);
document.querySelector(".exercise-2").addEventListener("click", exerciseClicked);
newAct.addEventListener("click", newForm);
setTime.addEventListener("click", showDescrip);
setTime.addEventListener("click", formValidation);

// Selects Color for Icons and Timer
function activeStudy() {
  event.preventDefault();
  // boxColor.classList.add("box-study");
  currentCategory.classList.add("box-study");
  picStudy.src ="assets/study-active.svg";
  picStudy.classList.add("li-study");
  picStudy.classList.remove("study");
  selectStudy.classList.add("li-study");
  selectStudy.classList.remove("study");
  starter.classList.add("timer-study");
  titleHeader.classList.add("timer-header");
  timerHeader.classList.add("timer-header");

}

function activeMeditate() {
  event.preventDefault();
  picMeditate.src = "assets/meditate-active.svg";
  picMeditate.classList.add("li-meditate");
  picMeditate.classList.remove("meditate");
  selectMeditate.classList.add("li-meditate");
  selectMeditate.classList.remove("meditate");
  starter.classList.add("timer-meditate");
  titleHeader.classList.add("timer-header");
  timerHeader.classList.add("timer-header");
}

function activeExercise() {
  event.preventDefault();
  picExercise.src = "assets/exercise-active.svg";
  picExercise.classList.add("li-exercise");
  picExercise.classList.remove("exercise");
  selectExercise.classList.add("li-exercise");
  selectExercise.classList.remove("exercise");
  starter.classList.add("timer-exercise");
  titleHeader.classList.add("timer-header");
  timerHeader.classList.add("timer-header");
}



// Timer Description and Disable Unclicked Icons
function showDescrip () {
  timerHeader.innerText = descriptor.value;
    titleHeader.innerText = (min.value<10 ? "0" + min.value : min.value) + ":" + (sec.value<10 ? "0" + sec.value : sec.value);
};
function studyClicked () {
  if (study = true){
    event.preventDefault();
    selectMeditate.classList.add("disabled");
    selectExercise.classList.add("disabled");
  }
};
function meditateClicked() {
  if (meditate = true){
    event.preventDefault();
    selectStudy.classList.add("disabled");
    selectExercise.classList.add("disabled");
  }
};
function exerciseClicked() {
  if (exercise = true){
    event.preventDefault();
    selectMeditate.classList.add("disabled");
    selectStudy.classList.add("disabled");
  }
};

// Form Validation and Warning
function formValidation () {
  var letters = "^[a-zA-Z,.!? ]*$";
  var error1 = document.getElementById("error-description");
  var error2 = document.getElementById("error-minutes");
  var error3 = document.getElementById("error-seconds");
  var error4 = document.getElementById("error-button");
  var warning1 = document.getElementById("warn-description");
  var warning2 = document.getElementById("warn-min");
  var warning3 = document.getElementById("warn-sec");
  var warning4 = document.getElementById("warn-button");
  event.preventDefault();
    if (descriptor.value.length>0 && descriptor.value.match(letters) && minutes.value.length>0 && seconds.value.length>0 && (study === true || meditate === true || exercise === true)) {
      timeForm.style.display = "none";
      logger.style.visibility = "visible";
      starter.style.visibility = "visible";
      timerHeader.style.visibility = "visible";
      titleHeader.style.visibility = "visible";
      timerShow.style.display = "flex";
      logger.disabled = true;
      function showDescrip () {
        descrip.innerText = descriptor.value;
      };
    }
    if (descriptor.value.length<1 || !descriptor.value.match(letters)) {
      error1.innerText = "A Valid Description is Required.";
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

//Timer Fucntionality and Random Messaging
starter.addEventListener("click", function(){
  var userMin = minutes.value;
  var	userSec = seconds.value;
  var messageChoice = Array(
    "Great Job!",
    "You Did It!",
    "Nice Work!",
    "Fantastic!",
    "Try Harder",
    "Good Effort",
  )
  var message = messageChoice[Math.floor(Math.random() * messageChoice.length)];
	timer = function(){
    starter.disabled = true;
		if(userMin>0){
			if(userSec>0){
					userSec--;
				} else {
					userMin--;
					userSec = 59;
				}
				titleHeader.value = (userMin<10 ? "0" + userMin : userMin) + ":" + (userSec<10 ? "0" + userSec : userSec);
        setTimeout("timer()", 1000);
			  } else {
				  if(userSec>0){
					  userSec--;
					  titleHeader.value = "00:" + (userSec<10 ? "0" + userSec : userSec);
					  setTimeout("timer()", 1000);
				    }
          if(userSec===0){
            logger.disabled = false;
            starter.innerText = message;
            }
			 }
		}
		timer();
	});

// Past Activity Cards Creation and Appearance
function logClicked () {
  log = true
};

logger.addEventListener("click", logClicked);
logger.addEventListener("click", createCard);
logger.addEventListener("click", newInput);

function newInput () {
  debugger
  event.preventDefault();
  var plusCard = document.createElement("div");
  // var boxColor = document.getElementsByClassName("new-card");
   plusCard.className = "new-card";
   document.getElementsByTagName("aside")[0].appendChild(plusCard);

   var userMin = minutes.value;
   var userSec = seconds.value;
    var cardChoice;
    if (study === true) {
      cardChoice = 'Study'
    } else if (meditate === true) {
      cardChoice = 'Meditate'
    } else if (exercise === true) {
     cardChoice = 'Exercise'
    }















// WORK HERRE TONIGHT
    var cardColor;
    if (study === true) {
    cardColor = "box-study"
    } else if (meditate === true) {
    cardColor.classList.add("box-meditate");
    } else if (exercise === true) {
    cardColor.classList.add("box-exercise");
    }



  var totalTime = (userMin<10 ? "0" + userMin : userMin) + " MIN " + (userSec<10 ? "0" + userSec : userSec) + " SECONDS";


plusCard.innerHTML += `
  <div>
   <div id="${cardColor}">KKKKLLL</div>
   <p>${cardChoice}</p>
   <p>${totalTime}</p>
   <p>${descriptor.value}</p>
  </div>`;
};

function createCard () {
  event.preventDefault();
  var showCard = document.getElementById("card");
  var sideP = document.querySelector(".sidebar");
     if (log === true) {
       showCard.style.display = "block";
       sideP.style.display = "none";
       newAct.style.visibility = "visible";
       logger.disabled = true;
       logger.style.visibility = "hidden";
       starter.innerHTML = "Start";
       starter.disabled = false;
       starter.style.visibility = "hidden";
       timerHeader.style.visibility = "hidden";
       titleHeader.style.visibility = "hidden";
     } else {
       showCard.style.display = "none";
     }
};

//Resetting Form on Landing Page
function newForm () {
  event.preventDefault();
  timeForm.style.display = "block";
  timeForm.reset();
  newAct.style.visibility = "hidden";
  timerShow.style.display = "none";
  log === false;
  if (study === true) {
    selectMeditate.classList.remove("disabled");
    selectExercise.classList.remove("disabled");
    selectStudy.classList.remove("li-study");
    selectStudy.classList.add("study");
    picStudy.src ="assets/study.svg";
    study === false;
  }
  if (exercise === true) {
    selectMeditate.classList.remove("disabled");
    selectStudy.classList.remove("disabled");
    selectExercise.classList.remove("li-exercise");
    selectExercise.classList.add("exercise");
    picExercise.src = "assets/exercise.svg";
    exercise === false;
  }
  if (meditate === true) {
    selectStudy.classList.remove("disabled");
    selectExercise.classList.remove("disabled");
    selectMeditate.classList.remove("li-meditate");
    selectMeditate.classList.add("meditate");
    picMeditate.src = "assets/meditate.svg";
    meditate === false;
  }
};
