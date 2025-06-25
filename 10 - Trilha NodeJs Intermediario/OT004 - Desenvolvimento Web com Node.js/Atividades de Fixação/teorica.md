### **1. Documentação do `EventEmitter`**

* **Principais métodos:**

  * `on`: escuta sempre.
  * `once`: escuta só uma vez.
  * `emit`: dispara um evento.
  * `removeListener`: remove um listener.

* **Diferença `on` vs `once`:**

  * `on`: executa sempre que o evento acontece.
  * `once`: executa só na primeira vez.

* **Emitir sem listener:**
  Nada acontece.

---

### **2. Fluxo de Eventos (resumo)**

1. Listener é registrado com `on` ou `once`.
2. Evento é emitido com `emit`.
3. Callback (função) é executado.

---

### **3. Perguntas rápidas**

* **Qual método emite evento?** → `emit`
* **Para que serve `removeListener`?** → Remover um listener.
* **Pode ter vários listeners no mesmo evento?** → Sim.

---

### **4. Análise do Código**

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('data', (info) => {
  console.log('Dado recebido:', info); // Correto: "log", não "Log"
});

emitter.emit('data', { id: 1, message: 'Olá!' });
```

* Cria um emissor de eventos.
* Registra um ouvinte para o evento `'data'`.
* Emite o evento com um objeto.
  **Saída esperada:**
  `Dado recebido: { id: 1, message: 'Olá!' }`

---

### **5. Exemplos de uso**

* Streaming de vídeo/áudio.
* Notificações em tempo real.
* APIs com dados chegando em partes.

