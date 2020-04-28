import getAllProducts from './all-products';
import carousel from './carousel';
import getDate from './check-date';
import menu from './menu';
import scrollTop from './scroll-top'; 

const mainModule = () => {
    getAllProducts();
    carousel();
    getDate();
    menu();
    scrollTop();
};

export default mainModule;