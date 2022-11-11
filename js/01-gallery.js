import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const imageMarcup = createPictureMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarcup);

imageContainer.addEventListener('click', onContainerImageClick);

function createPictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

function onContainerImageClick(evt) {
  blockDefaultAction(evt);
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`<img src = "${evt.target.dataset.source}"/>`);
  instance.show();
  window.addEventListener('keydown', onEscClick);
  function onEscClick(event) {
    console.log(event);
    if (event.code === 'Escape') {
      instance.close();
    }
    window.removeEventListener('keydown', onEscClick);
  }
}

function blockDefaultAction(evt) {
  evt.preventDefault();
}
