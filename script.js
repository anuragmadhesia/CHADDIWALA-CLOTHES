$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 105){
        $(".navbar").addClass("sticky");
        $(".goTop").fadeIn();
      }
      else{
        $(".navbar").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });
    $(".goTop").click(function(){scroll(0,0)});
});

