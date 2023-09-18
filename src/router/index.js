// Composables
import { createRouter, createWebHistory } from 'vue-router'
import TakeNote from "@/views/TakeNote"
import setupforanewproject from "@/views/setUpForPro"
import { auth, getAuth} from '@/plugins/fireBase'

const routes = [
 
  {

    path: '/',
   // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
      {
        path: 'homepage',
        name: 'HomePage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),

      },
      {
        path: 'takenote',
        name: 'TakeNote',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => TakeNote,
        
      },
      {
        path: 'submitted',
        name: 'Submit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/submitted.vue'),

      },
      {
        path: 'login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/LoginPage.vue'),

      },
      {
        path: 'welcome',
        name: 'Welcome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Welcome.vue'),

      },
      {
        path: 'setupforanewproject',
        name: 'setupforanewproject',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => setupforanewproject,

      },
      {
        path: 'added-new-project',
        name: 'newProject',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>import('@/views/projectCreated.vue'),

      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach(async (to,_,next)=>{
  console.log(getAuth.currentUser+"index")
  if(to.path!= "/login"){
     await auth.authStateReady();
    console.log("current user"+auth.currentUser);
    if(auth.currentUser==null){
      next({path:'login'});
    }
    else{
      next();
    }
  }else{
    next();
  }
});


export default router
