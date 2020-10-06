import { App } from './App'

export const Post = {
  listener: {
    click: (e) => {
      if (e.target.id === 'button') {
        console.log('post button clicked')
      }
    },
  },
  mount: () => {},
  render: () => {
    const content = `
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h1>Post page</h1>
            <div>This is post page.</div>
            <button class="btn btn-primary" id="button">click me</button>
          </div>
        </div>
      </div>
    `
    return App.render(content)
  },
}
