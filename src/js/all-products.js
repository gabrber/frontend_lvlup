const getAllProducts = () => {
    const productsSection = document.querySelector('.product-new__continer');
    const productsSectionButton = document.querySelector('.product-new__button');
    
    const newProduct = `
    <div class="card col-md-3 col-sm-6 col-6 col-sm-6 product-new__item">
        <img class="card-img-top" src="https://via.placeholder.com/309x390" alt="Card image cap">
        <div class="card-body product__item">
            <p class="card-title product__item__desc product__name">New Product</p>
            <p class="card-text product__item__desc product__price">$0.00</p>
        </div>
    </div>`;
    const allProductsCount = 7;
    
    productsSectionButton.addEventListener('click', (e) => {
        productsSectionButton.classList.add('product-new__button--hidden');
        for (let i = 0; i < allProductsCount; i++) {
            productsSection.innerHTML += newProduct;
        }
    });
}

export default getAllProducts;