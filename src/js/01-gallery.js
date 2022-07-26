// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulEl = document.querySelector('.gallery');
const previewLinks = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    );
  },
  ''
);
ulEl.insertAdjacentHTML('beforeend', previewLinks);

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   captionPosition: 'bottom',
// });

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  showCounter: false,
  nextOnImageClick: true,
  scrollZoom: false,
});
