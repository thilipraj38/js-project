const time = document.getElementById('time');
const timeFormat = document.getElementById('timeFormat');
 
document.addEventListener("DOMContentLoaded", () => {
    setInterval(displayTime, 1000)
});
function displayTime() {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr < 10 ? `0${hr}` : hr;
    min = min <10 ? `0${min}` :min;
    sec = sec < 10 ? `0${sec}` :sec;

    time.innerHTML = `${hr}:${min}:${sec}`;
    timeFormat.innerHTML = hr>12 ? "PM" : "AM";
}
