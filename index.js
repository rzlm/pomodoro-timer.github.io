
var timestarted = false;
var time = 25;

var submitTime =  document.getElementById("submitTime");
var timeOptions =  document.getElementById("timeoptions");
submitTime.addEventListener("click", function (){
    time = timeOptions.value;
    console.log(time)
    document.getElementById("time").innerHTML =  "0:" + String(time) + ":00" ;

    return time;

});

var audio = new Audio('alarm.mp3');


var interval;
function setTimer() {

    var input = time  //25 minutes
    var currentTime = new Date().getTime();
    var targetTime = input *1000*60 + currentTime;

    var interval = setInterval(function() {
        if (timestarted) {
            var now = new Date().getTime();
            var distance = targetTime - now;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
            document.title = innerHTML = hours + ":" + minutes + ":" + seconds;
                if (distance <= 0) {
                    document.getElementById("time").innerHTML = "Time's up!";
                    audio.play();
                    clearInterval(interval);
                }
            
        }

        
    }, 1000);
    timestarted = true;

}
const startbtn = document.getElementById("start-btn");
startbtn.addEventListener("click", function() {
    if (document.getElementById("start-btn").innerHTML == "start") {
        document.getElementById("start-btn").innerHTML = "pause";
        if (!timestarted) {
            setTimer()
        }
    } else {
        document.getElementById("start-btn").innerHTML = "start";
    }

});
/* function stopTimer() {
    document.getElementById("time").innerHTML = "0:25:00";
    if (timestarted) {
        clearInterval(interval);
        timestarted = false;
    }
} */
//if the time has started, and 
document.addEventListener("DOMContentLoaded", function () {
    var restartbtn = document.getElementById("restart");
    restartbtn.addEventListener("click", function () {
        document.getElementById("start-btn").innerHTML = "start";
        if (timestarted) {
            clearInterval(interval);
            timestarted = false;
            document.getElementById("time").innerHTML = "0:25:00";
        }
    });
});







//prevent user from starting multiple timers
//fix the time 



var modal = document.getElementById("modal");

// Get the button that opens the modal
var modalbtn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

modalbtn.onclick = function() {
    modal.showModal();
}

span.onclick = function() {
    modal.close();
} 

window.onclick = function(event) {
    if (event.target == modal) {
      modal.close();
    }
  }

  //MODAL DROPDOWNS
  var fallforest = document.getElementById("fallforest");
  fallforest.addEventListener("click", function () {
    console.log("working")
    document.body.style.backgroundImage= "url(assets/fallforest.jpg)"

  });

  var brightcity = document.getElementById("brightcity");

  brightcity.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/brightcity.jpg)"

  });

  var train = document.getElementById("train");
  train.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/train.jpg)"

  });


  var lightning = document.getElementById("lightning");
  lightning.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/lightning.jpg)"

  });

  var canyon = document.getElementById("canyon");
  canyon.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/canyon.jpg)"

  });

  var desert = document.getElementById("desert");
  desert.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/desert.jpg)"

  });
  var skyline = document.getElementById("skyline");
  skyline.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/skyline.jpg)"

  });
  var hiking = document.getElementById("hiking");
  hiking.addEventListener("click", function () {
    document.body.style.backgroundImage= "url(assets/hiking.jpg)"

  });


var changebg = document.getElementById("changebg");
changebg.addEventListener("click", function() {
    var dropdown = document.getElementById("bg-dropdown");
    dropdown.style.display="block";
}); 

var changeTime = document.getElementById("changeTime");
changeTime.addEventListener("click", function() {
    var dropdown = document.getElementById("t-dropdown");
    console.log("HII")
    dropdown.style.display="block";
}); 

var changesound = document.getElementById("changeSound");
changesound.addEventListener("click", function() {
    var dropdown = document.getElementById("s-dropdown");
    dropdown.style.display="block";
}); 