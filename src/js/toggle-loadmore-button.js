import { refs } from './refs';
export { addLoadMoreButton, removeLoadMoreButton };

function addLoadMoreButton() {
   
        return refs.loadMoreButton.classList.remove('hidden');
}
function removeLoadMoreButton() {
    return refs.loadMoreButton.classList.add('hidden');
}

