1. **O que é o loop de eventos e qual sua importância no Node.js?**
   É o mecanismo que gerencia operações assíncronas no Node.js. Ele permite executar código não-bloqueante, respondendo a eventos conforme ocorrem.

2. **Diferencie CommonJS de ES Modules.**
   CommonJS (`require`) é o sistema antigo de módulos usado no Node.js. ES Modules (`import`) é o padrão moderno do JavaScript, com suporte nativo em navegadores e no Node.js.

3. **O que são Streams e Buffers?**

   * *Streams*: Manipulam dados em partes (chunks), ideais para leitura ou escrita contínua.
   * *Buffers*: Armazenam dados binários temporariamente, úteis para processar arquivos ou dados recebidos.

4. **Liste três tipos de Streams e suas aplicações.**

   * *Readable*: Leitura de dados (ex: ler arquivos com `fs.createReadStream`).
   * *Writable*: Escrita de dados (ex: salvar arquivos com `fs.createWriteStream`).
   * *Duplex*: Faz leitura e escrita (ex: conexões de rede com sockets).

5. **Explique a diferença entre erros de runtime e erros de sintaxe.**

   * *Erros de sintaxe*: Ocorrem quando o código está mal escrito (ex: falta de parênteses).
   * *Erros de runtime*: Acontecem durante a execução (ex: acessar variável indefinida).

6. **Quais são as vantagens de usar Streams para processamento de dados?**

   * Reduz o uso de memória
   * Permite processar dados em tempo real
   * É mais eficiente com grandes volumes de dados

7. **Como o módulo fs pode ser usado para manipular arquivos?**
   Ele permite ler, escrever, copiar, renomear e excluir arquivos com funções como `fs.readFile`, `fs.writeFile`, `fs.unlink`, etc.

8. **O que acontece quando um erro não é tratado em um stream?**
   O processo pode ser encerrado com erro (crash). Deve-se sempre tratar erros com `.on('error', ...)`.

9. **Qual é a função do http no Node.js?**
   Criar servidores web e lidar com requisições e respostas HTTP de forma nativa, sem frameworks externos.

10. **Explique o papel do Thread Pool no Node.js.**
    Executa tarefas pesadas (como I/O ou criptografia) em segundo plano, fora do loop de eventos, evitando que ele fique bloqueado.
