import axios from 'axios';
import hasParams from './has-params';

// ターゲットになる要素
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
// eslint-disable-next-line
const apiUrl = `https://script.google.com/a/hi0711.xyz/macros/s/AKfycbze5J3J7RCrD-T8meouPAKmjQn0DbOKgOG_rOyQ/exec?q=${hasParams().get(
  'name',
)}`;

const fetchData = () => {
  if (hasParams().get('name')) {
    const getData = async () => {
      const data = await axios.get(apiUrl);

      return data.data;
    };

    getData().then((data) => {
      console.table(data); // eslint-disable-line no-console
      areas.first.innerHTML = data[0].firstName || 'ERR!';
      areas.startTime.innerHTML = data[0].start || 'ERR!';
      areas.endTime.innerHTML = data[0].end || 'ERR!';
    });
  }
};

export default fetchData;
