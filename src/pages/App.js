import { Navbar } from '../components/Navbar'

export const App = {
  render: (conponent) => {
    return `
        ${Navbar}
        <div class="py-3">${conponent}</div>
    `
  },
}
