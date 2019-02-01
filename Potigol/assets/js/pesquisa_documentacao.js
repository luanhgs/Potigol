const pesquisaInput = document.querySelector(".search-side .search-box input[type='text']");

pesquisaInput.addEventListener("keyup", function(){
    if(document.body.classList.contains("doc-items-closed"))
        document.body.classList.remove("doc-items-closed");
    const itens = document.querySelectorAll(".search-side .list-items-documentation .item");
    const pesquisa = this.value.toLowerCase();
    
    itens.forEach(function(el){
        const texto = el.querySelector("a").innerHTML.toLowerCase();
        if(texto.indexOf(pesquisa) > -1){
            el.classList.remove("hide-item");
        }
        else{
            el.classList.add("hide-item");
        }
    });
    loaditemsheight();
});

//menuzinho da documentação

function abitemsdoc(){
    if(document.body.classList.contains("doc-items-closed"))
        document.body.classList.remove("doc-items-closed");
    else
        document.body.classList.add("doc-items-closed");
}

const btn_doc = document.querySelector(".btn-show-items");
btn_doc.addEventListener("click", abitemsdoc);

//colocar a altura na ul para q o efeito de transição possa acontecer
window.addEventListener("load", loaditemsheight);

function loaditemsheight(){
    const items = document.querySelectorAll(".search-side .list-items-documentation .item");
    var cont = 0;
    items.forEach(function(el){
        if(!el.classList.contains("hide-item"))
            cont+=1; 
    });
    document.querySelector(".search-side .list-items-documentation").style.height = (cont * 40) + "px";
}


/*posicionar a barra de pesquisa quando estiver proximo a nav*/
window.addEventListener("scroll", function(){
    const mediaScreen = window.matchMedia("(min-width: 750px)"); //apenas na vesão desktop
    if(mediaScreen.matches){
        const div = document.querySelector(".search-side");
        const windowHeight = window.innerHeight;
        const pageY = window.scrollY;
        const footerY = document.querySelector("#footer").offsetTop;
        if(pageY + windowHeight >= footerY){
            div.style.bottom = (pageY + windowHeight - footerY) + "px";
        }
        else{
            div.style.bottom = "0px";
        }
    }
});

//ler xml externo
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}