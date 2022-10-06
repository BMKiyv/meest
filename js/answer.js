let closeButton = document.querySelector('.calculator-popup-dismis');
let calculate = document.querySelector('.sub-button');
let shipNow = document.querySelector('.main-button');

closeButton.addEventListener('click', function () {
    let url = window.locaction != window.parent.location ? document.referrer : document.location.href
    window.parent.postMessage('close-modal', url);
});

calculate.addEventListener('click', function () {
    let url = window.locaction != window.parent.location ? document.referrer : document.location.href
    window.parent.postMessage('close-modal', url);
});

shipNow.addEventListener('click', function () {
    let url = window.locaction != window.parent.location ? document.referrer : document.location.href
    window.parent.postMessage('close-modal', url);
});