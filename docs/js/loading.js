//ローディング画面
const load = document.querySelector('.loading__page');
const main = document.querySelector('main');
const body = document.querySelector('body');
//console.log(body);

body.style.overflowY = 'hidden'; //スクロールできないようにする

window.addEventListener('load', () => {
    
    setTimeout(function() {
        load.classList.add('loaded'); 
        main.classList.add('lower__main'); //表示するときのopacityのアニメーション用
    }, 1000);
    
    setTimeout(function() {
        body.style.overflowY = null; //スクロールできるようにする
    },800);

   
});