import { createRouter, createWebHistory } from "vue-router"
import FormComponent from "./FormComponent.vue"
import Model from "./Model.vue"
import Page from "./Page.vue"


const routes = [
  {
    path: '',
    name: 'Dien Thoai',
    component: Model,
  },
  {
    path: '/add_Dien-thoai',
    name: 'ADD Dien Thoai',
    component: FormComponent,
  },
  {
    path: '/view-update',
    name: 'Detail',
    component: FormComponent,
  },
  {
    path: '/page',
    name: 'Page',
    component: Page,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router