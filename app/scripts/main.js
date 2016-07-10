(function( $ ) {
  $.fn.header = function() {
    var $body = $('body');
    var winTotop ;
    var $window = $(window);
    $(window).scroll(function(){
      winTotop=$window.scrollTop();
      if(winTotop>$window.height()){
        $body.addClass("show");
      }else{
        if($body.hasClass("show"))
          $body.removeClass("show");
      }
      console.log("height:"+$window.height()+"  winTotop:"+winTotop);
    });


  };
})( jQuery );

$(document).ready(function(){
$("#header").header();
});
