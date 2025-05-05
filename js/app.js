let subtotalCarrinho = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - ')[0].trim();
    let valorUnitario = produto.split('R$')[1];
    let quantidadeItens = document.getElementById('quantidade').value;
    
    console.log(nomeProduto);
    console.log(valorUnitario);
    console.log(quantidadeItens);

    if (isNaN(quantidadeItens) || quantidadeItens <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let preco = quantidadeItens * valorUnitario;
    console.log(preco);

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeItens}</span> ${nomeProduto} <span class="texto-azul">${valorUnitario}</span></section>`;

    subtotalCarrinho = subtotalCarrinho + preco;
    let campoSubtotal = document.getElementById('valor-total');
    campoSubtotal.textContent = `R$ ${subtotalCarrinho}`;
    
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    subtotalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}