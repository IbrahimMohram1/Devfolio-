var typed = new Typed('#typing', {
    strings: ['Designer | ' ,' Photographer |  '  ,'FreeLancer |'],
    typeSpeed: 50,
    loop: true,
  loopCount: Infinity,
  showCursor: false,
  });
  
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    var height = $(".navbar").outerHeight();


	  if (scroll > height) {
	    $(".navbar").css("background-color" , "#000000e6");
	  }
  })
})
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    var height = $(".home").outerHeight();


	  if (scroll > height) {
	    $(".down-to-up").css("visibility" , "visible");
	  }
    if(scroll < height) {
        $(".down-to-up").css("visibility" , "hidden");
      
    }
  })
})