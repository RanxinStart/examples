import type { RouteRecordRaw } from 'vue-router'
import NavLayout from '@/layout/NavLayout.vue'

export const home: RouteRecordRaw = {
  path: '/home',
  component: NavLayout,
  children: [
    {
      path: '',
      name: 'home',
      meta: { title: '首页' },
      component: () => import('@/views/home/index.vue')
    }
  ]
}
