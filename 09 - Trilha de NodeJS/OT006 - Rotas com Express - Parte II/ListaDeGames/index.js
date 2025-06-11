const express = require('express');

const app = express();
app.use(express.json());

let games = [
    {title: 'Sea of Thieves', studio: 'Rare', price: 30},
    {title: 'WOW', studio: 'Blizzard', price: 120},
    {title: 'Valorant', studio: 'Riot', price: 0},
    {title: 'COD', studio: 'Activision', price: 200},
    {title: 'Minecraft', studio: 'Mojang', price: 80},
    {title: 'Halo', studio: 'Microsoft', price: 90},
    {title: 'Fortnite', studio: 'Epic Games', price: 0},
    {title: 'GTA V', studio: 'Rockstar', price: 150},
    {title: 'The Witcher 3', studio: 'CD Projekt Red', price: 100},
    {title: 'Assassin\'s Creed Valhalla', studio: 'Ubisoft', price: 180},
];

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

app.get('/', (req, res) => {
  res.json(games);
});

app.post('/novogame', (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    let newGame = {
        title,
        studio,
        price
    };

    games.push(newGame);

    res.send("OK")
});