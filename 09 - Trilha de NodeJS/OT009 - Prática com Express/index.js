import Express from 'Express';

const app = Express();

app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("<h3>Rotas no Express</h3><p>Rota '/'</p>");
});

app.get('/sobre', (req, res) => {
  res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express</p>");
});

app.get('/users/:name', (req, res) => {
  res.send(`Usúario: ${req.params.name}`);
});

var carros = [
  { nome: "Civic", preco: 120000, marca: "Honda" },
  { nome: "Corolla", preco: 115000, marca: "Toyota" },
  { nome: "Onix", preco: 80000, marca: "Chevrolet" },
  { nome: "Gol", preco: 70000, marca: "Volkswagen" },
  { nome: "HB20", preco: 85000, marca: "Hyundai" },
  { nome: "Compass", preco: 160000, marca: "Jeep" }
];

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]]);
});

app.post('/cars', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json([carros[req.params.id]]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});