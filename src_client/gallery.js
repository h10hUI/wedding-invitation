import Vue from 'vue';
import axios from 'axios';

const dataUrl = process.env.GET_GALLERY_KEY;

const gallery = () => {
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
  });

  Vue.component('hello-component', {
    template: '<p>hello world</p>',
  });
};

export default gallery;
