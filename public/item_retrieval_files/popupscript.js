"use strict";
const body = document.querySelector('body');
const modal = document.getElementById("modal")
const openModalButton = document.getElementById('get-btn');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');  
function showPop(){
    overlay.style = "display:block;pointer-events:all";
    body.style.overflowY = "hidden";   
    modal.style = "transform: translate(-50%, -50%) scale(1);pointer-events:all";         
}
showPop(); 
// closeModalButton.addEventListener('click', ()=>{
//     modal.style = "transform: translate(-50%, -50%) scale(0);pointer-events:all"
//     body.style.overflowY = "auto";
//     overlay.style = "display:none";
// });

// overlay.addEventListener('click', ()=>{
//     modal.style = "transform: translate(-50%, -50%) scale(0);pointer-events:all"
//     body.style.overflowY = "auto";
//     overlay.style = "display:none";
// })
