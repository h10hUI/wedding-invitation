const setFillHeight = () => {
  const calc = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh); // eslint-disable-line no-console
  };

  window.addEventListener('resize', calc);

  calc();
};

export default setFillHeight;
