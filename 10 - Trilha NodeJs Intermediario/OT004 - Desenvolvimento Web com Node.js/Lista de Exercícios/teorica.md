1. **Express.js**: framework web minimalista p/ Node.js; vantagens: leve, modular, middleware, roteamento flexível, grande comunidade.
2. **Rotas HTTP principais**: GET, POST, PUT, DELETE.
3. **Middleware**: função `(req,res,next)` que processa requisição em camadas (parsing, auth, logs etc.).
4. **Conexão Node–MySQL**:

   ```js
   const mysql=require('mysql2');
   const c=mysql.createConnection({host, user, password, database});
   c.connect();
   ```
5. **Prepared statement**: SQL pré-compilado com placeholders; isola dados do código, evita SQL Injection.
6. **Servidor básico**:

   ```js
   const app=require('express')();
   app.use(express.json());
   app.get('/',(r,s)=>s.send('OK'));
   app.use((e,r,s,n)=>s.status(500).send());
   app.listen(3000);
   ```
7. **Rotas globais vs específicas**:

   * Globais: `app.use()` aplicam-se a todas.
   * Específicas: `app.get/post('/path',…)` só naquele método/caminho.
8. **Boas práticas BD**: validar/sanitizar entrada; usar transações; selecionar e paginar só o necessário.
9. **Variáveis de ambiente**: separam config sensível (senhas, URLs), facilitam dev/test/prod.
10. **Tratamento de erros SQL**:

* Callback: `if(err){…}`
* Promise/async-await: `try{…}catch(err){…}`
* Rollback em transações.
