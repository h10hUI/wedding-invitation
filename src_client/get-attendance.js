export default function getAttendance() {
  const target = document.querySelector('[data-hidden-type="attendance"]');
  const radioNodes = document.querySelectorAll(
    '.bl_replyForm_radioGrp [type="radio"]',
  );
  Array.prototype.forEach.call(radioNodes, (radioNode) => {
    radioNode.addEventListener('change', () => {
      target.value = radioNode.value;
    });
  });
}
