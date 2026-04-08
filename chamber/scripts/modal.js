import {levels} from '../data/membership.mjs'

const dialogBox = document.querySelector('#dialogBox');
const title = document.querySelector('#dialogBox h2');
const benefits = document.querySelector('#dialogBox p');
const closeButton = document.querySelector('#closeButton');

function openModal(index) {
    const info = levels[index];
    title.textContent = `${info.level} | ${info.price}`

    benefits.innerHTML = `
        <ul>
            <li>${info.benefit1}</li>
            <li>${info.benefit2}</li>
            <li>${info.benefit3}</li>
            <li>${info.benefit4}</li>
            <li>${info.benefit5}</li>
        </ul>
    `;
            
    dialogBox.showModal();
}

document.querySelector('#openButton1').addEventListener('click', () => openModal(0));
document.querySelector('#openButton2').addEventListener('click', () => openModal(1));
document.querySelector('#openButton3').addEventListener('click', () => openModal(2));
document.querySelector('#openButton4').addEventListener('click', () => openModal(3));

closeButton.addEventListener('click', () => {
    dialogBox.close();
});