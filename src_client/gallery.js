import Vue from 'vue';
import VueViewer from 'v-viewer'; // eslint-disable-line
import axios from 'axios';
import hasParams from './has-params';

const dataUrl = process.env.GET_GALLERY_KEY;

const gallery = () => {
  if (hasParams().get('name')) {
    const imageData = async () => {
      const data = await axios.get(dataUrl);

      return data.data;
    };

    imageData().then((data) => {
      /**
       * 配列を作り直す
       *
       * @return Array srcUrl, alt
       */
      const urlData = data.map((e) => ({
        srcUrl: e.src_url,
        alt: e.title,
      }));
      console.table(urlData);

      Vue.component('gallery-component', {
        template: '<p>hello world</p>',
      });

      /* eslint-disable */
      const galleryComponent = new Vue({
        el: '#gallery',
      });
      /* eslint-enable */
    });
  }
};

export default gallery;
