**1. Diferenças entre SSR e CSR**

* **SSR (Server-Side Rendering)**: o servidor gera o HTML completo de cada página a cada requisição e o envia ao cliente.
* **CSR (Client-Side Rendering)**: o servidor envia um HTML mínimo (skeleton) e os arquivos JavaScript; cabe ao navegador montar (renderizar) toda a página dinamicamente.

---

**2. Três vantagens e três desvantagens do SSR**

* **Vantagens**

  1. **Tempo até primeiro conteúdo visível (TTFB) menor**: o usuário vê conteúdo renderizado imediatamente.
  2. **SEO melhorado**: bots de busca indexam HTML completo sem depender de execução de JS.
  3. **Compartilhamento em redes sociais**: meta tags e pré-visualizações são corretamente lidas no servidor.
* **Desvantagens**

  1. **Escalabilidade e carga do servidor**: cada requisição dispara nova renderização completa.
  2. **Latência de rede**: toda vez que o usuário navega, precisa esperar resposta do servidor.
  3. **Complexidade de cache**: é necessário implementar cache sofisticado (por página, por usuário) para reduzir carga.

---

**3. Impacto do SSR no SEO**

* **Indexação de conteúdo**: motores de busca (Google, Bing) recebem HTML já preenchido, aumentando a chance de indexar corretamente títulos, descrições e conteúdo dinâmico.
* **Exemplo**: em um e-commerce com produtos carregados via CSR puro, o Googlebot pode não esperar a execução de JavaScript e indexar páginas “vazias”. Com SSR, cada página de produto chega ao bot com nome, preço e descrição já no HTML, melhorando ranking em buscas por “comprar tênis corrida”.

---

**4. Diferença entre hidratação e renderização inicial no SSR**

* **Renderização inicial (SSR)**: geração do HTML e CSS no servidor e entrega ao cliente para exibição imediata.
* **Hidratação**: após a entrega do HTML, o bundle JavaScript é baixado e “ativa” os event handlers, estado e interatividade no DOM já existente, sem re-renderizar tudo do zero.

---

**5. Como o Next.js utiliza SSR para melhorar a experiência do desenvolvedor**

* **Rotas baseadas em arquivos**: basta criar um arquivo em `pages/` para ter SSR configurado automaticamente.
* **Data Fetching integrado**: funções como `getServerSideProps()` permitem buscar dados no servidor antes de renderizar, retornando props prontas ao componente.
* **Hot Reloading**: durante o desenvolvimento, alterações de código recarregam apenas a parte afetada sem reiniciar o servidor.
* **Built-in optimizations**: suporta `Incremental Static Regeneration` (ISR) e cache automático, unificando SSR e SSG sem configuração extra.
