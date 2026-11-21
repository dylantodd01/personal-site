const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogContent = document.querySelector('#dialog-content');

if (typeof dialog.showModal === 'function') {
  for (const details of document.querySelectorAll('.project-details')) {
    details.querySelector('summary').addEventListener('click', event => {
      event.preventDefault();
      dialogTitle.textContent = details.closest('article').querySelector('h3').textContent;
      dialogContent.replaceChildren(details.querySelector('.detail-body').cloneNode(true));
      dialog.showModal();
    });
  }
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
}

const navigationLinks = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -45% 0px' });
  for (const link of navigationLinks) observer.observe(document.querySelector(link.hash));
  observer.observe(document.querySelector('#top'));
}
