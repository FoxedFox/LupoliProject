window.onload = function(){ 
   /* ВЕРТИКАЛЬНОЕ МЕНЮ*/
$(function() {
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
    $("#nav-icon4").click(function() {
  var $self = $("#nav-icon4");
  $(".pagenav > ul").slideToggle(function() {
  });
});
});

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

/*ОСНОВНОЙ СЛАЙДЕР*/
new Swiper(".mySwiper", {
        navigation:{
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'
    },
pagination:{
 el:'.swiper-pagination',
clickable: true,
},

});


/* ПК-слайдер с брендами*/
new Swiper(".BrendSwiper", {
        navigation:{
            /* добавление кнопок*/
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'},
/*количество слайдов показывает*/
slidesPerView: 6,
spacebetween: 1,
/*бесконечность*/
loop:true,
/*автопрокрутка*/
autoplay:{
    delay: 3000,
    disableOnInteraction: false
},
/* скорость */
speed: 2000,
/*количество слайдов на определенных размерах экрана*/
breakpoints: {

    320:{
        slidesPerView: 2,
    },
     480:{
        slidesPerView: 2.5,
    },
     768:{
        slidesPerView: 2.7,
    },

    960:{
        slidesPerView: 3,
    },
    1030:{
        slidesPerView: 3,
    },
    1100:{
        slidesPerView:3,
    },
    1225:{
        slidesPerView:4,
    },
    1350:{
        slidesPerView:5,
    }
},
slideToClickedSlide: true,

initialSlide: Math.floor(Math.random()*15),

});

/* несчастная растяжка картинок слайдера по размеру экрана*/
document.getElementById('div_registerA').style.width='80vw';
document.getElementById('div_registerA').style.height='100vh';
document.getElementById('div_registerB').style.width='80vw';
document.getElementById('div_registerB').style.height='100vh';
document.getElementById('div_registerC').style.width='80vw';
document.getElementById('div_registerC').style.height='100vh';

/*БЛОК ОБРАТНОЙ СВЯЗИ ОТКРЫТИЕ/ЗАКРЫТИЕ*/
// Get the modal
var mainpage = document.getElementById("maincontainer");
var feedback = document.getElementById("feedbackblock");
var emailfeedback = document.getElementById("feedbackemailblock");
var callfeedback = document.getElementById("feedbackcallblock");
var sidebar =  document.getElementById("sidebar");

var orderbtn = document.getElementById("MyOrderButton");
var callbtn = document.getElementById("MyCallButton");
var emailbtn = document.getElementById("MyEmailButton");

var closefbc = document.getElementById("closefb");
var closefbcall = document.getElementById("closefbcall");
var closefbemail = document.getElementById("closefbemail");

orderbtn.onclick = function() {
  feedback.style.display = "flex",
  mainpage.style.filter = "blur(5px)",
  sidebar.style.filter = "blur(5px)",
  feedback.style.filter = "none";
}
callbtn.onclick = function() {
  callfeedback.style.display = "flex",
  mainpage.style.filter = "blur(5px)",
 sidebar.style.filter = "blur(5px)",
  feedback.style.filter = "none";
}
emailbtn.onclick = function() {
  emailfeedback.style.display = "flex",
  mainpage.style.filter = "blur(5px)",
sidebar.style.filter = "blur(5px)",
  feedback.style.filter = "none";
}
closefbc.onclick = function() {
  feedback.style.display = "none",
  emailfeedback.style.display = "none",
    feedback.style.display = "none",
  sidebar.style.filter = "none",
   mainpage.style.filter = "none";
}

closefbcall.onclick = function() {
  callfeedback.style.display = "none",
   sidebar.style.filter = "none",
   mainpage.style.filter = "none";
}

closefbemail.onclick = function() {
    emailfeedback.style.display = "none",
   sidebar.style.filter = "none",
   mainpage.style.filter = "none";
}

window.onclick = function(event) {
  if (event.target == feedback || event.target == emailfeedback || event.target == callfeedback) {
    callfeedback.style.display = "none",
     emailfeedback.style.display = "none",
    feedback.style.display = "none",
     sidebar.style.filter = "none",
     mainpage.style.filter = "none";
  }
}


$('#sidebar_services').hover(
    function(){
        $('#TB_overlay').css('display','block');
        $('.secondlevelmenu').css('left','20vw');
    },
    function(){
        $('#TB_overlay').css('display','none');
        $('.secondlevelmenu').css('left','0vw');
    }
);



/*     */




/*ценок*/
};



