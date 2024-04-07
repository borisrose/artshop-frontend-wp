import { HOME_ICON } from "../constants/fontawesome";
import { MyHtmlFactory } from "../factory/MyHtmlFactory";
import { ProductInterface } from "../interfaces/ProductInterface";
import { ProductService } from "../services/ProductService";

export class GalleryPage {
    onNavigate: (path:string) => void;
    constructor(onNavigate:(path:string) => void){
        this.onNavigate = onNavigate
        const HEADER_NAV = document.getElementById("header-nav");
        const liElement = MyHtmlFactory.createLi("home-li", "nav-li").element
        const anchorElement = MyHtmlFactory.createAnchor(HOME_ICON, "/", "home-anchor", "nav-anchor").element
        HEADER_NAV.appendChild(liElement)
        liElement.appendChild(anchorElement)
        const GALLERY_PRODUCTS_CONTAINER = document.getElementById("gallery-products-container")
        this.getProducs()
            .then((products) => {
                console.log('gallery page =>', products)
                for(const prod of products){
                    const article = MyHtmlFactory.createGalleryProductArticle(prod, prod.id).element
                    GALLERY_PRODUCTS_CONTAINER.appendChild(article)
                }
            })
        
    }

    async getProducs(): Promise<ProductInterface[]>{
        return await ProductService.getProducts()
    }


}