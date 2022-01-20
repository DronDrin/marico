const burgers = document.querySelectorAll('.nav-block__burger');
for (let i = 0; i < burgers.length; i++) {
    const el = burgers[i];
    el.addEventListener('click', e => {
        let nav_block;
        if (e.target.className === 'nav-block__burger')
            nav_block = e.target.parentNode.parentNode.parentNode;
        else
            nav_block = e.target.parentNode.parentNode.parentNode.parentNode;
        if (nav_block.classList.contains('nav-block__burger-open'))
            nav_block.classList.remove('nav-block__burger-open');
        else
            nav_block.classList.add('nav-block__burger-open');
    });
}
