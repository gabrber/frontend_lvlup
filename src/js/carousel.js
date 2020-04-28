import '../../node_modules/glider-js/glider.min.js'

const carousel = () => {
    window.addEventListener('load', function () {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            rewind: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: {
                            prev: '.glider-prev',
                            next: '.glider-next'
                        },
                    }
                }
            ]
        });
    })
}

export default carousel;