import { Navbar } from '../components/Navbar'

export const App = {
  render: (conponent) => {
    return `
        ${Navbar}
        <div class="py-5">${conponent}</div>
    `
  },
}
