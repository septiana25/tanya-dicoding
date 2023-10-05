class NewsCategories extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get arrNoFuc(){
        return this.arrNoFunction();
    }

    render(){

        let no = 1;
        const arrNo = [];
        this._category.forEach(cat => {
             let active = no === 1 ? ' class="active"' : ''; 
            this.shadowDOM.innerHTML += `
                <input type="button" ${active} id="button-${no}" value="${ cat.name }"></input>
            `;
            arrNo.push(no);
            no++;
        });

        for (const no of arrNo) {

            this.shadowDOM.querySelector(`#button-${no}`).addEventListener('click', this._clickEvent);
        }
    }

    arrNoFunction() {
        
        return this._category.length;
    }
}

customElements.define('news-categories', NewsCategories);