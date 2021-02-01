import Vue from 'vue'
import VueRouter from "vue-router";
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Invoices from './views/Invoices.vue'
import PaymentInfo from './views/PaymentInfo.vue'
import Invoice from './views/Invoice.vue'


Vue.use(VueRouter);

const routes2 = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/myinfo',
    name: 'myinfo',
    component: Projects
  },
  {
    path: '/payments',
    name: 'payments',
    component: PaymentInfo
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: Invoices
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: Invoice
  }
]

export default new VueRouter ({
  mode: 'history',
  routes: routes2
})
