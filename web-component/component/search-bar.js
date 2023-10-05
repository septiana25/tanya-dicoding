import './news-categories.js';
class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
        //this.renderCategories();
    }

    set categories(categories) {
        this._categories = categories;
        this.renderCategories();
    }
    set searchValue(searchValue){
        this._searchValue = searchValue;
        this.renderCategories();
    }

    get value1() {
       return this.shadowDOM.querySelector('#searchElement').value;
    }

    get addEvent(){
        //return this.sendcategoriesElemnt();
    }

    render() {
        this.shadowDOM.innerHTML = `
        
        <div class="wrapper">
            <div id="search-container" class="search-container">
                <input placeholder="Search media news" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
                <button id="test" type="submit">tes</button>
            </div>

        </div>
        `;
           
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);

        
    }

    renderCategories() {
        this.render();

        const searchElement = this.shadowDOM.querySelector('.wrapper');
        const categoriesElemnt = document.createElement('news-categories');

        categoriesElemnt.setAttribute('id', 'buttons');
        searchElement.appendChild(categoriesElemnt);
        
        this._categories.forEach(item => categoriesElemnt.category = item.paths );

        categoriesElemnt.clickEvent = this.sendcategoriesElemnt;
    }

    sendcategoriesElemnt() {
        console.log('clicked');        
    }
}

customElements.define('search-bar', SearchBar);