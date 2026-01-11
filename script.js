AOS.init({
    once: true,
    duration: 1000
});

const namaElement = document.querySelector('.highlight');
const deskripsiElement = document.querySelector('.hero-content p');
const namaLengkap = "Gerald Jepedro Sitorus";

if (namaElement) {
    namaElement.textContent = "";
    let indexHuruf = 0;

    function ngetik() {
        if (indexHuruf < namaLengkap.length) {
            namaElement.textContent += namaLengkap.charAt(indexHuruf);
            indexHuruf++;
            setTimeout(ngetik, 100);
        } else {
            if (deskripsiElement) {
                deskripsiElement.classList.add('muncul');
            }
        }
    }
    setTimeout(ngetik, 500);
}

const waForm = document.getElementById('waForm');

if (waForm) {
    waForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const phoneNumber = "6285314088382";

        const text = `Halo Gerald, saya ingin terhubung!%0A%0A` +
            `*Nama:* ${name}%0A` +
            `*Keperluan:* ${subject}%0A` +
            `*Pesan:* ${message}`;

        const waURL = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(waURL, '_blank');
        waForm.reset();
    });
}

function updateCodingStats() {
    const startDate = new Date("2024-08-06"); 
    const today = new Date();
    const timeDiff = today - startDate;
    const daysCount = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const counterElement = document.getElementById("daysCount");

    if (counterElement && daysCount > 0) {
        counterElement.innerText = daysCount;
    }
}

updateCodingStats();

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const toTopBtn = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    if (toTopBtn) {
        if (window.scrollY > 500) {
            toTopBtn.classList.add("active");
        } else {
            toTopBtn.classList.remove("active");
        }
    }
});