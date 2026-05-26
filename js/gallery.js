function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach((btn) => {
    btn.classList.remove('active');
    const onclick = btn.getAttribute('onclick') || '';
    if (onclick.includes("'" + category + "'")) {
      btn.classList.add('active');
    }
  });

  items.forEach((item) => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
      requestAnimationFrame(() => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      });
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}

window.filterGallery = filterGallery;
