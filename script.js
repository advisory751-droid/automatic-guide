const games = [
    { title: "Cyberpunk 2077", category: "action", img: "https://picsum.photos/id/1/400/225" },
    { title: "Elden Ring", category: "adventure", img: "https://picsum.photos/id/2/400/225" },
    { title: "Forza Horizon 5", category: "racing", img: "https://picsum.photos/id/3/400/225" },
    { title: "Red Dead Redemption 2", category: "adventure", img: "https://picsum.photos/id/4/400/225" },
    { title: "Doom Eternal", category: "action", img: "https://picsum.photos/id/5/400/225" },
    { title: "F1 23", category: "racing", img: "https://picsum.photos/id/6/400/225" }
];

const gameGrid = document.getElementById('gameGrid');
const searchInput = document.getElementById('gameSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayGames(filteredGames) {
    gameGrid.innerHTML = filteredGames.map(game => `
        <div class="game-card">
            <img src="${game.img}" alt="${game.title}">
            <div class="game-info">
                <span class="category-tag">${game.category}</span>
                <h3>${game.title}</h3>
            </div>
        </div>
    `).join('');
}

// Initial Load
displayGames(games);

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = games.filter(g => g.title.toLowerCase().includes(term));
    displayGames(filtered);
});

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        const filtered = category === 'all' ? games : games.filter(g => g.category === category);
        displayGames(filtered);
    });
});
