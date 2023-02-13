import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterListView from '../views/CharacterListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character-list',
      name: 'character-list',
      component: CharacterListView
    },
    {
      path: '/pokemon/:id',
      name: 'pokeSearch'
    }
  ]
})

export default router
