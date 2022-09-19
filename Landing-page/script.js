// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 100) {
//           $(".netflix-navbar").css("background" , "#0C0C0C");
//         }
  
//         else{
//             $(".netflix-navbar").css("background" , "transparent");  	
//         }
//     });
//   })

// Event scroll mengubah background-color navbar ketika di scroll
let nav = document.querySelector('.netflix-navbar');

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 50){
      nav.classList.add('bg-sc');
    }else{
      nav.classList.remove('bg-sc');
    }
  });

// innerHTML menambahkan tulisan 
let title = document.querySelector('.title');
  title.innerHTML = 'My Neighbour Totoro';

// src menambahkan image
let image = document.querySelector('.image');
  image.src = "img/anime/anime7.webp";