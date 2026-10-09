  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('topbarNav');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // মেনুর কোনো লিংকে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
