**1. O que é TypeScript e quais suas principais vantagens em relação ao JavaScript?**
TypeScript é um superset do JavaScript que adiciona tipagem estática.
**Vantagens:**

* Detecção de erros em tempo de desenvolvimento.
* Melhor autocompletar e suporte em editores de código.

---

**2. Diferença do código TypeScript para JavaScript:**
No TypeScript, os parâmetros `a` e `b` são explicitamente do tipo `number`.
Diferença: Em JavaScript, não há verificação de tipo — `multiplicar(4, "5")` pode causar comportamento inesperado.
No TypeScript, isso gera erro antes da execução.

---

**3. Passos para instalar e configurar TypeScript:**

1. `npm init -y` → Cria um `package.json`.
2. `npm install -g typescript` → Instala o TypeScript.
3. `npx tsc --init` → Cria o arquivo `tsconfig.json`.

---

**4. O que é o `tsconfig.json` e sua importância:**
É o arquivo de configuração do compilador TypeScript.
**Importância:** Controla como o código será compilado.
**Exemplos de configurações:**

* `"target": "es6"`
* `"strict": true`

---

**5. Comandos para compilar e rodar o código (`index.ts`):**

1. `tsc index.ts` → Compila o arquivo TypeScript para JavaScript.
2. `node index.js` → Executa o JavaScript compilado.