import { App } from './App'

export const Product = {
    mount: () => {
        console.log(fetch('/src/json/product.json', {}))
        fetch('/src/json/product.json', {})
            .then((res) => res.json())
            .then((data) => {
                const productList = document.querySelector('#productList')

                data.result.forEach((item) => {
                    productList.innerHTML += `
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <div class="overflow-hidden" style="height:150px"><img src="${item.image}" class="img-fluid" alt="${item.name}" style="width:100%"></div>
                                <div class="card-body">
                                    <h5 class="font-weight-bold">${item.name}</h5>
                                    <h6>$ ${item.price}</h6>
                                    <h6>${item.desc}</h6>
                                    <a href="#/product/detail/${item.id}" class="btn btn-block btn-primary">
                                        <i class="fas fa-shopping-cart"></i> 購買
                                    </a>
                                </div>
                            </div>
                        </div>
                    `
                })
            })
    },
    render: (props) => {
        const content = `            
        <div class="container">
            <h3>${props.category}</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">${props.category}</li>
                </ol>
            </nav>
            <div id="productList" class="row"></div>
        </div>
    `

        return App.render(content)
    },
}
