'use strict';
//ハンバーガー
const ham = document.querySelector( '#js-hamburger' );
const nav = document.querySelector( '#js-nav' );
const target = document.getElementsByClassName( 'target' );

for( const item of target){

    item.addEventListener( 'click', function () {
    ham.classList.toggle( 'is--active' );
    nav.classList.toggle( 'is--active' );
})
};

//フェードイン

const fadeInTarget = document.getElementsByClassName( 'fadeInUp' );
const windowHeight = window.innerHeight;

function fadeIn(){
    for( const item of fadeInTarget ){
        const contentHeight = item.getBoundingClientRect().top;
        if( contentHeight < windowHeight ){
            item.classList.add( 'fadeIn' );
        }
    }
}
fadeIn();

window.addEventListener( 'scroll', fadeIn );

//スクロールされたら表示、footerまで来たら非表示

let footer = document.querySelector( 'footer' );
const circle = document.querySelector( '.circle' );
const footerHeight = footer.offsetTop;
//console.log(footerHeight);
const wH = window.innerHeight;
window.addEventListener( 'scroll', function(){
    const scroll = window.scrollY;
    

    if( scroll > 200 ) {
        circle.style.opacity = "1";
    }else {
        circle.style.opacity = "0";
    };
    if( scroll + wH >= ( footerHeight - 20 )) {
        circle.style.opacity = "0";
        circle.style.display = "none";
    }else {
        circle.style.opacity = "1";
        circle.style.display = "block";
    }
});




