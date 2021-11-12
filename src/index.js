import './sass/main.scss';
import { refs } from './js/refs.js';
import clearGallery  from './js/clear-gallery.js';
import cardMarkup from './templates/card-markup.hbs';
import pictureMarkup from './templates/big-picture-markup.hbs'
import PhotosApiService from './js/photos-service.js';
import {addLoadMoreButton, removeLoadMoreButton} from './js/toggle-loadmore-button.js';
import smoothScroll from './js/scroll-downloading-picture.js';
import {onPictureClick, onCloseModalWindow} from './js/toggle-modal-window.js';

const photosApiService = new PhotosApiService();

refs.searchForm.addEventListener('submit', onSearchPhotos);
refs.loadMoreButton.addEventListener('click', onButtonClickLoadMore);


function onSearchPhotos(event) {
    event.preventDefault();
    
    photosApiService.query = event.currentTarget.elements.query.value.trim();
    if (photosApiService.query === '') {
        return;
     }

    clearGallery();
    photosApiService.resetPage();
    photosApiService.fetchPhotos()
        .then(appendPhotosMarkup)
        .catch(error => { return console.error(error); });
 }

function onButtonClickLoadMore() {
    photosApiService.fetchPhotos()
        .then(appendPhotosMarkup)      
 }

function appendPhotosMarkup(photos) {
    const listCards = cardMarkup(photos);
    
    photos.length === 12 ? addLoadMoreButton() : removeLoadMoreButton();
  
    refs.gallery.insertAdjacentHTML('beforeend', listCards);
    smoothScroll();
    

}



//  function onImageClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
  
//   refs.modalRef.classList.add('is-open');
//   refs.lightBoxImageRef.src = event.target.dataset.source;
//   console.log(refs.lightBoxImageRef);
     
// }

// function onBtnClick(event) {
//   refs.modalRef.classList.remove('is-open');
//   refs.lightBoxImageRef.src = '';
// }
    

