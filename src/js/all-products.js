import fetchMoreProducts from './api-more-products';

const getAllProducts = () => {
    const productsSectionButton = document.querySelector('.product-new__button');
    productsSectionButton.addEventListener('click', (e) => {
        fetchMoreProducts();
    });
}

export default getAllProducts;