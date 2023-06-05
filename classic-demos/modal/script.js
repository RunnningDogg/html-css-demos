'use strict';

const btns = document.querySelectorAll('.show-modal')

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener('click', function () {
    console.log(1)
    const modal = document.querySelector('.modal')
    modal.classList.toggle('hidden')
    const overlay = document.querySelector('.overlay')
    overlay.classList.toggle('hidden')
  })
}

const close_modal = document.querySelector('.close-modal')
close_modal.addEventListener('click', function () {
  const modal = document.querySelector('.modal')
  modal.classList.toggle('hidden')
  const overlay = document.querySelector('.overlay')
  overlay.classList.toggle('hidden')
})