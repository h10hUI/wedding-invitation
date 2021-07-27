import Vue from 'vue';
import axios from 'axios';

const dataUrl = process.env.GET_GALLERY_KEY;

const gallery = () => {
  const imageData = async () => {
    const data = await axios.get(dataUrl);

    return data.data;
  };

  imageData().then((data) => {
    console.table(data);
  });

  Vue.component('hello-component', {
    template: '<p>hello world</p>',
  });
};

export default gallery;
