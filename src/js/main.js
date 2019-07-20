"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const addButton = document.querySelector('.buttonAdd--js');

const minusButton = document.querySelector('.buttonSubstract--js');

const resetButton = document.querySelector('.buttonReset--js');





 
var numberGlass = document.querySelector('.glass__number--js').innerHTML;


addButton.addEventListener('click', (e) =>{

  numberGlass++;
  document.querySelector('.glass__number--js').innerHTML = numberGlass;

});

minusButton.addEventListener('click', (e) =>{

if(numberGlass >0) {

  numberGlass--;
  document.querySelector('.glass__number--js').innerHTML = numberGlass;
} else {

  console.log('nie działa');
}

});
  

resetButton.addEventListener('click', (e) =>{

  numberGlass=0;
  document.querySelector('.glass__number--js').innerHTML = numberGlass;

});