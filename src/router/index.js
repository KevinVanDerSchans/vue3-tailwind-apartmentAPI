import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import HousingPage from '../views/HousingPage.vue'
import QuestionsPage from '../views/QuestionsPage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/viviendas',
      name: 'housing',
      component: HousingPage
    },
    {
      path: '/preguntas',
      name: 'questions',
      component: QuestionsPage
    },
    {
      path: '/contacto',
      name: 'contact',
      component: ContactPage
    },
  ]
})

export default router;
