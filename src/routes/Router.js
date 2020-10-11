// 引入路徑模組
import { Route } from './Route'
// 找不到頁面
import { NotFound } from '../pages/NotFound'
//引入監聽處理
import { addListener, removeAllListeners } from '../utils/eventListerer'

// 找出對應元件
// path:目前路徑,routes:路徑設定
const getComponent = (path, routes) => {
  // STEP1:若路徑後有斜線,將斜線拿掉處理(排除#根目錄)
  if (path.slice(-1) === '/' && path.match(/\//g).length > 1) {
    path = path.slice(0, -1)
  }

  // STEP2:比對完全符合路徑
  let result =
    routes.find((route) => route.path.match(new RegExp(`^${path}$`))) ||
    undefined

  // STEP3:若無比對完全符合路徑,則找尋相似目錄,及判斷是否傳入參數
  if (!result) {
    //尋找符合條件的route
    result = routes.find((route) => {
      //找尋設定參數目錄(:)
      if (route.path.match(/\/:/g)) {
        //傳入參數初始化
        route.props = {}
        //當前routes路徑目錄陣列(去除無效值)
        let routesArry = route.path.split('/').filter((a) => a)
        //當前網址列路徑目錄陣列(去除無效值)
        let urlArry = path.split('/').filter((a) => a)

        //逐個比對是否符合路徑
        for (let i = 0; i < routesArry.length; i++) {
          //若有設定傳入參數
          if (routesArry[i].slice(0, 1) === ':') {
            //檢查當前路由是否設定傳入參數及正規表示法比對
            let regex = routesArry[i].match(/[^\:(.)^?]+/g)
            //解構路由陣列
            let [params, paramsRegex] = regex
            //排除條件設定
            if (
              urlArry.length > routesArry.length || //當前網址列路徑數目多於routes
              !paramsRegex || //若有設定正規表示法驗證
              (!urlArry[i] && routesArry[i].slice(-1) !== '?') || //若網址不存在,檢查路徑是否設定模糊匹配
              (urlArry[i] &&
                !urlArry[i].match(new RegExp(`^${paramsRegex}$`, 'gm'))) //若網址存在,檢查是否符合路徑設定之正規表示法
            ) {
              return false
            }
            //比對成功,設定傳遞參數值
            route.props[params] = urlArry[i] || '' //將路徑參數導入組件
          } else {
            //若非相似目錄則比對是否完全相同(判斷是否持續比對)
            if (routesArry[i] !== urlArry[i]) {
              return false
            }
          }
        }
        return route
      }
      return false
    })
  }
  // STEP4:返回結果
  return result || {}
}

export const Router = () => {
  // 0.若沒有hash則強制加入預設路徑
  if (!location.hash) {
    location.hash = '#/'
  }
  // 1.得到目前路徑(對應routes)
  const path = location.hash.slice(1).toLowerCase()
  // 2.找出對應頁面
  // ES6 解構賦值
  const { component = NotFound, props = {} } = getComponent(path, Route)
  // 3.將元件內容渲染至畫面
  document.querySelector('#wrapper').innerHTML = component.render(props)
  // 4.元件render後呼叫
  'mount' in component ? component.mount() : null
  // 5.處理監聽事件
  // 取消全部監聽事件
  removeAllListeners()

  // 註冊元件內監聽事件
  'listener' in component
    ? Object.keys(component.listener).forEach((type) =>
        addListener(type, component.listener[type])
      )
    : null
}
