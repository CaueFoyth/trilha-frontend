<template>
  <div class="container my-3">
    <h5>Ex 10 - Sistema de Abas (Tabs)</h5>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.id">
        <a
          class="nav-link"
          :class="{ active: activeTab === tab.id }"
          href="#"
          @click.prevent="activeTab = tab.id"
        >{{ tab.name }}</a>
      </li>
    </ul>

    <div class="tab-content p-3 border border-top-0">
      <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id">
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      tabs: [
        { id: 1, name: 'Aba 1', content: 'Conteúdo da Aba 1' },
        { id: 2, name: 'Aba 2', content: 'Conteúdo da Aba 2' },
        { id: 3, name: 'Aba 3', content: 'Conteúdo da Aba 3' },
      ]
    }
  }
}
</script>
