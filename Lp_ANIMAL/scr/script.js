const items = document.querySelectorAll('.carousel .list .item');
const thumbnails = document.querySelectorAll('.thumbnail .item-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Índice do item ativo

// Mostra o primeiro item por padrão
items[currentIndex].classList.add('active');

function updateCarousel(index) {
    // Remove a classe active de todos os itens
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona a classe active ao item correspondente
    items[index].classList.add('active');
}

// Função para ir para o item anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1; // Volta para o último se estiver no primeiro
    updateCarousel(currentIndex);
});

// Função para ir para o próximo item
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0; // Volta para o primeiro se estiver no último
    updateCarousel(currentIndex);
});

// Adiciona a lógica das miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        currentIndex = parseInt(thumbnail.getAttribute('data-index'));
        updateCarousel(currentIndex);
    });
});