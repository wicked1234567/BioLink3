// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/vynaa.jpg", // Path ke favicon
  title: "lostjaix | Profile", // Judul halaman
  metaTitle: "jai || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website lostjaix, staff", // Deskripsi meta untuk SEO
  metaKeywords: "jai, lostjaix, profile jaix, lost?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/vynaa.jpg", // Path ke gambar profil
  name: "lostjaix", // Nama profil
  occupation: "staff and tt editor", // Pekerjaan atau jabatan
  links: [
    { title: "tiktok", url: "https://www.tiktok.com/@jaixtard?_t=8qL74uPxD35&_r=1" // Tautan GitHub
    
// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
