import { App } from './App'
import $ from 'jquery'

export const Home = {
  state: {
    //預設顯示狀態
    show: true,
  },
  mount: function () {
    if (this.state.show === true) {
      //呼叫modal
      $('#modal').modal('show')
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
        <!-- <div>這是您第<span id="visited"></span>次造訪頁面</div> -->
      </div>
      ${modal}
    `

    return App.render(content)
  },
}
