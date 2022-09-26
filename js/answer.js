let close = document.querySelector('.calculator-popup-dismis');
let calculate = document.querySelector('.sub-button');
let shipNow = document.querySelector('.main-button');
let testModal = document.querySelector('#test-modal')
let answer = '';


testModal.addEventListener('click', function (e){
    let target = e.target
    if(target===close){
        answer = 'close-modal'
    }
    else if(target===calculate){
        answer = 'calculate'
    }
    else if(target===shipNow){
        answer = 'ship-now'
    }

})
window.addEventListener('message', function (e){
    if(e.origin == 'http://accounting-mash.westeurope.cloudapp.azure.com/aspnet_client/site/'){
        e.source.postMessage(answer, e.origin)
    }
    else return
  
})