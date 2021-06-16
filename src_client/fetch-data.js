export default function fetchData() {
  // URL取得
  const url = new URL(window.location.href);
  // URLSearchParamsオブジェクト取得
  const params = url.searchParams;
  // ターゲットになる要素
  const targetElement = document.querySelector('.bl_replyForm');
  const areas = {
    group: document.querySelector('[data-pass-text="group"]'),
    name: document.querySelector('[data-pass-text="name"]'),
    start: document.querySelector('[data-pass-text="start"]'),
    end: document.querySelector('[data-pass-text="end"]'),
    kana: document.querySelector('[data-form-input="kana"]'),
    first: document.querySelector('[data-date-text="first-name"]'),
    startTime: document.querySelector('[data-date-text="start-time"]'),
    endTime: document.querySelector('[data-date-text="end-time"]'),
  };
  // API問い合わせ先URL
  const apiURL = `https://script.google.com/a/hi0711.xyz/macros/s/AKfycbze5J3J7RCrD-T8meouPAKmjQn0DbOKgOG_rOyQ/exec?q=${params.get(
    'name',
  )}`;

  if (targetElement) {
    // eslint-disable-next-line
    function returnData() {
      // 変数定義
      let groupData;
      let nameData;
      let startData;
      let endData;
      let kanaData;
      let firstData;

      return fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          // eslint-disable-next-line
          for (const i in data) {
            groupData = data[i].group;
            nameData = data[i].en;
            startData = data[i].start;
            endData = data[i].end;
            kanaData = data[i].kana;
            firstData = data[i].firstName;
          }
        })
        .then(() => {
          areas.group.innerHTML = groupData || 'ERR!';
          areas.name.innerHTML = nameData || 'ERR!';
          areas.start.innerHTML = startData || 'ERR!';
          areas.end.innerHTML = endData || 'ERR!';
          areas.kana.value = kanaData || '';
          areas.first.innerHTML = firstData || '';
          areas.startTime.innerHTML = startData || 'ERR!';
          areas.endTime.innerHTML = endData || 'ERR!';
        });
    }

    returnData();
  }
}
