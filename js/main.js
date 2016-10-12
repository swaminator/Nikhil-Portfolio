$(document).ready(function(){
	$( ".btn" ).click(function() {
      // $( "#contact" ).slideToggle( "slow" );
      $('html, body').animate({ 
      	scrollTop: $('#section2').offset().top 
      }, 1000);
    });

   $(".test").click(function() {
   	console.log("HOLA");
   	$(".live-by-name").toggle();
   	$(".boundaries").toggle();
   });
});