import carousel from './carousel';
import fetchApi from './api-first-load';

const preMainModule = () => {
    fetchApi();
    carousel();
};

export default preMainModule;