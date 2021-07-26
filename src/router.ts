/*
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-23 15:06:58
 * @LastEditTime: 2021-07-22 14:50:48
 * @LastEditors: 陈秀根
 * @Description: 路由配置
 * 
 */
import * as VueRouter from "vue-router";
import Home from "@/view/Home.vue";
import { defineComponent, h, ref } from "vue";

const NotFound = defineComponent(() => {
  const leftTime = ref(5);
  const router = VueRouter.useRouter()
  const path = VueRouter.useRoute().path
  const timer = setInterval(() => {
    leftTime.value--
    if (leftTime.value <= 0) {
      clearInterval(timer);
      router.push({ path: "/" })
    }
  }, 1000)
  return () => h('div', [
    h('h2', '404'),
    h('h3', `${path} is not found`),
    h('div', 'redirect home ...' + leftTime.value)
  ]);
})

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: () => import("./view/About.vue")
    },
    {
      path: "/setting",
      component: () => import("./view/Setting.vue")
    },
    { path: '/:a(.*)*', name: 'NotFound', component: NotFound },
  ]
});

export default router;
