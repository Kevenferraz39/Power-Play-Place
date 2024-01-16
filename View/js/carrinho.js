const itens = [
    {
        id: 0,
        nome: "Xaiomi Ultra 13",
        img: "./img/Products/product-11.png",
        valor: 5275.89,
        quantidade: 0
    },
    {
        id: 1,
        nome: "Xbox Series X",
        img: "./img/Products/product-12.png",
        valor: 4950.55,
        quantidade: 0
    },
    {
        id: 2,
        nome: "Iphone 14 Pro Max",
        img: "./img/Products/product-8.png",
        valor: 11499.79,
        quantidade: 0
    },
    // Adicione outros produtos conforme necessário
];

inicializarLoja = () => {
    var containerProdutos = document.getElementById('containerProdutos');
    itens.map((val) => {
        containerProdutos.innerHTML += `
            <div class="product">
                <img src="${val.img}" alt="${val.nome}">
                <p class="product-name">${val.nome}</p>
                <p class="rate">&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                <p class="product-price">${val.valor.toFixed(2)} <span>R$</span></p>
                <br>
                <button data-key="${val.id}">Adicionar ao carrinho</button>
            </div>
        `;
    });
}

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('containerCarrinho');
    containerCarrinho.innerHTML = ""; // Limpa antes de adicionar novos itens
    itens.forEach((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <div class="info-single-chekout">
                    <p style="float:left;"><span>Produto:</span> ${val.nome}</p>
                    <p style="float:right;"><span>Quantidade:</span> ${val.quantidade}</p>
                    <div style="clear:both;"></div>
                </div>
            `;
        }
    });

    // Atualize a <div class="total">
    var totalDiv = document.querySelector('.total');
    totalDiv.innerHTML = `<p><span>Total Valor:</span> R$ ${calcularTotalValor().toFixed(2)}</p>`;
}

calcularTotalValor = () => {
    let totalValor = 0;
    itens.forEach((val) => {
        totalValor += val.quantidade * val.valor;
    });
    return totalValor;
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarLoja();

    var buttons = document.querySelectorAll('.cols-4 button');
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let key = this.getAttribute('data-key');
            itens[key].quantidade++;
            atualizarCarrinho();
            return false;
        });
    });
});