// Memuat navbar
fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        
        // Menambahkan event listener untuk menu toggle setelah navbar dimuat
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        const audioToggle = new Audio('src/ok.mp3'); // Ganti dengan path file suara Anda

        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Tambahkan atau hapus kelas 'active'
            mobileMenu.classList.toggle('active'); // Tambahkan atau hapus kelas 'active' pada menu toggle
        });

        // Menutup menu saat mengklik di luar menu
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
                navMenu.classList.remove('active'); // Hapus kelas 'active' jika klik di luar
                mobileMenu.classList.remove('active'); // Hapus kelas 'active' pada menu toggle
            }
        });
    })
    .catch(error => console.error('Error loading navbar:', error));
    const audioToggle = new Audio('src/ok.mp3'); // Ganti dengan path file suara Anda
    window.addEventListener('load', () => {
    const backgroundAudio = new Audio('oke.mp3'); // Ganti dengan path file suara Anda
    backgroundAudio.loop = true; // Mengatur audio untuk berulang
    backgroundAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
});

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    audioToggle.play(); // Mainkan suara saat toggle diklik
});