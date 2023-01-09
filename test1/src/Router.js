import {
    createRouter,
    createWebHistory
  } from 'vue-router';
  
  import HomePage  from '@/components/Home.vue';
  const routes = [{
      path: "/",
      name: "HomePage ",
      component: HomePage ,
    },
   
   
  
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;