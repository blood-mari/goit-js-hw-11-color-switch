import './sass/main.scss'

import colors from './js/colors'

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector("[data-action='stop']");

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onSwitch = () => {
  body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const onChangeStart = () => {
  stopBtn.addEventListener('click', onChangeStop, { once: true });
  intervalId = setInterval(onSwitch, 1000);
  startBtn.textContent = "Click Stop!";
}

const onChangeStop = () => {
  clearInterval(intervalId);
  startBtn.addEventListener('click', onChangeStart, { once: true });
  startBtn.textContent = "Start";
}

startBtn.addEventListener('click', onChangeStart, { once: true });
