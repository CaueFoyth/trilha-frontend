1. **O que é o Pinia?**
   É uma forma de guardar e compartilhar dados no Vue. Ele é mais fácil de usar que o Vuex e funciona bem com o Vue 3.

---

2. **O que são state, actions e getters no Pinia?**

* **State**: onde ficam os dados.
* **Actions**: funções para mudar os dados (podem ser assíncronas).
* **Getters**: pegam os dados do state e podem modificá-los para exibir.

---

3. **Por que usar vários arquivos no Pinia?**
   Para deixar tudo organizado. Você cria um store para cada parte do app (ex: `auth`, `produtos`), o que facilita a manutenção.

---

4. **Por que usar async/await no Pinia?**
   Para fazer coisas que demoram, como buscar dados da internet. Você usa `await` nas **actions**, e assim o código fica mais fácil de entender.

---

5. **O que é o Vue DevTools?**
   É uma ferramenta que mostra o que está acontecendo no seu app. Com ele, você pode ver os dados do Pinia mudando em tempo real.

---

6. **O que é DRY, KISS e SOLID?**

* **DRY**: não repetir código.
* **KISS**: manter tudo simples.
* **SOLID**: escrever código bem feito.
  Essas ideias ajudam a fazer um código limpo e fácil de manter.

---

7. **Como organizar um projeto Vue grande?**
   Use pastas como:

* `components/`: partes da interface
* `views/`: telas completas
* `stores/`: Pinia
* `services/`: chamadas à API
* `router/`: rotas

---

8. **O que é ESLint e Prettier?**

* **ESLint**: avisa quando tem algo errado no código.
* **Prettier**: arruma a formatação (espaços, vírgulas, etc).
  Eles ajudam a manter o código bonito e igual para todos.

---

9. **Por que padronizar o código?**
   Ajuda o time a trabalhar junto sem bagunça. O Prettier deixa tudo com o mesmo estilo.

---

10. **O que é a Composition API e como ela ajuda no Pinia?**
    É uma nova forma de escrever código no Vue 3. Ela funciona muito bem com o Pinia e deixa o código mais organizado.