var xmlCodigos = null;

//ler e converter xml
readTextFile("../assets/data/codigos.xml", function(text){
    if (window.DOMParser) {
        let parser = new DOMParser();
        xmlCodigos = parser.parseFromString(text,"text/xml");
    } 
    else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlCodigos.loadXML(text); 
    } 
});


//copiar codigo
const buttons = document.querySelectorAll('button[data-codigo-id]');
buttons.forEach(function(btn, i){
    btn.addEventListener("click", function(){ 
        const codigo = getCodigo(this.getAttribute("data-codigo-id"));
        if(codigo != null){
            //copiar para clipboard
            copyToClipboard(codigo);

            //animar botão
            document.body.querySelectorAll(".content-documentation .section-documentation .demonstration-documentation")[i].classList.add("copied-code");
            setTimeout(function(){
                document.body.querySelectorAll(".content-documentation .section-documentation .demonstration-documentation")[i].classList.remove("copied-code");
            }, 400);
        }
    });  
});

function getCodigo(id){
    for(var i = 0; i <= xmlCodigos.querySelectorAll("codigo").length - 1; i++){
        let codigo = xmlCodigos.querySelectorAll("codigo")[i];

        if(codigo.querySelector("id").childNodes[0].nodeValue === id)
            return codigo.querySelector("txt").childNodes[0].nodeValue;
    }
    return null;
}