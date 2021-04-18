$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 105){
        $(".navbar").addClass("sticky");
        $(".onscrolll").addClass("offscrolll");
        $(".goTop").fadeIn();
      }
      else{
        $(".navbar").removeClass("sticky");
        $(".onscrolll").removeClass("offscrolll");
        $(".goTop").fadeOut();
      }
    });
    $(".goTop").click(function(){scroll(0,0)});
});

