import $ from 'jquery'

export const Modal = (id, content, callback, removeModal = true) => {
  //1.預設處理畫面中原有modal
  if (removeModal) {
    if (document.querySelectorAll('[data-modal="true"]').length) {
      document
        .querySelectorAll('[data-modal="true"]')
        .forEach((v) => v.remove())
    }
  }

  //判斷畫面中是否有modal
  let zIndexLevel =
      document.querySelectorAll('[data-modal="true"]').length * 10,
    zIndexModal = 1050,
    zIndexBackdrop = 1040

  //2.定義新創建的modal物件
  const modal = document.createElement('div')
  //賦予modal ID
  modal.id = id
  //賦予modal class
  modal.className = 'modal modal-alert fade'
  modal.setAttribute('data-modal', 'true')
  //設定modal是否可被使用者取消
  modal.setAttribute('data-backdrop', 'static')
  //?處理modal本身的z-index
  modal.style.zIndex = zIndexModal + zIndexLevel
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        ${content}
      </div>
    </div>
  `

  //3.新增至DOM
  document.querySelector('body').appendChild(modal)

  //4.執行跳出
  $(`#${id}`).modal('show')

  //?處理Backdrop z-index
  document.querySelector('.modal-backdrop:last-child').style.zIndex =
    zIndexBackdrop + zIndexLevel

  //5.callback after showing modal
  $(`#${id}`).on('shown.bs.modal', function (e) {
    callback ? callback() : null
  })
  //callback after modal is hidden
  $(`#${id}`).on('hidden.bs.modal', function (e) {
    if (document.querySelector(`#${id}`)) {
      document.querySelector(`#${id}`).remove()
    }
  })
}
