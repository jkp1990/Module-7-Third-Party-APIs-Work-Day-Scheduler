// dislay the current day at the top of the calender when a user opens the planner.
function displayTime() {
  $("#currentDay").text(dayjs().format("dddd MMMM D"));
}
setInterval(displayTime, 1000);

// color-code each timeblock based on past, present, and future when the timeblock is viewed
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

// all the save buttons
var saveButtons = document.querySelectorAll(".saveBtn");

// Save the event in local storage when the save button is clicked in that timeblock.
saveButtons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const id = btn.getAttribute("id");
    const text = document.getElementById(`${id}-textarea`).value;

    localStorage.setItem(id, text);
  });
});

// Persist events between refreshes of a page
function getEvents() {
  saveButtons.forEach((btn) => {
    const id = btn.getAttribute("id");

    const text = localStorage.getItem(id);

    var textarea = document.getElementById(`${id}-textarea`);

    textarea.value = text;
  });
}

// on DOM content loaded - update colours and get events from the calender
document.addEventListener("DOMContentLoaded", function () {
  updateColors();
  getEvents();
});
