//引入Component
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'
import { Product } from '../pages/Product'

//設定路徑並對應Component
export const Route = [
  { path: '/', component: Home },
  { path: '/post/:page([1-9][0-9]*)?', component: Post },
  {
    path: '/product/:category([A-z]*)/:page([1-9][0-9]*)?',
    component: Product,
  },
]
