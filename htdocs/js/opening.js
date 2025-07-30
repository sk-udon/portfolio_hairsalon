'use strict';
//オープニング画面
function loadedPage() {
    const loadingID = document.getElementById( 'js-loading' );
    loadingID.classList.add( 'loaded' );
}

const topView = document.querySelectorAll( '#topView__items' );

const topTitle = document.querySelector( '#topView__title' );

const body = document.querySelector('body');

 body.style.overflowY = 'hidden';

 setTimeout( function(){
    body.style.overflowY = null;
 }, 4000);


if(!sessionStorage.getItem( 'visited' )) {
    sessionStorage.setItem( 'visited', 'first' );
    window.addEventListener( 'load', function() {
        setTimeout( loadedPage, 8000 );
    });
    //setTimeout( loadedPage, 5000 );
}else {
    loadedPage();

    body.style.overflowY = null; //スクロール固定を無くす
    
    for (let i = 0; i < topView.length; i++){
        topView[i].classList.remove('topView__item');
        let count = i + 1;
        topView[i].classList.add( `topView__item${count}`); //top画像それぞれにクラスを振る
    }
    topTitle.classList.remove( 'topView__title' );
    topTitle.classList.add( 'topView__title_Re' );

    
}