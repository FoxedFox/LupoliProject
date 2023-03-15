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
effect:'fade',
loop:true,
autoplay:{
    delay: 9300,
    disableOnInteraction: false
},


pagination:{
 el:'.swiper-pagination',
clickable: true,
},

});


/* ПК-слайдер с брендами*/
new Swiper(".BrendSwiper", {
       
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
var footeremail = document.getElementById("footeremail")

var closefbc = document.getElementById("closefb");
var closefbcall = document.getElementById("closefbcall");
var closefbemail = document.getElementById("closefbemail");

orderbtn.onclick = function() {
  feedback.style.display = "flex",
  feedback.style.visibility = "visible",
  feedback.style.background=  "rgba(0, 165, 196, 0.1))",
  mainpage.style.filter = "blur(8px)",
  sidebar.style.filter = "blur(8px)",
  feedback.style.filter = "none";
  $('#TB_overlay').css('visibility','visible');
  $('#TB_overlay').css('background-color','rgb(0,165,196)');
  $('#TB_overlay').css('opacity','0.1');
  $('#sidebar').css('background-color','rgb(230,246,249)');

}
callbtn.onclick = function() {
  callfeedback.style.display = "flex",
  callfeedback.style.visibility = "visible",
  mainpage.style.filter = "blur(8px)",
 sidebar.style.filter = "blur(8px)",
  feedback.style.filter = "none";
  $('#TB_overlay').css('visibility','visible');
  $('#TB_overlay').css('background-color','rgb(0,165,196)');
  $('#TB_overlay').css('opacity','0.1');
  $('#sidebar').css('background-color','rgb(230,246,249)');
}
emailbtn.onclick = function() {
  emailfeedback.style.display = "flex",
  emailfeedback.style.visibility = "visible",
  mainpage.style.filter = "blur(8px)",
sidebar.style.filter = "blur(8px)",
  feedback.style.filter = "none";
  $('#TB_overlay').css('visibility','visible');
  $('#TB_overlay').css('background-color','rgb(0,165,196)');
  $('#TB_overlay').css('opacity','0.1');
  $('#sidebar').css('background-color','rgb(230,246,249)');

}
footeremail.onclick = function() {
  emailfeedback.style.display = "flex",
  emailfeedback.style.visibility = "visible",
  mainpage.style.filter = "blur(8px)",
sidebar.style.filter = "blur(8px)",
  feedback.style.filter = "none";
  $('#TB_overlay').css('visibility','visible');
  $('#TB_overlay').css('background-color','rgb(0,165,196)');
  $('#TB_overlay').css('opacity','0.1');
  $('#sidebar').css('background-color','rgb(230,246,249)');
}


closefbc.onclick = function() {
  feedback.style.display = "none",
 feedback.style.visibility = "hidden",
  emailfeedback.style.display = "none",
  emailfeedback.style.visibility = "hidden",
    feedback.style.display = "none",
    feedback.style.visibility = "hidden",
  sidebar.style.filter = "none",
   mainpage.style.filter = "none";
   $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#sidebar').css('background-color','white');
}

closefbcall.onclick = function() {
  callfeedback.style.display = "none",
  callfeedback.style.visibility = "hidden",
   sidebar.style.filter = "none",
   mainpage.style.filter = "none";
   $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#sidebar').css('background-color','white');
}

closefbemail.onclick = function() {
    emailfeedback.style.display = "none",
   emailfeedback.style.visibility = "hidden",
   sidebar.style.filter = "none",
   mainpage.style.filter = "none";
   $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#sidebar').css('background-color','white');
}

window.onclick = function(event) {
  if (event.target == feedback || event.target == emailfeedback || event.target == callfeedback) {
    callfeedback.style.display = "none",
     emailfeedback.style.display = "none",
    feedback.style.display = "none",
     sidebar.style.filter = "none",
     mainpage.style.filter = "none";
     $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#sidebar').css('background-color','white');
  }
}
/* многоуровневое меню*/

$('#sidebar_services').hover(
    function(){
       
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
       // $('#sidebar_services_secondlevel_block').css('left','20vw');
        $('#sidebar_services_secondlevel_block').css('transform','translate3d(100%,0,0)');
        $('#sidebar_services_secondlevel_block').css('opacity','1');
    },

    function(){
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
        //$('#sidebar_services_secondlevel_block').css('left','0vw');
        $('#sidebar_services_secondlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_services_secondlevel_block').css('opacity','0.7');
    }
);

$('#sidebar_services_secondlevel_block').hover(
    function(){
        $('#sidebar_services_secondlevel_block').css('transform','translate3d(100%,0,0)');
        $('#sidebar_services_secondlevel_block').css('opacity','1');
        //$('#sidebar_services_secondlevel_block').css('left','20vw');
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
    },
    function(){
        $('#sidebar_services_secondlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_services_secondlevel_block').css('opacity','0.7');
        //$('#sidebar_services_secondlevel_block').css('left','0vw');
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
    }
);


$('#sidebar_production').hover(
    function(){
       
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(100%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','1');
    },
    function(){
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','0.7');

    }
);

$('#sidebar_production_secondlevel_block').hover(
    function(){
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(100%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','1');
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
    },
    function(){
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','0.7');
         $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
    }
);

/* третий уровень меню*/
$('#sidebar_boxes').hover(//#sidebar_boxes_thirdlevel_block
    function(){
       
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
        $('#sidebar_boxes_thirdlevel_block').css('transform','translate3d(200%,0,0)');
        $('#sidebar_boxes_thirdlevel_block').css('opacity','1');
    },
    function(){
        
        $('#sidebar_boxes_thirdlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_boxes_thirdlevel_block').css('opacity','0');
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
    }
);

$('#sidebar_boxes_thirdlevel_block').hover(//#sidebar_production_secondlevel_block #sidebar_boxes_thirdlevel_block
    function(){
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(100%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','1');
        $('#sidebar_boxes_thirdlevel_block').css('transform','translate3d(200%,0,0)');
        $('#sidebar_boxes_thirdlevel_block').css('opacity','1');
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
    },

    function(){
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','0.7');
        $('#sidebar_boxes_thirdlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_boxes_thirdlevel_block').css('opacity','0');
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
         
    }
);


$('#sidebar_pockets').hover(
    function(){
       
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
        $('#sidebar_pockets_thirdlevel_block').css('transform','translate3d(200%,0,0)');
        $('#sidebar_pockets_thirdlevel_block').css('opacity','1');
    },
    function(){
        $('#sidebar_pockets_thirdlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_pockets_thirdlevel_block').css('opacity','0');
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
    }
);

$('#sidebar_pockets_thirdlevel_block').hover(
    function(){
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(100%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','1');
        $('#sidebar_pockets_thirdlevel_block').css('transform','translate3d(200%,0,0)');
        $('#sidebar_pockets_thirdlevel_block').css('opacity','1');
        $('#TB_overlay').css('visibility','visible');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0.1');
        $('#mainer').css('filter','blur(8px)');
        $('#mySwiperb').css('filter','blur(8px)');
    },
    function(){
        $('#sidebar_production_secondlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_production_secondlevel_block').css('opacity','0.7');
        $('#sidebar_pockets_thirdlevel_block').css('transform','translate3d(0%,0,0)');
        $('#sidebar_pockets_thirdlevel_block').css('opacity','0');
        $('#TB_overlay').css('visibility','hidden');
        $('#TB_overlay').css('background-color','rgb(0,165,196)');
        $('#TB_overlay').css('opacity','0');
        $('#mainer').css('filter','none');
        $('#mySwiperb').css('filter','none');
             }
);

/*     */




/*ценок*/
};



