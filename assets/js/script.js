// Dislay the current day at the top of the calender when a user opens the planner.

function displayTime() {
  $("#currentDay").text(dayjs().format("dddd MMMM D"));
}

setInterval(displayTime, 1000);

// Color-code each timeblock based on past, present, and future when the timeblock is viewed

function updateColors() {
  var currentTime = dayjs();
  // Select all elements with the class 'timeBlock'
  var timeBlocks = document.querySelectorAll(".time-block");
  // Loop through each time block
  timeBlocks.forEach(function (timeBlock) {
    var blockTime = dayjs().hour(timeBlock.getAttribute("id"));

    // Add the appropriate class based on the current time
    if (currentTime > blockTime) {
      timeBlock.classList.add("past");
    } else if (currentTime < blockTime) {
      timeBlock.classList.add("future");
    } else {
      timeBlock.classList.add("present");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateColors();
});

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page
