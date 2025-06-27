1. **API RESTful** segue princípios REST: usa HTTP, recursos com URIs, verbos HTTP, stateless e representa dados geralmente em JSON.

2. **Verbos HTTP**:

   * `GET`: busca dados
   * `POST`: cria recursos
   * `PUT`: atualiza recursos
   * `DELETE`: remove recursos
   * `PATCH`: atualiza parcialmente

3. **Separar em controllers, models e routes** melhora organização, manutenibilidade e reutilização de código.

4. **Joi** é uma biblioteca de validação de dados para JavaScript, usada para garantir que dados recebidos estejam no formato esperado.

5. **Paginação** limita o número de registros retornados, reduz carga no servidor e melhora tempo de resposta.

6. **Swagger** documenta APIs automaticamente, facilita testes e comunicação entre devs.

7. **Filtros** permitem refinar consultas (ex: buscar por nome ou data), tornando a API mais flexível e eficiente.

8. **Endpoint seguro**: usar prepared statements (ou query builder), validação com Joi, autenticação (ex: JWT) e HTTPS.

9. **Validação na API** evita erros no banco, melhora segurança e fornece mensagens claras ao cliente.

10. **Express** abstrai o HTTP, fornece rotas, middleware e JSON parsing, tornando a criação de APIs rápida e simples.
