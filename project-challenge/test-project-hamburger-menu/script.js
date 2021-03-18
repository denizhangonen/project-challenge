const menuBtn = document.querySelector('.menu-container');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;

    console.log('added open');
  } else {
    console.log('removing open');
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
