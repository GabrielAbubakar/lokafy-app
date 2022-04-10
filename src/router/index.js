import { createRouter, createWebHistory } from 'vue-router'
import ReviewsPage from "../pages/ReviewsPage.vue"
import FormPage from "../pages/FormPage"

const routes = [
    {
        path: '/',
        name: 'ReviewsPage',
        component: ReviewsPage
    },
    {
        path: '/formpage',
        name: 'FormPage',
        component: FormPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router