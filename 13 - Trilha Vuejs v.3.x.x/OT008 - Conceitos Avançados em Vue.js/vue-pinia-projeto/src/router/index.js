import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import ListaProdutos from '../components/ListaProdutos.vue'

const routes = [
  {
    path: '/produtos',
    component: ListaProdutos,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.token) {
    alert('Acesso negado. Faça login.')
    next('/')
  } else {
    next()
  }
})
