(function(){

    "use strict";
    const body = document.querySelector('body');
    const openModalButton = document.querySelector('[data-modal-target]');
    const closeModalButton = document.querySelector('[data-close-button]');
    const overlay = document.getElementById('overlay');

    openModalButton.addEventListener('click', function(event){
        event.preventDefault();
        body.style.overflow = "hidden";
        const modal = document.querySelector('#modal');
        openModal(modal);
    });

    closeModalButton.addEventListener('click', function(){
        const modal = closeModalButton.closest('.modal');
        closeModal(modal);
    });

    function openModal(modal){
        if(modal == null) return
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal){
        if(modal == null) return
        modal.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = "auto";
    }

    overlay.addEventListener('click', function(){
        const modal = document.querySelector('.modal.active');
        closeModal(modal);
    });
    
})();