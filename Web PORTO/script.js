document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (currentScroll >= sectionTop - sectionHeight / 3) {
            const id = section.getAttribute('id');
            document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
        } else {
            const id = section.getAttribute('id');
            document.querySelector('nav ul li a[href*=' + id + ']').classList.remove('active');
        }
    });
});
