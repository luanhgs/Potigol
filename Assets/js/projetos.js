var xmlProjetos = null;

readTextFile("../Assets/data/projetos.xml", function(text){
    if (window.DOMParser) {
        let parser = new DOMParser();
        xmlProjetos = parser.parseFromString(text,"text/xml");
    }
    else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlProjetos.loadXML(text);
    } 
});

//fechar janela de projeto
document.querySelector("#view-projeto .projeto .btn-close-projeto").addEventListener("click", function(){
    document.body.classList.remove("projeto-open");
});
document.querySelector("#view-projeto").addEventListener("click", function(){
    if(!document.querySelector("#view-projeto .projeto").contains(event.target))
        document.body.classList.remove("projeto-open");
});
window.addEventListener("keyup", function(){
    const key = event.which || event.keyCode;
    if(document.body.classList.contains("projeto-open") && key == 27)
        document.body.classList.remove("projeto-open");
    
});

//abrir informações do projeto
const btns_sproj = document.querySelectorAll(".projetos .box-projeto[data-codigo-projeto]");
btns_sproj.forEach(function(el){
    el.addEventListener("click", function(){
        const codigo_proj = this.getAttribute("data-codigo-projeto");
        const projeto = getProjeto(codigo_proj);

        if(projeto != null){
            //nome
            document.querySelector("#view-projeto .projeto .img-title-projeto .title").innerHTML = 
                projeto.querySelector("nome").childNodes[0].nodeValue;
            //imagem
            document.querySelector("#view-projeto .projeto .img-title-projeto img").src = 
                projeto.querySelector("imgUrl").childNodes[0].nodeValue;
            //descrição
            document.querySelector("#view-projeto .projeto .desc span").innerHTML = 
                projeto.querySelector("descricao").childNodes[0].nodeValue;
            //link github
            document.querySelector("#view-projeto .projeto .opt .btn-github").href = 
                projeto.querySelector("githubUrl").childNodes[0].nodeValue;

            document.body.classList.add("projeto-open");
        }
    });
});

function getProjeto(codigo_proj){
    for(var i = 0; i <= xmlProjetos.querySelectorAll("projeto").length - 1; i++){
        let projeto = xmlProjetos.querySelectorAll("projeto")[i];

        if(projeto.querySelector("codigo").childNodes[0].nodeValue == codigo_proj)
            return projeto;
    }
    return null;
}