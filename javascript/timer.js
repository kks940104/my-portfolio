function updateClock() {
  const now = new Date();

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (360 / 12) * hours + (30 / 60) * minutes;
  const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
  const secondDeg = (360 / 60) * seconds;

  document.querySelector(".hour-hand").style.transform = `rotate(${
    hourDeg - 90
  }deg)`;
  document.querySelector(".minute-hand").style.transform = `rotate(${
    minuteDeg - 90
  }deg)`;
  document.querySelector(".second-hand").style.transform = `rotate(${
    secondDeg - 90
  }deg)`;
}

setInterval(updateClock, 1000);
updateClock();

function createClockNumbers() {
  const clockNumbers = document.querySelector(".clock-numbers");
  for (let i = 1; i <= 12; i++) {
    const numElement = document.createElement("span");
    numElement.textContent = i;

    const angle = (i - 3) * (360 / 12);
    const radius = 40;

    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

    numElement.style.left = `${x}%`;
    numElement.style.top = `${y}%`;

    clockNumbers.appendChild(numElement);
  }
}

// 숫자 배치 실행
createClockNumbers();
