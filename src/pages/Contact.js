//引入jQuery
import $ from 'jquery'

//引入外框組件
import { App } from './App'

//引入Modal模組
import { Modal } from '../components/Modal'

//引入fontawesome
import fontawesome from '@fortawesome/fontawesome'
import { faComment } from '@fortawesome/fontawesome-free-regular'
fontawesome.library.add(faComment)

export const Contact = {
  func: {
    showModal: () => {
      //表單內容
      const formModal = `
        <form>
          <div class="modal-header">
            <h5 class="modal-title">留言給river</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="name">稱呼</label>
                <input type="text" class="form-control" id="name" placeholder="請填寫您的稱呼" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="請填寫email" required>
              </div>
              <div class="form-group">
                <label for="message">留言內容</label>
                <textarea type="email" class="form-control" id="message" placeholder="請填寫內容" required></textarea>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="submit" class="btn btn-primary" id="submit">提交</button>
          </div>
        </form>
      `
      //定義按下提交的callback
      const formCB = () => {
        //form表單
        const form = document.querySelector('#formModal form')

        //綁定表單提交事件
        form.onsubmit = (event) => {
          //取消提交表單預設事件
          event.preventDefault()
          //確認視窗內容
          const confirmModal = `
            <form>
              <div class="modal-header">
                <h5 class="modal-title">留言給river</h5>
              </div>
              <div class="modal-body">
                <h5>確定要提交嗎?</h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">否</button>
                <button type="button" class="btn btn-primary" id="commit">是</button>
              </div>
            </form>
          `

          //完成提交表單的callback
          const confirmCB = () => {
            //commit按鈕
            const commit = document.querySelector('#confirmModal #commit')

            commit.onclick = () => {
              console.log('完成提交!')
              //關閉modal
              $('[data-modal="true"]').modal('hide')
            }
          }
          //彈出確認視窗(不關閉前個視窗)
          Modal('confirmModal', confirmModal, confirmCB, false)
        }
      }
      //彈出填寫表單視窗
      Modal('formModal', formModal, formCB)
    },
  },
  listener: {
    click: function (e) {
      if (
        e.target.closest('button') &&
        e.target.closest('button').id === 'button'
      ) {
        //呼叫modal
        Contact.func.showModal()
      }
    },
  },
  render: () => {
    const content = `
      <div class="container">
        <h1>填寫表單</h1>
        <h6>請點擊下方按鈕填寫表單</h6>
        <button class="btn btn-danger" id="button"><i class="far fa-comment"></i> 填寫表單</button>
      </div>
    `

    return App.render(content)
  },
}
