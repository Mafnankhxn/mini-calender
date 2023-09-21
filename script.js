const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();
console.log(today)

const weekdays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
monthsofyear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


date.textContent = today.getDate();
day.textContent = weekdays[today.getDay()];
month.textContent = monthsofyear[today.getMonth()];
year.textContent = today.getFullYear();

// date.innerHTML = newdate.getDate();

