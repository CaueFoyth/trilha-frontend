require('@babel/register');
const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  const initialData = { count: 10 };


  const appHtml = ReactDOMServer.renderToString(
    React.createElement(App, { initialCount: initialData.count })
  );


  const indexFile = path.resolve(__dirname, 'public/index.html');
  let html = require('fs').readFileSync(indexFile, 'utf8');


  html = html.replace(
    '<div id="root"><!-- SSR injecta aqui --></div>',
    `<div id="root">${appHtml}</div>`
  );


  html = html.replace(
    'window.__INITIAL_DATA__ = { count: 10 };',
    `window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};`
  );

  res.send(html);
});

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
