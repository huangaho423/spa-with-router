//引入scss
import './scss/style.scss'

//Router
import { Router } from './routes/Router'

//監聽路由&加載事件
window.addEventListener('hashchange', Router)
window.addEventListener('load', Router)
