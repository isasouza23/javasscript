document.write('<h2 style="color: blue;">Resolução</h2><br>');


// Digite a resolução do exercício aqui e visualize o resultado no navegador
let produto = 'Maça';
let preco = 4; 
let quantidade = 6;
let compra = 2;
let total = preco * quantidade;
let sobra = quantidade - compra;

// 3° Digitação (aqui)
document.write(`Temos atualmente no estoque o produto: <strong> ${produto} </strong> que está saindo por: <strong> RS ${preco} <br>
</strong> com ainda <strong> ${quantidade} </strong> no estoque, e na compra de <strong> ${quantidade} </strong> <br>
 produtos o preço irá ser de <strong> R$ ${total} </strong>, eu irei comprar <strong> ${compra} </strong> maçãs então vão sobrar <strong> ${sobra} </strong> produtos no estoque.`)