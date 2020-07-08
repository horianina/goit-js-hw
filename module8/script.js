import { default as galleryItems } from './gallery-items.js';
console.dir(galleryItems);
console.table(galleryItems);
const gallery = document.querySelector('.js-gallery');
const lightboxButton = document.querySelector('.lightbox__button');
const modalBox = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeLightbox = document.querySelector(
  'button[data-action="close-lightbox"]',
);
function galleryMarkup() {
  let markup = '';
  galleryItems.forEach(
    item =>
      (markup += `
<li class="gallery__item">
  <a class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`),
  );
  gallery.innerHTML = markup;
  return markup;
}
galleryMarkup();

function modalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    modalBox.classList.add('is-open');
    modalImage.src = event.target.dataset.source;
  }
}
gallery.addEventListener('click', modalOpen);

function modalClose(event) {
  if (event.target === lightboxButton || event.code === 'Escape') {
    modalImage.src = '';
    modalBox.classList.remove('is-open');
    gallery.removeEventListener('click', modalClose);
  }
}
document.addEventListener('keydown', modalClose);
lightboxButton.addEventListener('click', modalClose);

/*gallery.insertAdjacentHTML('afterbegin', markup);
console.dir(gallery);
console.log(gallery);*/

/*function modalBoxOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
closeLightbox.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
});
modalBox.classList.add('is-open');
/*modalImage.src = event.target.dataset.source;
modalImage.alt = event.target.alt;
modalImage.target = event.target;
modalBox.addEventListener('click', modalClose);
document.addEventListener('keydown', modalClose);*/
