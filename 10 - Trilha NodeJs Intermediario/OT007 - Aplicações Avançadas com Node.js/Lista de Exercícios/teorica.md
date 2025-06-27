1. **Callbacks vs Promises vs Async/Await**

   * *Callback*: função passada como argumento, chamada após conclusão; leva a “callback hell” se aninhado demais.
   * *Promise*: objeto que resolve (“resolve”) ou rejeita (“reject”); permite `.then()` e `.catch()`, melhora legibilidade e tratamento de erros.
   * *Async/Await*: sintaxe sobre Promises, permite escrever código assíncrono como se fosse síncrono, usando `await` dentro de `async`, facilita leitura e debug.

2. **Worker Threads no Node.js**
   Módulo (`worker_threads`) que cria threads separadas no mesmo processo, ideal para tarefas CPU-bound (cálculos intensivos) sem bloquear o event loop.

3. **Socket.io em comunicação em tempo real**
   Biblioteca que abstrai WebSockets e fallback para outras técnicas; oferece conexão bidirecional, rooms, namespaces e reconexão automática.

4. **Clusters em aplicações Node.js**
   Módulo `cluster` que replica processos (“workers”) para aproveitar múltiplos núcleos de CPU, balanceando conexões e melhorando throughput.

5. **Três vantagens do PM2**

   * Gerenciamento de processos (start/stop/restart) com fácil CLI e GUI.
   * Auto-restart em crashes e monitoramento de uso de CPU/memória.
   * Zero-downtime reload (graceful reload) e balanceamento de carga interno.

6. **Child Process**
   Subprocesso criado via `child_process` (`spawn`, `exec`, etc.); usado para rodar comandos de SO, scripts externos ou dividir tarefas pesadas.

7. **Logging estruturado**
   Registra eventos como objetos JSON com campos padronizados (timestamp, nível, mensagem, metadados); facilita parsing, busca e análise automática.

8. **Vantagem de usar Winston**
   Suporta múltiplos *transports* (console, arquivos, serviços externos), níveis de log configuráveis e formatos customizáveis (JSON, texto, etc.).

9. **Importância de escalar Node.js em produção**
   Para suportar alta concorrência, balancear carga, evitar single point of failure e garantir disponibilidade e performance sob demanda.

10. **Programação assíncrona e performance**
    Não bloqueia o event loop: I/O ocorre em background, o servidor atende outras requisições enquanto espera respostas, aumentando throughput e responsividade.
