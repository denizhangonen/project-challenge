const panels = document.querySelectorAll('.panel');
const btnRemover = document.querySelector('.remove-active-btn');

if (btnRemover) {
  btnRemover.addEventListener('click', () => removeActiveClass());
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

const removeActiveClass = () => {
  panels.forEach((p) => {
    p.classList.remove('active');
  });
};
