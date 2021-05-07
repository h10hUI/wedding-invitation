export default function headerFunction() {
    // headerの高さを取得して、要素の位置を調整する
    window.addEventListener('DOMContentLoaded', () => {
        const headerHeight = target.clientHeight;
        const nextElm = document.querySelector('.bl_mv');
        console.log(headerHeight);
        nextElm.style.setProperty('margin-top', headerHeight + 'px');
    })

    // スクロールに合わせて、headerの表示・非表示を切り替える
    let position = 0;
    const target = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;

        if (scroll > 100 && scroll < position) {
            target.setAttribute('data-header-state', 'show')
        } else if (scroll > 100 && scroll > position) {
            target.setAttribute('data-header-state', 'hide')
        } else {
            target.setAttribute('data-header-state', 'show')
        }

        position = scroll;
    });
}
