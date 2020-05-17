import fetchCarouselProducts from './api-carousel';
import fetchAddsProducts from './api-adds';
import fetchProducts from './api-products';

const fetchApi = () => {
    fetchCarouselProducts();
    fetchAddsProducts();
    fetchProducts();
};

export default fetchApi;