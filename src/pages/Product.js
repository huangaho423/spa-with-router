export const Product = {
  render: (props) => {
    return `
        <div class="p-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">${props.category}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">${props.productId}</li>
                </ol>
            </nav>
            <h3>商品頁</h3>
            <h5>目前所在的分類是：${props.category}</h5>
            <h5>目前商品的編號是：${props.productId}</h5>
                <div class="row">
                    <div class="card" style="width: 18rem;">
                    <h5 class="card-header">card header</h5>
                    <div class="card-body">
                    <p class="card-text">card body</p>
                    <a href="#" class="btn btn-primary">Link</a>
                    </div>
                    <div class="card-footer">card footer</div>
                </div>
            </div>
        </div>
    `
  },
}
