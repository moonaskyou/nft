function refreshPage() {
    location.reload(); // Refresh halaman
}

// Daftar gambar yang akan ditampilkan
const images = [
    'kontol1.jpg',
    'kontol2.jpg',
    'kontol3.jpg', // Tambahkan gambar lainnya
];

// ID untuk gambar
let currentImageIndex = 0;
const imageElement = document.getElementById('kontol-image');

// Fungsi untuk mengganti gambar
function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Kembali ke gambar pertama
    }
    imageElement.src = images[currentImageIndex]; // Mengubah gambar
}

// Ganti gambar setiap 3 detik
setInterval(changeImage, 3000); // 3000 ms = 3 detik

// Fungsi untuk meng-toggle menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');  // Toggle kelas 'active' pada menu
}

// Fungsi untuk refresh halaman ketika klik logo atau Home
function refreshPage() {
    location.reload();
}
