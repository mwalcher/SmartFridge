(function(){

  var time = document.querySelector("#clock");
  var maintime = document.querySelector("#mainClock");
  var t = true;

  function updateClock(){
    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    var currentTimeString;
    var currentTimeStringMain;

    if(t){
      // Choose either "AM" or "PM" as appropriate
      var timeOfDay = (currentHours < 12) ? "AM" : "PM";
      // Convert the hours component to 12-hour format
      currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
      // Convert an hours component of "0" to "12"
      currentHours = (currentHours === 0) ? 12 : currentHours;
      // Compose the string for display
      currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
      currentTimeStringMain = currentHours + ":" + currentMinutes + " " + timeOfDay;
    }else{
      // Compose the string for display
      currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
      currentTimeStringMain = currentHours + ":" + currentMinutes;
    }

    // Update the time display
    time.innerHTML = currentTimeString;
    maintime.innerHTML = currentTimeStringMain;
  }

  function switchTime(){
    if(t){
      t = false;
    }else{
      t = true;
    }
  }

  updateClock();
  window.setInterval(updateClock,1000);
  maintime.addEventListener("click", switchTime, false);

})();