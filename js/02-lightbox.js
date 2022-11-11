import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageContainer = document.querySelector('.gallery');
const imageMarcup = createPictureMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarcup);

function createPictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt ="${description}" />
</a></li>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
