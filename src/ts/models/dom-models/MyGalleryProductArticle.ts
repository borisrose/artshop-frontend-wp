import { ProductInterface } from "../../interfaces/ProductInterface";
import { MyHTMLElement } from "./MyHtmlElement";

export class MyGalleryProductArticle extends MyHTMLElement {
    element:HTMLElement
    constructor(data:ProductInterface, id:number){
        super(id)
        this.element = document.createElement('article');
        this.element.id = this.id
        this.element.classList.add("gallery__product-article")
        const figure = document.createElement('figure')
        const image = document.createElement('img')
        image.setAttribute('src', data.url)
        image.setAttribute('alt', data.name)
        figure.appendChild(image)
        this.element.appendChild(figure)
        
    }
}