import { App } from './App'
import $ from 'jquery'
import { loading } from '../utils/func'

const showModal = () => {
  $('#modal').modal('show')
}

export const Home = {
  func: {
    showModal: () => {
      $('#modal').modal('show')
    },
  },
  listener: {
    click: function (e) {
      if (e.target.id === 'button') {
        //呼叫modal
        Home.func.showModal()
      }
    },
  },
  state: {
    //預設顯示狀態
    show: true,
  },
  mount: function () {
    //顯示讀取
    loading()

    if (this.state.show === true) {
      //呼叫modal
      Home.func.showModal()
    }
    //寫入狀態
    this.state.show = false
  },
  render: () => {
    const modal = `
      <div class="modal" tabindex="-1" id="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">重要公告</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>這裡是重要公告的內容....blablabla</p>
            </div>
          </div>
        </div>
      </div>
    `
    const content = `
      <div class="container">
        <h1>Home page</h1>
        <div>Welcome to my page!</div>
        <button class="btn btn-primary" id="button">顯示公告</button>
      </div>
      ${modal}
    `

    return App.render(content)
  },
}
