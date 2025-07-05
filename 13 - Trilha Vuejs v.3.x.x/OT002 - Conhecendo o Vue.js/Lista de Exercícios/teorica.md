1. **jsFiddle** é uma ferramenta online para testar e compartilhar código HTML, CSS e JavaScript.
   **No Vue.js**, é útil para prototipar rapidamente componentes e interações.

2. **Para configurar Vue.js no jsFiddle**:

   * Acesse jsfiddle.net
   * No painel de JavaScript, clique em "Settings"
   * Adicione a CDN do Vue.js (ex: `https://cdn.jsdelivr.net/npm/vue@2`)
   * Use o modo "no wrap - in <head>"

3. **"Hello World" no Vue.js** é o exemplo básico que exibe uma mensagem em tela.
   **Importância**: ensina a estrutura básica do Vue (instância + template).

4. **Two-way data binding** conecta o DOM e o modelo de dados.
   **Importante**: alterações no input atualizam o dado, e vice-versa (via `v-model`).

5. **v-for** é usado para renderizar listas de elementos com base em um array.
   **Exemplo**:

   ```html
   <li v-for="item in lista">{{ item }}</li>
   ```

6. **v-bind\:key** identifica exclusivamente cada item em uma lista dinâmica.
   **Propósito**: melhora a performance e evita erros de renderização.

7. **Reatividade** é a capacidade do Vue de atualizar a interface quando os dados mudam.
   **Facilita**: evita manipulação manual do DOM.

8. **Vantagens do ciclo de vida**: controle sobre quando algo acontece no componente.
   **Hooks**:

   * `created()`: executado após criação da instância.
   * `mounted()`: executado após o DOM ser inserido.

9. **push()** adiciona item ao final do array.
   **splice()** remove/insere elementos.
   **Vue detecta alterações** pois esses métodos são observados internamente.

10. **Vue.set()** adiciona propriedades reativas a objetos/arrays.
    **Usado quando** se adiciona uma nova chave a um objeto que já está sendo observado.

11. **.prevent** impede o comportamento padrão (ex: envio de formulário).
    **.stop** interrompe a propagação do evento para elementos pai.

12. **Modificadores de teclas** detectam teclas específicas em eventos.
    **Exemplo**:

    ```html
    <input @keyup.enter="enviar" />
    ```

13. **Checkbox**: múltiplas seleções (array).
    **Radio**: uma seleção (valor único).
    **Select**: dropdown (único ou múltiplo com `multiple`).

14. **v-model** cria ligação reativa entre o input e o dado.
    **Importante** para formular interativos e dinâmicos.

15. **Vue usa Virtual DOM** para comparar mudanças e atualizar apenas o necessário.
    **Vantagem**: melhora desempenho e evita renderizações desnecessárias.