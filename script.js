const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.textContent = open ? 'Menu' : 'Close';
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
  nav.classList.remove('open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

function escapeHtml(value) {
  const node = document.createElement('div');
  node.textContent = value;
  return node.innerHTML;
}

async function loadReviews() {
  const list = document.querySelector('#review-list');

  try {
    const response = await fetch('/reviews.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Reviews unavailable');

    const reviews = await response.json();
    if (!reviews.length) {
      list.innerHTML = '<p class="reviews-empty">Verified customer reviews will appear here soon.</p>';
      return;
    }

    list.innerHTML = reviews.map(({ name, rating, review, cleaner }) => {
      const stars = Math.max(1, Math.min(5, Number(rating) || 1));
      return `<article class="review-card">
        <div class="review-stars" aria-label="${stars} out of 5 stars">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
        <blockquote>“${escapeHtml(review)}”</blockquote>
        <footer>— ${escapeHtml(name)}${cleaner ? ` · Cleaned by ${escapeHtml(cleaner)}` : ''}</footer>
      </article>`;
    }).join('');
  } catch {
    list.innerHTML = '<p class="reviews-empty">Verified customer reviews will appear here soon.</p>';
  }
}

loadReviews();
