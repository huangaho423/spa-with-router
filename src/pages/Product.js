export const Product = {
  render: (props) => {
    return `
        <div class="p-5">
            <h3>商品頁</h3>
            <h5>目前所在的分類是：${props.category}</h5>
            <h5>目前所在的頁面是：第${props.page}頁</h5>
        </div>
    `
  },
}
