import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PhonePage from '../views/PhonePage.vue';
import PhoneDetail from '../views/PhoneDetail.vue';
import AddPhone from '../views/AddPhone.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/phones',
    name: 'PhonePage',
    component: PhonePage,
  },
  {
    path: '/phones/:id',
    name: 'PhoneDetail',
    component: PhoneDetail,
    props: true,
  },
  {
    path: '/add-phone',
    name: 'AddPhone',
    component: AddPhone,
  },
];

const router = createRouter({
  history: createWebHistory(),  // Remove process.env.BASE_URL
  routes,
});

export default router;
