// Array de objetos de produtos com detalhes como id, nome, preço, categoria e URL da imagem
const products = [
    { id: 1, name: 'Camiseta Azul', price: 79.9, category: 'camisetas', img: 'https://images.tcdn.com.br/img/img_prod/809258/camiseta_azul_royal_malha_pv_manga_curta_gola_redonda_229_1_68f46db62011952af0c5cf803770d1a5.jpg' },
    { id: 2, name: 'Boné Preto', price: 49.5, category: 'bonés', img: 'https://m.media-amazon.com/images/I/21YVNPVXGqS._AC_SY1000_.jpg' },
    { id: 3, name: 'Caneca', price: 29.9, category: 'canecas', img: 'https://a-static.mlcdn.com.br/1500x1500/caneca-foda-se-canecas-personalizadas/oliststore/mglc7f6b1wahiu7g/1b6c7da89cc8321d462273391db919e7.jpeg' },
    { id: 4, name: 'Camiseta Laranja', price: 89.9, category: 'camisetas', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTau1VQBarE6z2a0UFvOP-AewD8H1yM9mm3jA&s' },
];

// Elementos do DOM para o grid de produtos e controles de filtro
const grid = document.getElementById('products-grid');
const chkCats = Array.from(document.querySelectorAll('input[name="category"]')); // Inputs de checkbox para filtros de categoria
const priceMin = document.getElementById('price-min'); // Input para preço mínimo
const priceMax = document.getElementById('price-max'); // Input para preço máximo
const sortBy = document.getElementById('sort-by'); // Dropdown para opções de ordenação
const btnApply = document.getElementById('apply-filters'); // Botão para aplicar filtros
const btnClear = document.getElementById('clear-filters'); // Botão para limpar filtros

// Função para renderizar a lista de produtos no grid
function renderList(list) {
    grid.innerHTML = ''; // Limpa o grid
    list.forEach(p => {
        // Cria um card para cada produto
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <h4>${p.name}</h4>
          <div class="price">R$ ${p.price.toFixed(2)}</div>
          <button data-id="${p.id}">Comprar</button>
        </div>`;
        grid.appendChild(card); // Adiciona o card ao grid
    });
}

// Função para aplicar filtros com base na entrada do usuário
function applyFilters() {
    let result = products.slice(); // Começa com uma cópia da lista original de produtos

    // Filtra pelas categorias selecionadas
    const selectedCats = chkCats.filter(chk => chk.checked).map(chk => chk.value);
    if (selectedCats.length) {
        result = result.filter(p => selectedCats.includes(p.category));
    }

    // Filtra pelo intervalo de preços
    const min = parseFloat(priceMin.value) || 0; // Valor padrão 0 se o input estiver vazio
    const max = parseFloat(priceMax.value) || Infinity; // Valor padrão Infinity se o input estiver vazio
    result = result.filter(p => p.price >= min && p.price <= max);

    // Ordena os produtos filtrados com base na opção de ordenação selecionada
    switch (sortBy.value) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price); // Ordena por preço (crescente)
            break;
        case 'price-desc':
            result.sort((a, b) => b.price - a.price); // Ordena por preço (decrescente)
            break;
        case 'name-asc':
            result.sort((a, b) => a.name.localeCompare(b.name)); // Ordena por nome (A-Z)
            break;
        case 'name-desc':
            result.sort((a, b) => b.name.localeCompare(a.name)); // Ordena por nome (Z-A)
            break;
    }

    renderList(result); // Renderiza a lista filtrada e ordenada
}

// Função para limpar todos os filtros e resetar a lista de produtos
function clearFilters() {
    chkCats.forEach(chk => chk.checked = false); // Desmarca todos os checkboxes de categoria
    priceMin.value = 0; // Reseta o preço mínimo para 0
    priceMax.value = 500; // Reseta o preço máximo para 500
    sortBy.value = 'default'; // Reseta a opção de ordenação para o padrão
    renderList(products); // Renderiza a lista original de produtos
}

// Listeners para os botões de filtro
btnApply.addEventListener('click', applyFilters); // Aplica os filtros ao clicar no botão
btnClear.addEventListener('click', clearFilters); // Limpa os filtros ao clicar no botão

// Renderização inicial da lista de produtos
renderList(products);
