const hasParams = () => {
  // URL取得
  const url = new URL(window.location.href);
  // URLSearchParamsオブジェクト取得
  const params = url.searchParams;

  return params;
};

export default hasParams;
