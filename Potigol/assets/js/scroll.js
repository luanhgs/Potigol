const menuItens = document.querySelectorAll('#header #nav .nav-list-items .nav-item a[href^="#"]'); //itens dentro de #menu_parallax com href pra id
menuItens.forEach(function(el){
    el.addEventListener('click',scrollToId);
});

function scrollToId(){ 
    event.preventDefault();
    scrollToPosition(getElementHref(event.target));
    abmenu(); //fechar menu
}
function getElementHref(el){ 
    const id = el.getAttribute("href");
    return document.querySelector(id).offsetTop - 60;
}
function scrollToPosition(to){
    smoothScrollTo(0,to,700);
}

//função para browsers antigos
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); 
}

/*animar items da página inicial ao descer a página*/
window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
function animateOnScroll(){
    const boxes = document.querySelectorAll(".before-animate-on-scroll");
    const pageY = window.pageYOffset + ((window.innerHeight * 3)/4);
    boxes.forEach(function(el,i){
        if(pageY > el.offsetTop){
            el.classList.add("after-animate-on-scroll");
        }
    });
    //console.log(pageY);
}

//scroll top
const btnTop = document.querySelector("#footer .footer-content .button-back-top #backTop");
btnTop.addEventListener("click", function(){
    smoothScrollTo(0,0,700);
});

