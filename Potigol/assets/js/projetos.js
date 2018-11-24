//array de objetos contendo as informações de cada projeto
var projetos = [
    {
        codigo: "PROJ-NFS",
        nome: "Need For Speed",
        descricao: "Um jogo de corrida em primeira pessoa",
        imgUrl: "../assets/img/ex_i2.jpg"
    },
    {
        codigo: "PROJ-PACIENCIA",
        nome: "Paciência",
        descricao: "Paciência é um jogo de cartas para um só jogador. É um jogo muito famoso sobretudo por causa de uma versão para o sistema operacional Microsoft Windows, que é considerada um dos jogos para computador mais populares de todos os tempos e o videojogo mais jogado no mundo inteiro",
        imgUrl: "../assets/img/ex_paciencia.jpeg"
    }
];

//fechar janela de projeto
document.querySelector("#view-projeto .projeto .btn-close-projeto").addEventListener("click", function(){
    document.body.classList.remove("projeto-open");
});
document.querySelector("#view-projeto").addEventListener("click", function(){
    if(!document.querySelector("#view-projeto .projeto").contains(event.target))
        document.body.classList.remove("projeto-open");
});

const btns_sproj = document.querySelectorAll(".projetos .box-projeto[data-codigo-projeto]");

btns_sproj.forEach(function(el){
    el.addEventListener("click", function(){
        const codigo_proj = this.getAttribute("data-codigo-projeto");
        const projeto = getProjeto(codigo_proj);
        
        //adicionar informações 

        //nome
        document.querySelector("#view-projeto .projeto .img-title-projeto .title").innerHTML = projeto.nome;
        //imagem
        document.querySelector("#view-projeto .projeto .img-title-projeto img").src = projeto.imgUrl;
        //descrição
        document.querySelector("#view-projeto .projeto .desc span").innerHTML = projeto.descricao;

        //
        document.body.classList.add("projeto-open");
    });
});

function getProjeto(codigo_proj){
    for(var i = 0; i <= projetos.length; i++)
        if(codigo_proj == projetos[i].codigo)
            return projetos[i];  
}