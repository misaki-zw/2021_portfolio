$(function(){

  $('#vegas').vegas({
        slides: [
            { src: './img/top1.jpg' },
            { src: './img/top2.jpg' },
            { src: './img/top3.jpg' }
        ],
    });
    
    
    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
       $('.up-logo').fadeIn(2000);
    }else{
    $('.up-logo').fadeOut(2000);
    }
    });


}); //owari
