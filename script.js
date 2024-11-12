'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//THE MORE YOU KNOW: Here, adding () calls the function immediately when the code is executed, not when the event occurs. JavaScript will execute closeModal right away, add the result (in this case, undefined because closeModal doesn't return anything) to addEventListener, and thus won’t correctly attach the function as a listener. So, instead of triggering closeModal on click, it runs immediately and does nothing on subsequent clicks.

// Summary
// closeModal (without ()): Passes the function itself to addEventListener, so it runs only when the event occurs.
// closeModal() (with ()): Calls the function immediately, which is not what we want for event-driven code.

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
