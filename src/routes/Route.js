//引入Component
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'
import { Product } from '../pages/Product'
import { Login } from '../pages/Login'
import { Contact } from '../pages/Contact'

//設定路徑並對應Component
export const Route = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/contact', component: Contact },
  { path: '/post/:page([1-9][0-9]*)?', component: Post },
  {
    path: '/product/:category([A-z]*)/:productId([A-z0-9]*)?',
    component: Product,
  },
]
