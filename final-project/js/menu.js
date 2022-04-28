const menuBtn = document.querySelector('.menu--header');
menuBtn.addEventListener('click', handleMenuClick);
function handleMenuClick(e) {
  if(e.currentTarget !== this)
   return;
  menuBtn.classList.toggle('active');
}