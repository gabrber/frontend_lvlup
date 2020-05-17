import { productList,currentProductIndex,addProductsToList,productPromise } from './api';

const fetchMoreProducts = () => {
    productPromise().then(response => {
        return response.json();
    }).then(products => {
        addProductsToList(products.results);
    }).then(() => {
        showMoreProducts();
    })
    .catch((error) => { 
        moreProductsError();
        console.log(error);
    });  
}

const showMoreProducts = () => {
    const productsSection = document.querySelector('.product-new__continer');
    const productsSectionButton = document.querySelector('.product-new__button');
    const moreProductsCount = 8;
    
    for (let i = 0; i < moreProductsCount; i++) {
        let loadIndex = currentProductIndex();
        let newProduct = document.createElement("div");
        newProduct.className = "card col-md-3 col-sm-6 col-6 col-sm-6 product-new__item";
        newProduct.innerHTML = `
        <img class="card-img-top product__img" src="` + productList[loadIndex].imgSrc + `" alt="Card image cap">
        <div class="card-body product__item">
            <p class="card-title product__item__desc product__name">` + productList[loadIndex].name + `</p>
            <p class="card-text product__item__desc product__price">$<span class="product__price-value">` + productList[loadIndex].price + `</span></p>
        </div>`;
        productsSection.insertBefore(newProduct,productsSectionButton);
    }
}

const moreProductsError = () => {
    const productsSection = document.querySelector('.product-new__continer');
    const productsSectionButton = document.querySelector('.product-new__button');
    
    let newProduct = document.createElement("div");
    newProduct.innerHTML = `<p>Sorry, we cannot find more products to load.</p>`;
    productsSection.insertBefore(newProduct,productsSectionButton);
    productsSectionButton.classList.add('product-new__button--hidden');
}

export default fetchMoreProducts;