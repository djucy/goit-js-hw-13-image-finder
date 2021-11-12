import { refs } from './refs';
export { onPictureClick, onCloseModalWindow } from './toggle-modal-window';

refs.gallery.addEventListener('click', onPictureClick );
refs.lightBoxImageRef.addEventListener('click', onCloseModalWindow )   

function onPictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    refs.modalRef.classList.add('is-open');
    refs.lightBoxImageRef.src = event.target.srcset;
    console.log(refs.lightBoxImageRef.src)
 }

function onCloseModalWindow(event) {
  refs.modalRef.classList.remove('is-open');
  refs.lightBoxImageRef.src = '';  
}
 