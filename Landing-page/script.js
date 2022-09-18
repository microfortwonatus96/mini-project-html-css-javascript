$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });
  })

  // const nav = document.querySelector('netflix-navbar');

  // window.addEventListener('scroll', () => {
  //   if(window.scrollY >= 50){
  //     nav.classList.add('.bg-sc');
  //   }else{
  //     nav.classList.add('.bg-trans');
  //   }
  // });