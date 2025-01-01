// Smooth Scrolling
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

var typed= new Typed(".typing2",{
    strings:["Mobile App Developer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
  });