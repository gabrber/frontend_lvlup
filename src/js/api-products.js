import { productList,currentProductIndex,addProductsToList,productPromise } from './api';

const fetchProducts = () => {
    productPromise().then(response => {
        return response.json();
    }).then(products => {
        addProductsToList(products.results);
    }).then(() => {
        loadImagesProducts();
    })
    .catch((error) => { 
        console.log(error);
    });  
}

function loadImagesProducts() {
    const productItems = document.querySelectorAll('.product-new__item');
    for (let i = 0; i < productItems.length; i++) {
        let loadIndex = currentProductIndex();
        let productName= productItems[i].querySelector('.product__name');
        let productImg = productItems[i].querySelector('.product__img');
        let productPrice = productItems[i].querySelector('.product__price-value');
        productName.innerHTML = productList[loadIndex].name;
        productImg.src =  productList[loadIndex].imgSrc;
        productPrice.innerHTML = productList[loadIndex].price;
    };
}

export default fetchProducts;