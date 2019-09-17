const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    seconds.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    minutes.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    hours.style.transform = `rotate(${hourDegrees}deg)`;

   

 
}

setInterval(setDate, 1)