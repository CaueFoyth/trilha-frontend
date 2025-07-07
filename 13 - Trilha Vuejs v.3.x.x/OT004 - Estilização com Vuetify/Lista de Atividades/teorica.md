### 1. **O que é o Vuetify e suas principais vantagens?**

Vuetify é um framework de componentes UI baseado no Material Design para Vue.js.
**Vantagens:**

* Pronto para uso (componentes estilizados).
* Responsivo.
* Integração nativa com Vue.
* Sistema de temas e layout fácil de personalizar.

---

### 2. **Configuração inicial do Vuetify em um projeto Vue.js**

**Passos:**

1. Criar projeto Vue: `vue create my-app`
2. Entrar na pasta: `cd my-app`
3. Instalar Vuetify: `vue add vuetify`
4. Escolher configurações padrão ou personalizadas.

---

### 3. **Funcionamento do sistema de Grid do Vuetify**

Baseado no **Flexbox**, com 12 colunas.
**Componentes principais:**

* `v-container`, `v-row`, `v-col`.
  **Comparação:**
* Mais intuitivo que CSS puro.
* Sem necessidade de classes utilitárias como no Bootstrap.

---

### 4. **Principais componentes do Vuetify**

* **v-text-field:** Campo de entrada de texto com validação e estilo.
* **v-card:** Bloco com imagem, título, conteúdo e ações.
* **v-data-table:** Tabela interativa com paginação, filtros e ordenação.

---

### 5. **Diferenças: v-btn, v-card e v-dialog**

* **v-btn:** Botão com ações. Ex: enviar formulário.
* **v-card:** Layout visual de conteúdo. Ex: produto, post.
* **v-dialog:** Janela modal. Ex: confirmação, formulários.

---

### 6. **Validação de formulários**

Usa o atributo `rules` com funções de validação.
**Importância:** Garante entrada correta antes de enviar.

```vue
<v-text-field :rules="[v => !!v || 'Campo obrigatório']" />
```

---

### 7. **Data Tables no Vuetify**

Componente `v-data-table` exibe dados em tabela com ordenação, filtros, paginação e personalização.
**Ideal para grandes volumes de dados.**
Exemplo:

```vue
<v-data-table :items="dados" :headers="colunas" />
```

---

### 8. **Temas customizados no Vuetify**

No `vuetify.js`:

```js
theme: {
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#424242'
    }
  }
}
```

Permite alterar cores globais do app.

---

### 9. **Importância do SCSS no Vuetify**

SCSS permite **variáveis, mixins e reaproveitamento de estilos**.
Usado para sobrescrever estilos globais:

```scss
$body-font-family: 'Roboto';
@import '~vuetify/src/styles/styles.sass';
```

---

### 10. **Integração com APIs**

Usa `axios` ou `fetch` para buscar dados e exibir em componentes.
**Exemplo:**

```js
mounted() {
  axios.get('https://api.exemplo.com/users')
    .then(res => this.users = res.data)
}
```

```vue
<v-data-table :items="users" />
```