const scrollTop = () => {
    const scrollupButton = document.querySelector('.btn-scroll');
    const scroll_vh = 0.5 * (Math.max(document.documentElement.clientHeight, window.innerHeight || 0));

    window.addEventListener("scroll", () => {
        if (window.scrollY > scroll_vh ) {
            scrollupButton.classList.add('btn-scroll--display');
        } else {
            scrollupButton.classList.remove('btn-scroll--display');
        }
    });

    scrollupButton.addEventListener('click', (e) => {
        window.scroll(0,0);
    });
}

export default scrollTop;