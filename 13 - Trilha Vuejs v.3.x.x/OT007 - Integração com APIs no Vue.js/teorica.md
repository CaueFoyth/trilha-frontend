1. **API RESTful**: Interface que usa HTTP para CRUD. Popular por ser simples e padronizada.

2. **Axios**: Cliente HTTP. Melhor que fetch por tratar JSON, erros e headers automaticamente.

3. Métodos HTTP:

   * **GET**: buscar
   * **POST**: criar
   * **PUT**: atualizar
   * **DELETE**: excluir

4. **Timeout**: tempo limite da requisição. Evita travamento se a API demorar.

5. **CORS**: bloqueia requisições entre origens diferentes. Backend precisa liberar.

6. **API pública**: sem login (ex: clima).
   **API com autenticação**: exige token/login (ex: dados do usuário).

7. **Tratar erros**: evita falhas no app. Erros comuns: rede, timeout, 404, 500, 401.

8. **Cabeçalho HTTP**: envia dados extras (ex: token JWT no `Authorization`).

9. **baseURL**: define endereço base. Evita repetir URL da API em cada chamada.

10. **async/await**: mais limpo e legível.
    **.then/.catch**: funciona, mas pode virar bagunça.
