export const loading = () => {
  const spinners = `
    <div class="d-flex justify-content-center align-items-center bg-light h-100 w-100 fixed-top" id="spinner" style="z-index:1100">
      <div class="spinner-grow text-primary" role="status"></div>
    </div>
  `

  //插入HTML至指定元件最後一個子元素之後
  document.querySelector('body').insertAdjacentHTML('beforeend', spinners)

  //模擬讀取1秒後消失
  setTimeout(function () {
    document.querySelector('#spinner').remove()
  }, 2000)
}
