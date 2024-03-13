import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { images } from "./galleryImages";

const galleryList = document.querySelector('.gallery');

const markup = images.map(({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

galleryList.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,

    });