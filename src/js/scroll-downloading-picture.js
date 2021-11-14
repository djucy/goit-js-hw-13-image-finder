import { refs } from './refs';
export default function smoothScroll() {
    // refs.gallery.lastElementChild.classList.add('my-element-selector');
    // const element = document.querySelector('.my-element-selector');
         
    refs.gallery.scrollIntoView({
  behavior: 'smooth',
      block: 'end',
    });
  
 }