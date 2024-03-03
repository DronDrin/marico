const burgers = document.querySelectorAll('.nav-block__burger');
for (let i = 0; i < burgers.length; i++) {
    const el = burgers[i];
    el.addEventListener('click', e => {
        let nav_block;
        if (e.target.className === 'nav-block__burger')
            nav_block = e.target.parentNode.parentNode.parentNode;
        else
            nav_block = e.target.parentNode.parentNode.parentNode.parentNode;
        if (nav_block.classList.contains('nav-block__burger-open')) {
            nav_block.classList.remove('nav-block__burger-open');
            document.body.classList.remove('scroll-lock');
        } else {
            nav_block.classList.add('nav-block__burger-open');
            document.body.classList.add('scroll-lock');
        }
    });
}

window.addEventListener('scroll', e => {
    checkScroll();
});
checkScroll();
function checkScroll() {
    let topNav = document.getElementsByClassName('nav-block__top')[0];
    if (window.scrollY > 100) {
        topNav.classList.add('nav-block_scrolled');

        if (topNav.classList.contains('nav-block_hide-bottom')) {
            let maxScroll =
                Math.ceil(document.getElementsByClassName('wrapper')[0]
                    .getClientRects()[0].height - window.innerHeight);
            let hideScroll = maxScroll - document.getElementsByClassName('footer')[0]
                .getClientRects()[0].height * 0.7;
            topNav.style.top = Math.min(hideScroll - window.scrollY, 0) + 'px';
        }
    } else {
        topNav.classList.remove('nav-block_scrolled');
    }
}
