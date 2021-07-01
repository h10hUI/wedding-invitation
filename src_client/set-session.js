import hasParams from './has-params';

// const date = Date.now(); // 実装中はコメントアウト

const setSession = () => {
  if (hasParams().get('name') && !sessionStorage.getItem('key')) {
    // sessionStorage.setItem('key', date); // 実装中はコメントアウト
    const createElement = document.createElement('div');
    createElement.className = 'bl_splash';
    document.body.append(createElement);
  } else {
    // セッションを持っている時の処理
    console.log('hasSession'); // eslint-disable-line no-console
  }
};

export default setSession;
