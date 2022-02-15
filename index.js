let dateHeading = document.getElementById("date_heading");
let min = new Date().getMinutes();
let hours = new Date().getHours();
let seconds = new Date().getSeconds();
let daytime = "AM";
let day = new Date().getDay();

let a = Array.from(document.querySelectorAll(".daytag"));
a[day - 1].style.backgroundColor = "rgb(55, 55, 55)";

const daysArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  seconds = new Date().getSeconds();
  min = new Date().getMinutes();
  hours = new Date().getHours();

  if (hours > 12) {
    hours -= 12;
    daytime = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  dateHeading.innerHTML = `${hours}:${min}:${seconds} ${daytime} ${
    daysArray[day - 1]
  }`;
}, 1000);
