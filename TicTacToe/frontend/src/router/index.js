import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HighScoreView from '../views/HighScoreView.vue'
// import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/highscores',
    name: 'highscores',
    component: HighScoreView

  },
//   {
//     path: '/login',
//     name: 'login',
//     component: LoginView
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
