document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        
        let footer = document.querySelector('footer');
        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    };

    const roles = ["Front-End Developer", "Orator", "3D Artist"];
    let currentIndex = 0;
    const roleElement = document.getElementById("role");

    function changeRole() {
        roleElement.style.opacity = 0; 
        setTimeout(() => {
            roleElement.textContent = roles[currentIndex]; 
            roleElement.style.opacity = 1; 
        }, 500); 
        currentIndex = (currentIndex + 1) % roles.length;
    }

    setInterval(changeRole, 2000);
    roleElement.textContent = roles[currentIndex];

    document.querySelectorAll('.radial-progress').forEach(function(circle) {
        const percentage = circle.dataset.percentage;
        const degree = percentage / 100 * 360;

        if (percentage <= 50) {
            circle.querySelector('.mask.half .fill').style.transform = `rotate(${degree}deg)`;
        } else {
            circle.querySelector('.mask.full .fill').style.transform = `rotate(180deg)`;
            circle.querySelector('.mask.half .fill').style.transform = `rotate(${degree - 180}deg)`;
        }
    });

    emailjs.init("gTPL9AIXWAe4j8UXT"); 
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        emailjs.sendForm('service_5jd0byp', 'template_cuilran', this)
            .then(function() {
                alert('Your message has been sent successfully!');
                document.getElementById('contact-form').reset(); 
            }, function(error) {
                alert('Failed to send your message. Please try again later.');
                console.log('EmailJS Error:', error);
            });
    });
});
