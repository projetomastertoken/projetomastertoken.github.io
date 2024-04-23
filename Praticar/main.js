
// Função para calcular a cotação
function calcularCotacao(custo, quantidade) {
    return custo * quantidade;
}

// Função para exibir a cotação
function exibirCotacao() {
    const custo = document.getElementById('preco').value;
    const quantidade = document.getElementById('quantidade').value;
    const resultado = calcularCotacao(custo, quantidade);
    document.getElementById('resultado').innerText = resultado + ' Reais$';
}

// Adicionando o evento 'input' ao campo de moedas e ao preço da banana
document.getElementById('preco').addEventListener('input', exibirCotacao);
document.getElementById('quantidade').addEventListener('input', exibirCotacao);

