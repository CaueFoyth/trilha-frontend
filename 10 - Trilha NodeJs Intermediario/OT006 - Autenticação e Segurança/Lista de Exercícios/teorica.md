1. **JWT (JSON Web Token)** é um padrão para troca segura de informações como token assinado.
   **Vantagens**: stateless, fácil de usar com APIs, transportável via HTTP headers.

2. **Sessões** armazenam dados no servidor; **cookies**, no cliente (navegador). Sessões usam cookies para identificar o usuário.

3. **CORS (Cross-Origin Resource Sharing)** controla o acesso entre domínios diferentes.
   É importante para evitar requisições maliciosas de outras origens.

4. **CSRF (Cross-Site Request Forgery)** força ações em nome do usuário autenticado.
   **Prevenção**: tokens CSRF, SameSite cookies, verificação de origem.

5. **SQL Injection** é a inserção de SQL malicioso via inputs.
   **Riscos**: vazamento de dados, alteração ou exclusão de dados.

6. **HttpOnly** impede o acesso a cookies via JavaScript, protegendo contra ataques XSS.

7. **Partes do JWT**:

   * **Header**: tipo e algoritmo
   * **Payload**: dados do usuário
   * **Signature**: verificação de integridade

8. **Boas práticas em Node.js**:

   * Usar ORM ou query builders (Ex: Sequelize, Knex)
   * Usar prepared statements
   * Validar e sanitizar inputs

9. **Autenticação baseada em roles** define permissões por tipo de usuário (admin, user).
   **Benefícios**: controle de acesso granular e segurança reforçada.

10. O middleware **csrf** gera e valida tokens CSRF em formulários, bloqueando requisições não autorizadas.
