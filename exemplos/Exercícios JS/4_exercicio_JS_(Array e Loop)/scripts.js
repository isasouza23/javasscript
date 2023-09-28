document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let marca  = [
    "Nike", "Adidas", "Tesla", "DC", "Vans"
];

// Cache do tamanho array
let tamanho = marca.length;

// 4ª Digitação (Aqui)
for (let i = 0;  i < tamanho; i++) {
    document.write (`O nome da marca[${i}] é: <strong>${marca[i]}</strong><br>` );
}


