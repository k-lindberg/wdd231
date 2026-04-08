import {descriptions} from '../data/activities.mjs'

const dialogBox = document.querySelector('#dialogBox');
const activity = document.querySelector('#dialogBox h3');
const desc = document.querySelector('#dialogBox p');
const closeButton = document.querySelector('#closeButton');

function openModal(index) {
    const info = descriptions[index];
    activity.textContent = info.activity;

    desc.textContent = info.desc;
            
    dialogBox.showModal();
}

document.querySelector('#openButton1').addEventListener('click', () => openModal(0));
document.querySelector('#openButton2').addEventListener('click', () => openModal(1));
document.querySelector('#openButton3').addEventListener('click', () => openModal(2));
document.querySelector('#openButton4').addEventListener('click', () => openModal(3));
document.querySelector('#openButton5').addEventListener('click', () => openModal(4));
document.querySelector('#openButton6').addEventListener('click', () => openModal(5));
document.querySelector('#openButton7').addEventListener('click', () => openModal(6));
document.querySelector('#openButton8').addEventListener('click', () => openModal(7));

closeButton.addEventListener('click', () => {
    dialogBox.close();
});