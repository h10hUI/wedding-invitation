export default function domload() {
    const rootHtml = document.querySelector('html');
    window.addEventListener('DOMContentLoaded', () => {
        rootHtml.style.setProperty('opacity', '1');
    })
}
