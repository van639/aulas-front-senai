
const $calcular = document.getElementById('calcular');

const calcularMedia = (n1,n2) => (parseInt(n1) + parseInt(n2)) /2;

const verificaSituacao = ( media ) => media >= 5 ? "Aprovado" : "Reprovado";

//  "arrow function"
const exibirMedia = () =>{
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    
    const media = calcularMedia(nota1, nota2);

    $situacao.value = verificaSituacao ( media );

   /* if(media>= 5){
        $situacao.value = "Aprovado";
        $situacao.classList.remove('reprovado');
        $situacao.classList.add('aprovado');
    }else{
        $situacao.value = "Reprovado";
        $situacao.classList.remove('aprovado');
        $situacao.classList.add('reprovado');
    }
*/
    $media.value = media;

}

function calcularConceito(){
    const media = document.getElementById('media').value
    const $conceito = document.getElementById('conceito');
    if ( media < 3){
        $conceito.value = "E";
    } else if ( media < 5 ) {
        $conceito.value = "D";
    } else if ( media < 8) {
        $conceito.value = "C";
    } else if ( media < 10) {
        $conceito.value = "B";
    } else {
        $conceito.value = "A";
    }
}

function calcular(){
    exibirMedia();
    calcularConceito();
}

$calcular.addEventListener('click', calcular);
