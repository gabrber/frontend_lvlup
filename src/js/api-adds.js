import { productList,currentProductIndex,addProductsToList,productPromise } from './api';

const fetchAddsProducts = () => {
    productPromise().then(response => {
        return response.json();
    }).then(products => {
        addProductsToList(products.results);
    }).then(() => {
        loadImagesSpecial();
    })
    .catch((error) => { 
        console.log(error);
    });  
}

function loadImagesSpecial() {
    const addsItems = document.querySelectorAll('.product-adds__item');
    for (let i = 0; i < addsItems.length; i++) {
        let loadIndex = currentProductIndex();
        let addName= addsItems[i].querySelector('.product-adds__name');
        let addImg = addsItems[i].querySelector('.product-adds__img');
        addName.innerHTML = productList[loadIndex].name;
        addImg.src =  productList[loadIndex].imgSrc;
    };
}

export default fetchAddsProducts;