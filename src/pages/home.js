import { App } from './App'

export const Home = {
  render: () => {
    const content = `
      <div class="container">
        <h1>Home page</h1>
        <div>Welcome to my page!</div>
      </div>
    `
    return App.render(content)
  },
}
