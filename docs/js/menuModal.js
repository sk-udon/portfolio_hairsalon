'use strict';

const btn = document.getElementsByClassName( 'modal-btn' );
console.log(btn);
const menuModal = document.getElementById( 'menu-modal' );
console.log( menuModal);
for (let item of btn){
	item.addEventListener( 'click', function(){
	menuModal.style.display = "block";
});
};

const closeBtn = document.querySelector('.modal-close');
console.log( closeBtn);
closeBtn.addEventListener('click', function(){
	menuModal.style.display = "none";
});