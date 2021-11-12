export default class PhotosApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }
    fetchPhotos() {
        
        const options = {
        headers: {
        Authorization: '563492ad6f91700001000001fdff05c10bff415588be4d19f5aec23e',
    }
}

        return fetch(`https://api.pexels.com/v1/search?orientation=landscape&query=${this.searchQuery}&page=${this.page}&per_page=12`, options)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data);
            
            this.incrementPage();
            return data.photos;
            
    });
    }
    
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query () {
        return this.searchQuery;
     }
    set query (newQuery) {
        this.searchQuery = newQuery;
    }
}
