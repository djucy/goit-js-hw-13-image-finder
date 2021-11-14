import './sass/main.scss';
import { refs } from './js/refs.js';
import clearGallery  from './js/clear-gallery.js';
import cardMarkup from './templates/card-markup.hbs';
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
        .catch(onError);
 }

function onButtonClickLoadMore() {
    photosApiService.fetchPhotos()
        .then(appendPhotosMarkup)
    .catch(onError);
 }

function appendPhotosMarkup(photos) {
   let msg = ''
    const listCards = cardMarkup(photos);
    photos.length === 12 ? addLoadMoreButton() : removeLoadMoreButton();
    if (photos.length === 0) {
        msg = 'Sorry, no matches were found for your query.'
        return refs.userMessage.insertAdjacentText('beforeend', msg);
    }
    refs.userMessage.innerHTML = '';
    
    refs.gallery.insertAdjacentHTML('beforeend', listCards);
    smoothScroll();
    
}
 
function onError(error) {
    return refs.userMessage.insertAdjacentHTML('beforeend', error);
    console.error(error);
}

 

