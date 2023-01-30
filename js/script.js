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
/*ОСНОВНОЙ СЛАЙДЕР*/
new Swiper(".mySwiper", {
        navigation:{
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'
    }});

new Swiper(".BrendSwiper", {
        navigation:{
            /* добавление кнопок*/
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'},
/*количество слайдов показывает*/
slidesPerView: 6,
spacebetween: 30,
/*бесконечность*/
loop:true,
/*автопрокрутка*/
autoplay:{
    delay: 1000,
    disableOnInteraction: false
},
/* скорость */
speed: 1000
});



/*БЛОК ОБРАТНОЙ СВЯЗИ ОТКРЫТИЕ/ЗАКРЫТИЕ*/
// Get the modal
var feedback = document.getElementById("feedbackblock");
var orderbtn = document.getElementById("MyOrderButton");

var callbtn = document.getElementById("MyCallButton");
var emailbtn = document.getElementById("MyEmailButton");

var closefbc = document.getElementById("closefb");

orderbtn.onclick = function() {
  feedback.style.display = "flex";
}
callbtn.onclick = function() {
  feedback.style.display = "flex";
}
emailbtn.onclick = function() {
  feedback.style.display = "flex";
}
closefbc.onclick = function() {
  feedback.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == feedback) {
    feedback.style.display = "none";
  }
}

/*     */




/*ценок*/
};



