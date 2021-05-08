export default function fetchData() {
    // URL取得
    const url = new URL(window.location.href);
    // URLSearchParamsオブジェクト取得
    const params = url.searchParams;
    // ターゲットになる要素
    const targetElement = document.querySelector('.bl_replyForm');
    const areas = {
        group: document.querySelector('[data-pass-text="group"]'),
        name:  document.querySelector('[data-pass-text="name"]'),
        start: document.querySelector('[data-pass-text="start"]'),
        end:   document.querySelector('[data-pass-text="end"]'),
        kana:  document.querySelector('[data-form-input="kana"]'),
    };
    // API問い合わせ先URL
    const apiURL = 'https://script.google.com/a/hi0711.xyz/macros/s/AKfycbze5J3J7RCrD-T8meouPAKmjQn0DbOKgOG_rOyQ/exec?q=' + params.get('name');

    if (targetElement) {
        function returnData() {
            // 変数定義
            let groupData, nameData, startData, endData, kanaData;

            return fetch(apiURL)
                .then((response) => response.json())
                .then((data) => {
                    for (let i in data) {
                        groupData = data[i].group;
                        nameData = data[i].en;
                        startData = data[i].start;
                        endData = data[i].end;
                        kanaData = data[i].kana;
                    }
                })
                .then(() => {
                    areas.group.innerHTML = groupData;
                    areas.name.innerHTML = nameData;
                    areas.start.innerHTML = startData;
                    areas.end.innerHTML = endData;
                    areas.kana.value = kanaData;
                })
        }

        returnData();
    }
}

