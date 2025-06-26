**1. O que são templating engines e qual sua utilidade?**
São bibliotecas que geram HTML dinâmico a partir de templates + dados; facilitam separar lógica de apresentação e automatizar loops, condicionais, includes etc.

**2. Explique as diferenças entre EJS e Pug.**

* **EJS**: sintaxe semelhante a HTML, usa `<% %>` para código.
* **Pug**: indentação define hierarquia, sintaxe minimalista sem tags explícitas.
* EJS é mais familiar a quem já conhece HTML; Pug gera código mais enxuto, mas tem curva de aprendizado.

**3. Como configurar o EJS em um projeto Express?**

```js
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
```

Basta instalar `ejs` e apontar `view engine`.

**4. O que são partials e como eles auxiliam na reutilização de código?**
Partials são pedaços de template (header, footer, nav) que podem ser incluídos em várias views. Evitam duplicação e facilitam manutenção.

**5. Como os dados do MySQL podem ser renderizados em um template?**

1. Fazer query MySQL (p.ex. com `mysql2`);
2. No callback/`then`, passar o resultado (`rows`) ao `res.render('template', { resultados: rows })`;
3. No template, iterar sobre `resultados`.

**6. Explique o papel do body-parser em aplicações Express.**
Middle­ware que extrai `req.body` de requisições POST/PUT—JSON ou form-urlencoded—para uso no código (antes era separado, hoje parte do Express via `express.json()` / `express.urlencoded()`).

**7. Quais são as boas práticas ao organizar templates em um projeto?**

* Agrupar por feature (ex.: `views/products`, `views/users`);
* Usar layouts e partials (`views/partials`);
* Nomear arquivos de forma clara;
* Separar assets (CSS, JS) em `public`.

**8. Como funciona a inclusão de placeholders em layouts do EJS?**
No layout principal (`layout.ejs`), coloca `<%- body %>` ou `<%- include(view) %>`. Cada view é renderizada e injetada nesse placeholder via `res.render('view', data, callback)` usando engines como `express-ejs-layouts`.

**9. Liste três aplicações práticas para o uso de formulários no Express.**

* Cadastro e login de usuários;
* Busca e filtros de produtos;
* Envio de comentários/contato (feedback).

**10. Por que é importante validar dados recebidos de formulários?**
Para garantir integridade, evitar erros, prevenir injeção de código/SQL e garantir segurança (XSS, CSRF) antes de processar ou armazenar os dados.
