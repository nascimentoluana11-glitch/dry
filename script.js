const botoesAvancar = document.querySelectorAll('.btn-proximo');
const botoesVoltar = document.querySelectorAll('.btn-voltar');

// Função única reutilizável (princípio DRY)
function navegarParaPasso(numeroPasso) {
    const passoAtual = document.querySelector('.ativo');
    const proximoPasso = document.getElementById('passo-' + numeroPasso);

    if (passoAtual && proximoPasso) {
        passoAtual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');
    }
}

// Eventos para avançar
botoesAvancar.forEach(botao => {
    botao.addEventListener('click', function () {
        const destino = this.getAttribute('data-proximo');
        navegarParaPasso(destino);
    });
});

// Eventos para voltar
botoesVoltar.forEach(botao => {
    botao.addEventListener('click', function () {
        const origem = this.getAttribute('data-voltar');
        navegarParaPasso(origem);
    });
});
