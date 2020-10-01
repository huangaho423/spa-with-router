import { App } from './App'
import { Sidebar } from '../components/Sidebar'

export const Post = {
  render: () => {
    const content = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">${Sidebar}</div>
          <div class="col-md-9">
            <h1>Post page</h1>
            <div>This is post page.</div>
          </div>
        </div>
      </div>
    `
    return App.render(content)
  },
}
