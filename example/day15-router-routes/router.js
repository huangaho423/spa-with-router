//引入頁面
// import { Main } from '../pages/Main'
// import { Home } from '../pages/Home'

//* 尋找對應元件(path:當前網址列路徑,routes:路由資訊)
const findComponentByPath = (path, routes) => {
  //? STEP1:若路徑後有斜線,將斜線拿掉處理(排除#根目錄)
  if (path.slice(-1) === '/' && path.match(/\//g).length > 1) {
    path = path.slice(0, -1)
  }
  // let result = routes.find((r) => {}) || undefined
  //? STEP2:比對完全符合路徑
  let result
  result =
    routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gmi'))) ||
    undefined
  //? STEP3:若無比對完全符合路徑,則找尋相似目錄,及判斷是否傳入參數
  if (!result) {
    //尋找唯一符合條件的route
    result = routes.find((r) => {
      //找尋設定參數目錄(:)
      if (r.path.match(/\/:/g)) {
        let props = {}, //傳入參數
          routesArry = r.path.split('/').filter((a) => a), //當前routes路徑目錄陣列(去除無效值)
          urlArry = path.split('/').filter((a) => a) //當前網址列路徑目錄陣列(去除無效值)
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
  return result
}

//* 處理預設傳遞參數(path:當前網址列路徑,props:傳遞參數)
const setPropsDefault = (path, props) => {
  props.__common = {} //建立使用
  props.__common.location = path.split('/').filter((a) => a) //傳入路徑陣列
  props = CommonFunc.deepFreezeObj(props) //凍結props(props無法更改)
  return props
}

export const Router = () => {
  // 尋找對應頁面
  const path = location.hash.split('?')[0].slice(1)
  // 比對頁面組件並傳入參數
  let { component = Error, props = {} } =
    findComponentByPath(path, Routes) || {}
  //導入預設參數
  props = setPropsDefault(path, props)
  //----- render -----
  // 載入預設樣板並進行渲染
  document.querySelector('#wrapper').innerHTML = component.render(props)
}
