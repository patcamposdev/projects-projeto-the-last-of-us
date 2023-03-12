/*Objetivo - quando clicar no botão, mostrar a imagem do fundo correspondente
Passo 1 - dar um jeito de pegar o html dos botões
Passo 2 - daru um jeito de identificar o clique do usuáriono botão
Passo 3 - desmarcar o botão selacionado anteriormente
Passo 4 - marcar o botão clicado como se estivesse selecionado
Passo 5 - esconder a imagem anterior
Passo 6 - fazer aparecer a imagem correspondente ao botao clicado*/

//Passo 1 - dar um jeito de pegar o html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - daru um jeito de identificar o clique do usuáriono botão
botoesCarrossel.forEach(( botao, i) => {
    botao.addEventListener('click', () => {
        
        //Passo 3 - desmarcar o botão selacionado anteriormente
        desativarBotaoSelecionado();

        //Passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //Passo 5 - esconder a imagem ativa de fundo 
        esconderImagemAtiva();

        //Passo 6 - fazer aparecer a imagem correspondente ao botao clicado*/
        imagens[i].classList.add('ativa');

    })
})


function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

