function showClock() {
  const time = new Date();
  const hour = time.getHours(); 
  const minutes = time.getMinutes(); 
  const seconds = time.getSeconds(); 

  // Format time to always show two digits
  const formattedHour = String(hour).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  document.getElementById(
    "clock"
  ).innerHTML = `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
}

showClock();

setInterval(showClock, 1000);
