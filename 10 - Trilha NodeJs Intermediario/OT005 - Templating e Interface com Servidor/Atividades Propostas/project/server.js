const express = require('express');
const { engine } = require('express-handlebars');
const axios = require('axios');

const app = express();
const PORT = 3000;


app.engine('hbs', engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', './views');


app.get('/', async (req, res) => {
  try {

    const products = [
      { name: 'Camisa Polo',      price: 79.90 },
      { name: 'Calça Jeans',      price: 129.90 },
      { name: 'Tênis Esportivo',  price: 199.90 },
      { name: 'Boné',             price: 49.90 }
    ];


    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: { _limit: 5 }
    });
    const posts = response.data;


    res.render('index', {
      title: 'SSR com Node.js & API Externa',
      message: 'Integração com JSONPlaceholder!',
      products,
      posts
    });

  } catch (error) {
    console.error('Erro ao buscar posts:', error.message);
    res.status(500).send('Erro interno ao buscar dados externos.');
  }
});


app.get('/about', (req, res) => {
  const aboutData = {
    title: 'Sobre Nós',
    siteName: 'Loja Exemplo',
    description: 'Somos uma plataforma fictícia dedicada a oferecer os melhores produtos de moda esportiva.',
    founded: 2021,
    team: [
      { name: 'Ana Silva',   role: 'Desenvolvedora Fullstack' },
      { name: 'Bruno Costa', role: 'Designer UI/UX' },
      { name: 'Carla Souza', role: 'Gerente de Produto' }
    ]
  };
  res.render('about', aboutData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
