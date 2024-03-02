document.addEventListener("DOMContentLoaded", function() {
    let displayDays = document.getElementById("days");
    let displayHours = document.getElementById("hours");
    let displayMinutes = document.getElementById("minutes");
    let displaySeconds = document.getElementById("seconds");
    let deadlineText = document.querySelector('.deadline');

    // initializing my timer to 10 days
    displayDays.textContent = "10";
    displayHours.textContent = "00";
    displayMinutes.textContent = "00";
    displaySeconds.textContent = "00";

    // I used this to ensure that the time values are always displayed with two digits, 
    // adding a leading zero if the value is less than 10. 
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    function startTimer() {
        timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        let days = parseInt(displayDays.textContent);
        let hours = parseInt(displayHours.textContent);
        let minutes = parseInt(displayMinutes.textContent);
        let seconds = parseInt(displaySeconds.textContent);

        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    } else {
                        clearInterval(timer);
                        document.getElementById("countdown_text").innerHTML = "You have reached the end of the countdown";
                        return;
                    }
                }
            }
        }

        displayDays.textContent = formatTime(days);
        displayHours.textContent = formatTime(hours);
        displayMinutes.textContent = formatTime(minutes);
        displaySeconds.textContent = formatTime(seconds);
    }

    // Debugging: Check if targetDate is correctly set
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);
    console.log("Target Date:", targetDate);

    // Call startTimer when page loads
    startTimer();

    // Debugging: Check if endDate is correctly calculated
  
    // Debugging: Check if endDate is correctly calculated
    const endDate = targetDate.toLocaleDateString('en-US', { weekday: "long", day: "numeric", year: "numeric" });
    console.log("End Date:", endDate);


    // Set the end date of the giveaway in the <h3> element
    deadlineText.innerHTML = "Giveaway ends on " + endDate;
});
