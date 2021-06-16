import axios from 'axios';

// 環境変数から取得
const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const BUSINESS_ID = process.env.BUSINESS_ID;

// hashtag "instagood"のid
// curl "https://graph.facebook.com/v10.0/ig_hashtag_search?user_id=${id}&q=instagood&access_token=${token}" で取得
const hashId = '17843862859017769';

// 検索フィールド定数化
const searchFields = 'id,media_url,permalink';

// 表示数
const quantity = 6;

// 生成したURL
const graphApiUrl = `https://graph.facebook.com/v10.0/${hashId}/recent_media?user_id=${BUSINESS_ID}&access_token=${TOKEN}&fields=${searchFields}&limit=${quantity}`;


export const fetchInstagram = () => {
    const target = document.querySelector('.bl_instagram_content');
    if (target) {
        const getData = async () => {
            const data = await axios.get(graphApiUrl);
            return data.data.data;
        };
        getData().then(data => {
            /**
             * media_urlとpermalinkの配列を返す
             *
             * @return Array media_url, permalink
             */
            const urlData = data.map(e => {
                return {
                    url: e.media_url,
                    link: e.permalink
                };
            });
            console.log(urlData);
            urlData.forEach(item => {
                // item が存在していたらhtmlを返す
                if (item.url && item.url.includes('scontent')) {
                    const imgElem = `
                        <a class="bl_instagram_card" href="${item.link}" target="_blank" rel="noopener">
                            <img class="el_instagram_item" src="${item.url}">
                        </a>
                    `;
                    target.innerHTML += imgElem;
                } else if (item.url && item.url.includes('video')) {
                    const videoElem = `
                        <a class="bl_instagram_card" href="${item.link}" target="_blank" rel="noopener">
                            <video class="el_instagram_item" src="${item.url}">
                        </a>
                    `;
                    target.innerHTML += videoElem;
                } else {
                    return false;
                }
            });
        });
    }
};
