var xmlCodigos = null;

//ler e converter xml
readTextFile("../assets/codigos/cod.xml", function(text){
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

////
////
////
//copiar codigo
const buttons = document.querySelectorAll('button[data-codigo-id]');
buttons.forEach(function(btn){
    btn.addEventListener("click", function(){ 
        const codigo = getCodigoXML(this.getAttribute("data-codigo-id"));
        console.log(codigo);
        copyToClipboard(codigo);
    });  
});

function getCodigoXML(id){
    for(var i = 0; i <= xmlCodigos.querySelectorAll("codigo").length - 1; i++){
        if(xmlCodigos.querySelectorAll("codigo")[i].querySelector("id").childNodes[0].nodeValue === id)
            return xmlCodigos.querySelectorAll("codigo")[i].querySelector("txt").childNodes[0].nodeValue;
    }
}

// Copies a string to the clipboard. Must be called from within an event handler such as click.
// May return false if it failed, but this is not always
// possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
// No Safari support, as of (Nov. 2015). Returns false.
// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
// shown the first time the clipboard is used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

////
////
//botão animação
buttons.forEach(function(btn, i){
    btn.addEventListener("click", function(){
        document.body.querySelectorAll(".content-documentation .section-documentation .demonstration-documentation")[i].classList.add("copied-code");
        setTimeout(function(){
            document.body.querySelectorAll(".content-documentation .section-documentation .demonstration-documentation")[i].classList.remove("copied-code");
        }, 400);
    });  
});