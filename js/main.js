const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){ //scroll위치가 500크면?
        //배지 보이기
        // gsap.to(요소, 시간, 옵션);
        gsap.to(badgeEl, .6,{
            opacity:0,
            display:'none'//<css값의 문자열은 ''안에다 표시해야한다.
        } )
    }else{
        //배지 숨기기
        gsap.to(badgeEl, .6,{
            opacity:1,
            display:'block'
        } )
    }
},300));
// _.thottle(함수, 시간) <쓰는 이유는 함수를 초당 발생시키는데 이것으로 
//브라우저가 무거워질수도잇다. 그래서 thottle을 사용하여 시간설정을 두고 함수를 발생시키게 하는것

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // gsap.to(요소, 시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index +1 ) *.7,
        opacity:1,
    })
    
});


// new Swiper(선택자, 옵션};
new Swiper('.notice-line .swiper', {
    direction:'vertical',
    autoplay:true,
    loop:true
});

new Swiper('.promotion .swiper', {
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    
});

