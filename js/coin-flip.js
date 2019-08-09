'use strict'

const max = 1000000;

function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n){
    var result = 0;
    for(var i = 0; i < n; i++){
        if(flip()){
            result ++;
        }
    }
    return result ;
}

window.addEventListener('load', function () {
    var start = document.querySelector('#start');

    start.addEventListener('click', function () {
        var n = document.querySelector('#number').value;
        var alert = document.querySelector('#alert');
        var alertText = document.querySelector('#alert-text');
        var result = document.querySelector('#result');

        if(n > 0 && n < max){
            result.textContent = randomNumber(n);
            alert.textContent = "";
            alertText.textContent = "";
        }
        else{
            result.textContent = "#";
            alert.textContent = "Error !";
            alertText.textContent = "The number must be between 0 and 1,000,000";
        }
    });


});