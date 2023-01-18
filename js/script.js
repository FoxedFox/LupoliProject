window.onload = function(){ 
   
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


// Get the modal
var feedback = document.getElementById("feedbackblock");

// Get the button that opens the modal
var orderbtn = document.getElementById("MyOrderButton");

var closefbc = document.getElementById("closefb");

// When the user clicks the button, open the modal 
orderbtn.onclick = function() {
  feedback.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closefbc.onclick = function() {
  feedback.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == feedback) {
    feedback.style.display = "none";
  }
}
};