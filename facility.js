const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    })
}

if (close){
    bar.addEventListener('click', () => {
      nav.classList.remove('active');
    })
}














// change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      // change icon
      const icon = faq.querySelector('.faq_icon i');
      if(icon.className === 'bx bx-plus') {
          icon.className = 'bx bx-minus';
      } else {
          icon.className = 'bx bx-plus';
      }
  })
})



// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block"; 
}

closebtn.addEventListener('click', closeNav)