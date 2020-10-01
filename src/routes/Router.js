// 引入路徑模組
import { Route } from './Route'
// 找不到頁面
import { NotFound } from '../pages/NotFound'

// 找出對應元件
// path:目前路徑,routes:路徑設定
const getComponent = (path, routes) => {
  // STEP1:若路徑後有斜線,將斜線拿掉處理(排除#根目錄)
  if (path.slice(-1) === '/' && path.match(/\//g).length > 1) {
    path = path.slice(0, -1)
  }

  // STEP2:比對完全符合路徑
  let result =
    routes.find((r) => r.path.match(new RegExp(`^${path}$`))) || undefined

  // STEP3:若無比對完全符合路徑,則找尋相似目錄,及判斷是否傳入參數
  if (!result) {
    //尋找符合條件的route
    result = routes.find((r) => {
      //找尋設定參數目錄(:)
      if (r.path.match(/\/:/g)) {
        //傳入參數
        let props = {}
        //當前routes路徑目錄陣列(去除無效值)
        let routesArry = r.path.split('/').filter((a) => a)
        //當前網址列路徑目錄陣列(去除無效值)
        let urlArry = path.split('/').filter((a) => a)

        //逐個比對是否符合路徑
        for (let i = 0; i < routesArry.length; i++) {
          //若有設定傳入參數
          if (routesArry[i].slice(0, 1) === ':') {
            if (
              (urlArry.length !== routesArry.length && //若路徑陣列數量不一樣
                routesArry[i].slice(-1) !== '?') || //且router後無設定?
              urlArry.length > routesArry.length //當前網址列路徑數目多於routes
            ) {
              return false
            }
            //檢查當前路由是否設定傳入參數及正規表示法比對
            let regex = routesArry[i].match(/[^\(^\:^\?\^)]+/g)
            //解構路由陣列
            let [params, paramsRegex] = regex
            if (
              paramsRegex && //若有設定正規表示法驗證
              urlArry[i] && //網址是否有結構
              !urlArry[i].match(new RegExp(`^${paramsRegex}$`, 'gm')) //若與網址結構比對無結果
            ) {
              return false
            }
            //比對成功,設定傳遞參數值
            props[params] = urlArry[i] || ''
            r.props = props //將路徑參數導入組件
          } else {
            //若非相似目錄則比對是否完全相同(判斷是否持續比對)
            if (routesArry[i] !== urlArry[i]) {
              return false
            }
          }
        }
        return r
      }
      return false
    })
  }
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
}
