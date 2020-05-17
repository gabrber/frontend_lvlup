import { productList,currentProductIndex,addProductsToList,productPromise } from './api';

const fetchCarouselProducts = () => {
    productPromise().then(response => {
        return response.json();
    }).then(products => {
        addProductsToList(products.results);
    }).then(() => {
        loadImagesCarousel();
    })
    .catch((error) => { 
        console.log(error);
    });  
}

function loadImagesCarousel() {
    const carsouselItem = document.querySelectorAll('.product-carousel__image');
    for (let i = 0; i < carsouselItem.length; i++) {
        let loadIndex = currentProductIndex();
        carsouselItem[i].src = productList[loadIndex].imgSrc;
    };
}

export default fetchCarouselProducts;