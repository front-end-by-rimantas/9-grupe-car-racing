"use strict";

const moveBy = 20,
    car1 = document.getElementById('car1'),
    car2 = document.getElementById('car2'),
    trackLength = parseInt(getComputedStyle( document.querySelector('.track') ).width) - 200;

    console.log( trackLength );
    

// stebime klavieturos paspaudimus (w, o)
window.addEventListener('keyup', moveCar);

function moveCar( event ) {
    let car1Position = parseInt(getComputedStyle(car1).marginLeft) + moveBy,
        car2Position = parseInt(getComputedStyle(car2).marginLeft) + moveBy;
    
    // issiaiskinti kuris mygtukas (masina) buvo paspaustas
    if ( event.keyCode === 87 ) {
        car1.style.marginLeft = car1Position + 'px';
    }
    if ( event.keyCode === 79 ) {
        car2.style.marginLeft = car2Position + 'px';
    }
    
    // tikriname ar kuri nors masina kirto finiso linija
    if ( car1Position >= trackLength ) {
        alert('Pirma masina laimejo!');
    }
    if ( car2Position >= trackLength ) {
        alert('Antra masina laimejo!');
    }

    return;
}