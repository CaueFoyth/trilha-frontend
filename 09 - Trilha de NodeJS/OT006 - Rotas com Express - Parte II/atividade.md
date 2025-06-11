1. O que é Node.js e por que é popular no desenvolvimento web?
R: Node.js é um ambiente de execução JavaScript do lado do servidor. É popular por ser rápido, escalável e usar JavaScript tanto no front-end quanto no back-end.

2. Qual é a diferença entre o Node.js e outras tecnologias de servidor, como o
Apache?
R: Node.js é assíncrono e baseado em eventos; Apache é síncrono e baseado em threads. Node é melhor para apps em tempo real; Apache, para apps tradicionais.

3. Como você inicia um projeto Node.js usando o npm?
R: npm init ou npm init -y

4. O que é o Express.js e qual é o seu papel no desenvolvimento web com
Node.js?
R: Express.js é um framework leve para Node.js que facilita a criação de servidores web e APIs.

5. Explique o conceito de middleware no contexto do Express.js.
R: Middleware são funções que processam requisições antes de chegar ao handler final. Ex: autenticação, logs, parse de dados.

6. Como você roteia solicitações HTTP em um aplicativo Express?
R: app.get('/rota', callback) | app.post('/rota', callback)  

7. O que é o middleware de análise de corpo (body-parser) e por que é útil em
um aplicativo Express?
R: body-parser analisa o corpo da requisição (JSON, form) e o torna acessível via req.body.

8. Quais são os principais métodos HTTP e como eles são usados em rotas
Express?
R: 
- GET: busca dados
- POST: envia dados
- PUT: atualiza dados
- DELETE: remove dados

9. Como você lida com erros em um aplicativo Express?
R: 
app.use((err, req, res, next) => {  
  res.status(500).send('Erro')  
})  

10. O que é uma API RESTful e como o Express pode ser usado para criar uma?
API RESTful segue princípios REST (recursos via HTTP). O Express permite criar rotas e métodos HTTP para isso facilmente.