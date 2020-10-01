import { App } from './App'

export const NotFound = {
  render: () => {
    const content = `
      <div class="container">
        <h1>This page not found!</h1>
      </div>
    `
    return App.render(content)
  },
}
