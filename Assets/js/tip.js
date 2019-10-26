window.onload = function(){
    if(getCookie("menutip") === "true")
        document.body.classList.add("menu-tip-ok");
    else{
        //a dica(menu) vai ficar ok a partir daqui
        document.body.classList.add("start-min-tip");
        setTimeout(function(){
            createCookie("menutip", "true", 360);
            document.body.classList.add("menu-tip-ok");
        }, 3500);
    }
}

//criar cookie
function createCookie (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    
}

//pegar valor do cookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}