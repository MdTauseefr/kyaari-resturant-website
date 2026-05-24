window.addEventListener("scroll", function(){

      const nav = document.querySelector("nav");

      if(window.scrollY > 50){
        nav.style.background = "#0a0a0a";
      }
      else{
        nav.style.background = "rgba(0,0,0,0.55)";
      }
    });