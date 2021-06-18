import hasParams from './has-params';

const date = Date.now();

const setSession = () => {
  if (hasParams().get('name') && !sessionStorage.getItem('key')) {
    sessionStorage.setItem('key', date);
  } else {
    // セッションを持っている時の処理
    console.log('hasSession'); // eslint-disable-line no-console
  }
};

export default setSession;
