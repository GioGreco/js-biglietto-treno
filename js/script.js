"use strict";
let tripDistance = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
let passengerAge = parseInt(prompt('Quanti anni hai?'));
const costPerKm = 0.21;

if(isNaN(passengerAge) || isNaN(tripDistance)){
    alert('Devi inserire tutti i dati in formato numerico!');
}

if(passengerAge < 18){
    let ticketPrice = ((costPerKm * tripDistance) / 100) * 80;
    console.log(ticketPrice.toFixed(2));
    let price = `<p>Journey Price</p> € ${ticketPrice.toFixed(2)}`;
    let par3 = document.getElementById('ticket-price');
    par3.innerHTML = price;
}
else if(passengerAge > 65){
    let ticketPrice = ((costPerKm * tripDistance) / 100) * 60;
    console.log(ticketPrice.toFixed(2));
    let price = `<p>Journey Price</p> € ${ticketPrice.toFixed(2)}`;
    let par3 = document.getElementById('ticket-price');
    par3.innerHTML = price;
}
else{
    let ticketPrice = costPerKm * tripDistance;
    console.log(ticketPrice.toFixed(2));
    let price = `<p>Journey Price</p> € ${ticketPrice.toFixed(2)}`;
    let par3 = document.getElementById('ticket-price');
    par3.innerHTML = price;
};

let distance = `<p>Distance</p> ${tripDistance} km`;
let age = `<p>Your Age</p> ${passengerAge} y/o`;

let par1 = document.getElementById('trip-length');
let par2 = document.getElementById('passenger-age');

par1.innerHTML = distance;
par2.innerHTML = age;