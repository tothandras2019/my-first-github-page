/** @format */

`use strict`;

const button = document.querySelector(`.btn--message`);

button.addEventListener(`click`, (e) => {
    e.preventDefault();
    button.textContent = `Thanks for review! 👍 ❤`;
    button.style.fontSize = `30px`;
});