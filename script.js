document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Terima kasih! Pesan kamu sudah terkirim (simulasi).');
  e.target.reset();
});
