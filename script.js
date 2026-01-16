AOS.init({
    once: true,
    duration: 1000
});

const projectsData = {
    "alphaflow": {
        title: "AlphaFlow - Stock Prediction",
        tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
        desc: "AlphaFlow adalah kerangka kerja prediksi saham yang dirancang untuk mengatasi volatilitas pasar. Menggunakan algoritma Machine Learning untuk menganalisis data historis dan memprediksi tren masa depan dengan presisi yang lebih baik.",
        results: [
            "Meningkatkan akurasi prediksi sebesar 15% dibanding model regresi linear standar.",
            "Mengurangi Mean Squared Error (MSE) hingga 0.02 pada data uji.",
            "Mampu memproses dataset saham historis dalam hitungan detik."
        ],
        link: "https://github.com/g3raldatsc/AlphaFLow"
    },
    "cepatkan": {
        title: "Cepatkan Jadwalkan",
        tech: ["HTML", "CSS", "JavaScript", "Firebase"],
        desc: "Aplikasi manajemen waktu berbasis web yang ditujukan untuk mahasiswa. Memiliki fitur pengingat realtime dan sinkronisasi cloud menggunakan Firebase, dengan antarmuka yang minimalis.",
        results: [
            "Dapat digunakan aktif oleh siapapu untuk manajemen kegiatan harian.",
            "Waktu muat (loading time) website dioptimalkan di bawah 1.5 detik.",
            "Sinkronisasi data real-time antar perangkat tanpa delay."
        ],
        link: "https://github.com/g3raldatsc/cepatkan-jadwalkan"
    },
    "saldoger": {
        title: "Saldoger - Finance Tracker",
        tech: ["Python", "Django", "Bootstrap", "PostgreSQL"],
        desc: "Sistem pencatatan keuangan pribadi yang komprehensif. Dibuat dengan Django untuk backend yang kuat, aplikasi ini membantu pengguna melacak pemasukan dan pengeluaran dengan kategori otomatis.",
        results: [
            "Fitur auto-kategorisasi transaksi dengan akurasi tinggi.",
            "Dapat menghasilkan laporan keuangan bulanan dalam format PDF.",
            "Keamanan data terjamin dengan enkripsi autentikasi Django."
        ],
        link: "https://github.com/g3raldatsc/Saldoger"
    }
};

function openModal(projectId) {
    const project = projectsData[projectId];
    const modal = document.getElementById('projectModal');
    
    if (project) {
        document.getElementById('modalTitle').innerText = project.title;
        document.getElementById('modalDesc').innerText = project.desc;
        document.getElementById('modalLink').href = project.link;
        
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
        
        const resultsContainer = document.getElementById('modalResults');
        resultsContainer.innerHTML = project.results.map(r => `<li>${r}</li>`).join('');

        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeModal(event) {
    if (!event || event.target.className === 'modal-overlay' || event.target.className.includes('close-btn')) {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

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
    const startDate = new Date("2025-08-06");
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

function highlightMenu() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    if (window.scrollY < 100) {
        current = "home";
    }

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
}

window.addEventListener('scroll', highlightMenu);
highlightMenu();

const ctx = document.getElementById('mySkillChart');

if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pandas', 'Scikit-learn', 'Matplotlib', 'NumPy', 'TensorFlow'],
            datasets: [{
                label: 'Interest Level & Proficiency (%)',
                data: [95, 90, 85, 80, 75],
                backgroundColor: 'rgba(0, 242, 255, 0.4)',
                borderColor: '#00f2ff',
                borderWidth: 2,
                borderRadius: 5,
                hoverBackgroundColor: 'rgba(0, 242, 255, 0.7)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#e0e0e0',
                        font: {
                            family: "'Segoe UI', sans-serif"
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#aaa'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#e0e0e0',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
}