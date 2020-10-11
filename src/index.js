//引入bootstrap的必要檔案
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle'

//引入fontawesome
import '@fortawesome/fontawesome-free-solid'

//引入scss
import './scss/style.scss'

//Router
import { Router } from './routes/Router'

//監聽hash變化&加載完畢事件
window.addEventListener('hashchange', Router)
window.addEventListener('load', Router)
