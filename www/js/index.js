/*
    Fichier : index.js
    But : Gérer la page d'accueil
    Auteur : DIDELOT Tim
    Date de dernière modification : 20/01/2025
*/

// Voir https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    /*
    TODO : 
        - get la bonne action du jour
        - get les infos utilisateurs s'il est connecté (pour le sweet streak notament)
        - afficher la bonne action du jour
        - afficher le sweet 
    */
}

document.getElementById("acceptBtn").addEventListener("click", acceptChallenge);
document.getElementById("denyBtn").addEventListener("click", refuseChallenge);

function acceptChallenge() {
    var acceptBtn = document.getElementById("acceptBtn");
    var denyBtn = document.getElementById("denyBtn");
    acceptBtn.classList.add("accepted");
    denyBtn.classList.add("accepted");
}

function refuseChallenge() {
    var acceptBtn = document.getElementById("acceptBtn");
    var denyBtn = document.getElementById("denyBtn");
    acceptBtn.classList.add("refused");
    denyBtn.classList.add("refused");
}