const headerFunction = () => {
  const header = document.querySelector('header');

  // sp用のメニュー表示
  const list = document.querySelector('.bl_spMenu');
  const btn = document.querySelector('.bl_headerMenu_spMenu');
  const links = document.querySelectorAll('.el_spMenu_link');

  if (header && btn) {
    // headerの高さを取得して、要素の位置を調整する
    window.addEventListener('DOMContentLoaded', () => {
      const headerHeight = header.clientHeight;
      const nextElm = document.querySelector('.bl_mv');
      nextElm.style.setProperty('margin-top', `${headerHeight}px`);
      list.style.setProperty('margin-top', `${headerHeight}px`);
    });

    // スクロールに合わせて、headerの表示・非表示を切り替える
    let position = 0;

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;

      if (scroll > 100 && scroll < position) {
        header.setAttribute('data-header-state', 'show');
      } else if (scroll > 100 && scroll > position) {
        header.setAttribute('data-header-state', 'hide');
        list.setAttribute('data-sp-menu', 'hide');
        btn.innerHTML = 'menu';
      } else {
        header.setAttribute('data-header-state', 'show');
      }

      // position初期化
      position = scroll;
    });

    btn.addEventListener('click', () => {
      const attr = list.getAttribute('data-sp-menu');
      if (attr === 'show') {
        list.setAttribute('data-sp-menu', 'hide');
        btn.innerHTML = 'menu';
      } else {
        list.setAttribute('data-sp-menu', 'show');
        btn.innerHTML = 'close';
      }
    });

    links.forEach((e) => {
      e.addEventListener('click', () => {
        list.setAttribute('data-sp-menu', 'hide');
        btn.innerHTML = 'menu';
      });
    });
  }
};

export default headerFunction;
