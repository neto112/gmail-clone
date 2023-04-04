import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmailView from '../views/template/EmailView.vue'
import MessageView from '../views/MessageView.vue'

const routes = [
  {
    path: '/email',
    component: EmailView,
    children: [
      {
        path: '',
        component: HomeView
      },
      {
        path: 'message',
        component: MessageView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
