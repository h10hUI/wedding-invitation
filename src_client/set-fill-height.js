const setFillHeight = () => {
  const calc = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
  }

  window.addEventListener('resize', calc);

  calc();
}

export default setFillHeight;
