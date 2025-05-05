//DECLARANDO UM ARRAY DE IMAGENS

let imagens =[
'src/assets/imagem3.jpg',
'src/assets/imagem1.jpg',
'src/assets/imagem2.jpg',
]

//DECLARANDO AS VARIAVEIS

let i = 0;
let tempo = 5000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();