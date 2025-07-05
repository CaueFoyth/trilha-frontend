### **1. Estrutura básica de um arquivo `.vue`**

Um arquivo `.vue` possui 3 seções principais:

* `<template>`: Define o HTML do componente.
* `<script>`: Contém a lógica JavaScript (dados, métodos, ciclo de vida).
* `<style>`: Define os estilos CSS do componente. Pode ser global ou scoped.

---

### **2. O que são props no Vue.js**

Props são atributos usados para **passar dados de um componente pai para um filho**. O componente filho declara as props que espera receber e pode usá-las como dados.

```js
props: ['mensagem']
```

---

### **3. Diferença entre props e eventos personalizados**

* **Props**: Comunicação **de pai para filho** (envio de dados).
* **Eventos personalizados (`$emit`)**: Comunicação **de filho para pai** (notificação de ações).

Use props para **receber dados** e `$emit` para **enviar eventos ou mudanças** para o pai.

---

### **4. O que são slots**

Slots permitem **inserir conteúdo personalizado** em componentes reutilizáveis.

**Exemplo:**

```vue
<template>
  <div>
    <slot></slot> <!-- Slot padrão -->
  </div>
</template>
```

Utilidade: Criar componentes mais flexíveis (como cards ou modais).

---

### **5. Mixins no Vue.js**

Mixins são objetos que contêm propriedades reutilizáveis (data, methods, etc.) e podem ser incluídos em múltiplos componentes.

**Benefícios:** Reutilização de lógica.

**Problemas:** Conflitos de nomes e difícil rastreabilidade em projetos grandes.

---

### **6. Importância do `v-bind:key`**

O `key` identifica **unicamente cada item** em listas renderizadas com `v-for`, ajudando o Vue a **rastrear e atualizar apenas o que mudou**, otimizando a performance e evitando bugs.

---

### **7. Vantagens de organizar com `components/`, `views/`, `router/`, `store/`**

* **components/**: Reutilização de componentes pequenos.
* **views/**: Telas principais (rotas).
* **router/**: Configuração de rotas.
* **store/**: Estado centralizado (Vuex ou Pinia).

Essa estrutura melhora a **manutenção, legibilidade e escalabilidade** do projeto.

---

### **8. Dois componentes com o mesmo mixin**

Se dois componentes usam o mesmo mixin, os dados e métodos do mixin são **mesclados** com os do componente.

**Conflitos**:

* Métodos: O método do componente sobrescreve o do mixin.
* Dados: Podem causar conflitos se os nomes forem iguais.

---

### **9. Diferença entre slot simples e slot nomeado**

* **Slot simples (`<slot>`)**: Recebe um único bloco de conteúdo padrão.
* **Slot nomeado (`<slot name="...">`)**: Permite múltiplas áreas de conteúdo personalizáveis.

**Exemplo:**

```vue
<slot name="header"></slot>
<slot></slot> <!-- conteúdo padrão -->
```

---

### **10. Comunicação entre componentes pai e filho**

* **Pai → Filho**: via **props**
* **Filho → Pai**: via **eventos personalizados** (`this.$emit()`)

Importância: Permite criar **componentes modulares e reutilizáveis**, promovendo um código mais limpo e desacoplado.