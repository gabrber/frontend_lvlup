import getAllProducts from './all-products';
import getDate from './check-date';
import menu from './menu';
import scrollTop from './scroll-top'; 

const mainModule = () => {
    getAllProducts();
    getDate();
    menu();
    scrollTop();
};

export default mainModule;