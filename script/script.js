
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
     }

     function tampilkanPesan() {
        var nama = document.getElementById("nama").value;
        var email = document.getElementById("email").value;
        var pesan = document.getElementById("pesan").value;
        var output = document.getElementById("output");

        var hasilPesan = "Nama: " + nama + "\nEmail: " + email + "\nPesan: " + pesan;
        output.value = hasilPesan;
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        // Prompt pengguna untuk memasukkan nama
        var namaPengunjung = prompt("Selamat datang di RevoU! Silakan masukkan nama Anda:");
    
        // Periksa apakah pengguna memasukkan nama
        if (namaPengunjung !== null && namaPengunjung !== "") {
            var greeting = document.getElementById("greeting");
            greeting.textContent = "Hello, " + namaPengunjung + "!";
        }
    });
    