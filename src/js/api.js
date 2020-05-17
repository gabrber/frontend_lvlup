const productList = [];

let nextProductPage = (function () {
    let i = 0;
    const nextPage = function() {
        return i++;
    }
    return nextPage;
})()

let currentProductIndex = (function () {
    let i = 0;
    const currIndex = function() {
        return i++;
    }
    return currIndex;
})()

let alerted = (function () {
    let i = 0;
    const alertMessage = function() {
        if (i < 1) {
            alert("Our website is not working correctly. Please try again later.");
            return i++;
        }
    }
    return alertMessage;
})()

const addProductsToList = (loadedProducts) => {
    for (let i = 0; i < loadedProducts.length; i++) {
        let oneProduct = loadedProducts[i];
        // console.log(oneProduct);
        productList.push({"name": oneProduct.name,"imgSrc": oneProduct.images[0].url,"price": oneProduct.price.value });
    };
}

const productPromise = () => {
    let pageNb = nextProductPage();
    const productsPromise = fetch ("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=" + pageNb + "&pagesize=8", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          "x-rapidapi-key": "95cb5eb8a8msh0e38927aa571311p168e5bjsn1649e0060947"
        }
    });
    productsPromise.catch((error) => { 
        alerted();
    });  
    return productsPromise;
}

export {productList,nextProductPage,currentProductIndex,addProductsToList, productPromise};