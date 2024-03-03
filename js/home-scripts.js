window.addEventListener('load', () => {
    setTimeout(() => {
        let grads = document.getElementsByClassName('page-header__gradient-lazy');
        for (let i = 0; i < grads.length; i++) {
            const grad = grads[i];
            grad.classList.add('page-header__gradient');
        }
    }, 10);
});
