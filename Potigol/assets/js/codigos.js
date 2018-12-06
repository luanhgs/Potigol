var codigos = [
    //variáveis
    {
        id: "VARIAVEIS_1",
        codigo: "x = 10"
    },
    {
        id: "VARIAVEIS_2",
        codigo: "y,z = 20"
    },
    {
        id: "VARIAVEIS_3",
        codigo: "a, b, c = 1, 2, 3"
    },
    {
        id: "VARIAVEIS_4",
        codigo: "var y := 10"
    },
    {
        id: "VARIAVEIS_5",
        codigo: "y := y + 2"
    },
    {
        id: "VARIAVEIS_6",
        codigo: "var a, b, c := 1 , 2, 3"
    },
    {
        id: "VARIAVEIS_7",
        codigo: "a, b, c := b, a, 4"
    },
    //operações
    {
        id: "OPERA_1",
        codigo: "5 + 3"
    },
    {
        id: "OPERA_2",
        codigo: "5 - 3"
    },
    {
        id: "OPERA_3",
        codigo: "5 * 3"
    },
    {
        id: "OPERA_4",
        codigo: "5 / 3"
    },
    {
        id: "OPERA_5",
        codigo: "5 div 3"
    },
    {
        id: "OPERA_6",
        codigo: "5 mod 3"
    },
    {
        id: "OPERA_7",
        codigo: "verdadeiro e falso"
    },
    {
        id: "OPERA_8",
        codigo: "verdadeiro ou falso"
    },
    {
        id: "OPERA_9",
        codigo: "não verdadeiro"
    },
    {
        id: "OPERA_10",
        codigo: "2 == 3"
    },
    {
        id: "OPERA_11",
        codigo: "2 <> 3"
    },
    {
        id: "OPERA_12",
        codigo: "2 < 3"
    },
    {
        id: "OPERA_13",
        codigo: "2 <= 3"
    },
    {
        id: "OPERA_14",
        codigo: "2 > 3"
    },
    {
        id: "OPERA_15",
        codigo: "2 >= 3"
    },
    //Entrada e Saída
    {
        id: "ENTR_SA_1",
        codigo: "a = leia_inteiro"
    },
    {
        id: "ENTR_SA_2",
        codigo: "b = leia_real"
    },
    {
        id: "ENTR_SA_3",
        codigo: "c = leia_texto"
    },
    {
        id: "ENTR_SA_4",
        codigo: "números = leia_inteiros (5)"
    },
    {
        id: "ENTR_SA_5",
        codigo: "números = leia_inteiros (\",\")"
    },
    {
        id: "ENTR_SA_6",
        codigo: "escreva \"Olá Mundo !\""
    },
    {
        id: "ENTR_SA_7",
        codigo: "imprima \"Olá !\""
    },
    {
        id: "ENTR_SA_8",
        codigo: 
        "nome = \"mundo\"\n \
        escreva \"Olá {nome}\""
    },
    //estruturas condicionais
    {
        id: "ESTR_CONDICIONAIS_1",
        codigo: 
        " x = leia_inteiro\n \
# se ... então ... fim\n \
se x > 5 então\n \
    escreva \"Maior do que cinco.\"\n \
fim\n \
\n \
# se ... então ... senão ... fim\n \
se x > 5 então\n \
    escreva \"Maior do que cinco.\"\n \
senão\n \
    escreva \"Menor ou igual a cinco.\"\n \
fim\n \
\n \
se verdadeiro então               # escreva \"verdadeiro\"\n \
    escreva \"verdadeiro\"\n \
senão\n \
    escreva \"falso\"\n \
fim\n \
\n \
se falso então                    # escreva \"falso\"\n \
    escreva \"verdadeiro\"\n \
senão\n \
    escreva \"falso\"\n \
fim\n \
\n \
# se ... então ... senãose ... senão ... fim\n \
se x > 8 então\n \
    escreva \"Maior do que oito.\"\n \
senãose x > 6 então\n \
    escreva \"Maior do que seis.\"\n \
senãose x > 4 então\n \
    escreva \"Maior do que quatro.\"\n \
senãose x > 2 então\n \
    escreva \"Maior do que dois.\"\n \
senão\n \
    escreva \"Menor ou igual a dois.\"\n \
fim\n \
\n \
# usando se como uma expressão\n \
a = se x mod 2 == 0 então \"par\" senão \"ímpar\" fim\n \
\n \
maior = se a >= b e a >= c então a senãose b > c então b senão c fim"
    },
    {
        id: "ESTR_CONDICIONAIS_2",
        codigo: 
        " x = leia_inteiro\n \
escolha x\n \
    caso 1 => escreva \"Um\"                       # se x == 1\n \
    caso 2 => escreva \"Dois\"                     # se x <> 1 e x == 2\n \
    caso 3 => escreva \"Três\"                     # se x <> 1 e x <> 2 e x == 3\n \
    caso _ => escreva \"Outro Valor\"        # se x <> 1 e x <> 2 e x <> 3\n \
fim\n \
\n \
# escolha com condições\n \
escolha x\n \
    caso n se n < 0               => escreva \"{n} é negativo\"\n \
    caso n se n mod 2 == 0 => escreva \"{n} é par\"\n \
    caso n                              => escreva \"{n} é ímpar\"\n \
fim\n \
\n \
# usando escolha como uma expressão\n \
é_zero = escolha x\n \
    caso 0 => verdadeiro\n \
    caso _ => falso\n \
fim\n \
\n \
sinal = escolha x               # escolha retorna um número: -1, 0 ou 1\n \
    caso n se n < 0 => -1\n \
    caso n se n > 0 =>  1\n \
    caso _                =>  0\n \
fim"
    },
    //ESTRUTURAS DE REPETIÇÃO
    {
        id: "ESTR_REPETICAO_1",
        codigo:
"para i de 1 até 10 faça                        # escreve os números de 1 a 10\n \
    escreva i\n \
fim\n \
\n \
var soma := 0\n \
para i de 1 até 10 faça                        # soma os números de 1 a 10\n \
    soma := soma + i\n \
fim\n \
    escreva \"A soma é {soma}.\"\n \
\n \
var soma := 0\n \
para i de 1 até 10 faça                       # escreve os números ímpares de 1 a 10\n \
    escreva i\n \
fim\n \
\n \
# Para decrescente\n \
para i de 1 até 1 passo -1 faça          # escreve os númeos de 10 a 1\n \
    escreva i\n \
fim\n \
\n \
# Para com mais um gerador\n \
para i de 1 até 4 ,\n \
    j de 1 até 3 faça\n \                              # escreve a tabuada de {1..4} x {1..3}\n \
    escreva \"{i} * {j} == {i * j}\"\n \
fim\n \
\n \
# Para com listas\n \
cores = [\"azul\", \"vermelho\", \"verde\"]\n \
para cor em cores faça\n \
    escreva cor\n \
fim\n \
\n \
# Para gerando uma lista\n \
numeros = para i de 1 até 5 gere i fim                              #  [1, 2, 3, 4, 5]\n \
\n \
pares = para i de 1 até 10 se i mod 2  == 0 gere  i fim    #  [2, 4, 5, 6, 8, 10]"
    },
    {
        id: "ESTR_REPETICAO_2",
        codigo:
"var i := 0\n \
    enquanto i <=10 faça\n \
        escreva i\n \
        i :=  i + 1\n \
fim"
    },
    //FUNÇÕES
    {
        id: "FUNCOES_1",
        codigo:
"soma(x: Inteiro, y: Inteiro) = x + y   # Declaração de função em uma linha\n\
\n\
soma(x, y: Inteiro) = x + y             # Agrupando parâmetros do mesmo tipo\n\
\n\
rep(a: Texto, n: Inteiro) = a * n       # Funções com parâmetros de tipos diferentes\n\
\n\
a, b = leia_inteiro\n\
c = soma(a, b)                          # Aplicando a função\n\
escreva \"{a} + {b} = {c}\"\n\
\n\
soma(x, y: Inteiro): Inteiro = x + y    # O tipo de retorno pode ser definido explicitamente\n\
\n\
soma(x, y: Inteiro)                     # Declaração de função com corpo\n\
    c = x + y\n\
    retorne c                           # A última linha tem o valor de retorno\n\
fim\n\
\n\
soma(x, y: Inteiro)                     # Declaração de função com corpo\n\
    c = x + y\n\
    c                                   # A palavra 'retorne' é opcional \n\
fim\n\
\n\
fatorial(n: Inteiro): Inteiro           # Função recursiva (tipo de retorno é obrigatório)\n\
    se n <= 1 então\n\
    1\n\
    senão\n\
    n * fatorial(n - 1)\n\
    fim\n\
fim\n\
a = leia_inteiro\n\
escreva \"Fatorial de {a} é {fatorial(a)}\"\n\
\n\
f(a: Inteiro)\n\
    g(b: Inteiro) = b * 2                 # Função interna\n\
    retorne g(a) + 3\n\
fim"
    },
    //PROGRAMAÇÃO ORIENTADA A OBJETOS
    {
        id: "PROGRAM_OBJETOS_1",
        codigo: 
"# Classes são definidas através de tipos. Os tipos são compostos por atributos e métodos (funções). Todos elementos de um tipo são públicos, mas não é possível alterar diretamenteum atributo.\n\
\n\
# Declaração de um Tipo (Classe)\n\
\n\
tipo «Tipo»\n\
    «[var]» «lista de atributos do construtor» : «tipo»\n\
    «[var]» «atributos» = «valor»\n\
    «métodos»\n\
fim\n\
\n\
«obj» = «Tipo»(«lista de valores do construtor»)\n\
«obj».«atributo»\n\
«obj».«método»"
    },
    {
        id: "PROGRAM_OBJETOS_2",
        codigo:
"tipo Quadrado\n\
    lado: Real\n\
    area() = lado * lado\n\
    perimetro() = 4 * lado\n\
fim\n\
\n\
q1 = Quadrado(10)\n\
escreva q1.area\n\
escreva q1.perimetro"
    },
    //PROGRAMAÇÃO FUNCIONAL
    {
        id: "PROGRAM_FUNCIONAL_1",
        codigo: "nome = \"potigol\""
    },
    {
        id: "PROGRAM_FUNCIONAL_2",
        codigo: 
"lista1 = [1,2,3,4]\n\
lista2 = 0::lista1"
    },
    {
        id: "PROGRAM_FUNCIONAL_3",
        codigo:
"numeros = [1, 2, 3, 4, 5, 6, 7, 8]\n\
pares = numeros.selecione(n => n mod 2 == 0)    # filtro\n\
soma = numeros.injete(0)((a,b) => a + b)        # fold\n\
dobro = numeros.mapeie(n => n * 2)              # map"
    },
    {
        id: "PROGRAM_FUNCIONAL_4",
        codigo:
"x = (a: Inteiro) => a * 2\n\
escreva x(4)"
    },
    {
        id: "PROGRAM_FUNCIONAL_5",
        codigo:
"y = para i de 1 até 10,\n\
        j de i + 1 até 10 gere\n\
        i+j\n\
    fim\n\
escreva y"
    },
    {
        id: "PROGRAM_FUNCIONAL_6",
        codigo:
"f(g: Inteiro => Inteiro, a: Inteiro) =  g(a)\n\
sucessor(n: Inteiro) = n + 1\n\
escreva f(sucessor, 5)"
    },
    {
        id: "PROGRAM_FUNCIONAL_7",
        codigo:
"soma(a: Inteiro) = ((b: Inteiro) => a + b)\n\
escreva soma(2)(3)\n\
suc = soma(1)\n\
escreva suc(4)"
    },
    {
        id: "PROGRAM_FUNCIONAL_8",
        codigo:
"h(a, cont: Inteiro): Inteiro = escolha a\n\
    caso 0 => cont\n\
    caso n => h(a-1, cont+1)\n\
fim\n\
escreva h(1000,0)"
    },
    {
        id: "PROGRAM_FUNCIONAL_9",
        codigo: 
"#QuickSort\n\
quicksort(num: Lista[Inteiro]): Lista[Inteiro] = \n\
    escolha num\n\
        caso []  => []\n\
        caso pivo::resto => \n\
            menores = resto.selecione( _ <= pivo )\n\
            maiores = resto.selecione( _ >  pivo )\n\
            quicksort(menores) + pivo::quicksort(maiores)\n\
    fim\n\
\n\
escreva \"Digite alguns números separados por espaços\"\n\
numeros = leia_inteiros(\" \")\n\
escreva \"Os números ordenados:\"\n\
escreva quicksort(numeros)"
    }
];

////
////
////
//copiar codigo
const buttons = document.querySelectorAll('button[data-codigo-id]');
buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        const codigo = getcodigo(this.getAttribute("data-codigo-id"));
        copyToClipboard(codigo);
    });  
});

function getcodigo(id){
    for(var i = 0; i <= codigos.length; i++){
        if(codigos[i].id === id)
            return codigos[i].codigo;
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