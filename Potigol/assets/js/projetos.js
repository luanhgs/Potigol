//array de objetos contendo as informações de cada projeto
var projetos = [
    {
        codigo: "CAOS-GAME",
        nome: "Caos Game - Rogue Like 2D",
        descricao: "Jerimum-Rogue e um jogo inspirado no estilo rogue-like onde seu personagem tem que sobreviver ao ataque de uma orda de inimigos. Inicialmente está sendo desenvolvido para um trabalho da disciplina de programação de computadores da turma IFRN.2017.1.M orientado pelo professor Leonardo Lucena.",
        imgUrl: "../assets/img/projetos/caos-game.png",
        githubUrl: "https://saulodfp.github.io/jerimum-rogue/"
    },
    {
        codigo: "POTIGAME",
        nome: "PotiGame",
        descricao: "Neste jogo, o jogador entra na pele de um homem com tanta fome q ficou amarelo, e está desesperado a procura de comida em um labirinto maluco. Seu objetivo final é encontrar a rosquinha antes que desmanhe de fome.",
        imgUrl: "../assets/img/projetos/potigame.png",
        githubUrl: "https://tiagolisboa.github.io/PotiGame/"
    },
    {
        codigo: "BOBOT-VS-ZOMBIES",
        nome: "Robot Vs Zombies",
        descricao: "É um jogo 2d feito com a linguagem Potigol. No jogo, você controla um robô, que é o personagem principal, e tem como objetivo matar os zumbis que vão aparecendo.",
        imgUrl: "../assets/img/projetos/robot-vs-zombies.png",
        githubUrl: "https://pjeferson.github.io/RobotVsZombies/"
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
window.addEventListener("keyup", function(){
    const key = event.which || event.keyCode;
    if(document.body.classList.contains("projeto-open") && key == 27)
        document.body.classList.remove("projeto-open");
    
});

const btns_sproj = document.querySelectorAll(".projetos .box-projeto[data-codigo-projeto]");

btns_sproj.forEach(function(el){
    el.addEventListener("click", function(){
        const codigo_proj = this.getAttribute("data-codigo-projeto");
        const projeto = getProjeto(codigo_proj);
        
        //---adicionar informações ---
        //nome
        document.querySelector("#view-projeto .projeto .img-title-projeto .title").innerHTML = projeto.nome;
        //imagem
        document.querySelector("#view-projeto .projeto .img-title-projeto img").src = projeto.imgUrl;
        //descrição
        document.querySelector("#view-projeto .projeto .desc span").innerHTML = projeto.descricao;
        //link github
        document.querySelector("#view-projeto .projeto .opt .btn-github").href = projeto.githubUrl;   

        //
        document.body.classList.add("projeto-open");
    });
});

function getProjeto(codigo_proj){
    for(var i = 0; i <= projetos.length; i++)
        if(codigo_proj == projetos[i].codigo)
            return projetos[i];  
}