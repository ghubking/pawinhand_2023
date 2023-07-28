// 1. 모바일 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체.속성 style.display = 'none'

// 2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴 m_nav, 모바일 메뉴 m_nav_open
//속성 = 보이기
//이벤트 = 클릭시
//메소드 = 실행함수

// 3. x 버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x버튼 close, 모바일 메뉴 m_nav_open
//변수생성

const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력 확인 에러메시지 또는 null, undefined 주의
console.log(m_nav_open, m_nav, close);
//1.모바일 메뉴 숨기기
m_nav_open.style.display = 'none';

//2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
//객체.이벤트
m_nav.addEventListener('click', function(){  // 햄버거 메뉴 클릭시(객체.메소드(이벤트,힘수))
    m_nav_open.style.display = 'block';      // 모바일 메뉴 보이기(객체.속성.속성=값)
})

//3. x버튼 클릭 시 모바일 메뉴 숨기기
close.addEventListener('click', function(){ // x 버튼 클릭시
    m_nav_open.style.display = 'none';      // 모바일 메뉴 숨기기 
})

// main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:3000,  // 슬라이드 간격(밀리초) 기본3초 자동재생
        disableOnInteraction:false,  //버튼 클릭 후 자동재생 유지
    },   
    loop:true,    // 자연스럽게 한방향으로만
    //direction:'vertical'   //수직방향
    effect:'fade', //제자리 변경 슬라이드효과
    navigation: { //next,prev 객체 연결시 부모를 안적으면 body안에 있는 모든 swiper 틀을 인식하기때문에
                  //개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',    //네비게이션 버튼
        prevEl: '#pawin_slide .swiper-button-prev',
      },
});
const entia_slide = new Swiper('#entia_slide',{
    autoplay:{delay:1000}, loop:true, direction:'vertical',
    navigation: {
        nextEl: '#entia_slide .swiper-button-next',
        prevEl: '#entia_slide .swiper-button-prev',
      },
});