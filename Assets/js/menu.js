const btn_open_menu = document.querySelector(".btn-menu-open");
const btn_close_menu = document.querySelector(".btn-menu-close");
const header_overlay = document.querySelector(".header-overlay");

function abmenu(){
    if(document.body.classList.contains("menu-open"))
        document.body.classList.remove("menu-open");
    else
        document.body.classList.add("menu-open");
}
btn_open_menu.addEventListener("click", abmenu);
btn_close_menu.addEventListener("click", abmenu);
header_overlay.addEventListener("click", function(){
    document.body.classList.remove("menu-open");
});

window.addEventListener("load", function(){  /*colorir o header*/
    if(window.scrollY > 0) 
        document.body.classList.add("colored-header");
    else
        document.body.classList.remove("colored-header");
        
    if(document.body.classList.contains("has-under-header")){
        window.addEventListener("scroll", function(){
            if(window.scrollY > 0) 
                document.body.classList.add("colored-header");
            else
                document.body.classList.remove("colored-header");
        });
    }
});
