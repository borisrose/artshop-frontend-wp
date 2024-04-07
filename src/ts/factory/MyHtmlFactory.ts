import { ProductInterface } from "../interfaces/ProductInterface"
import { MyAnchor } from "../models/dom-models/MyAnchor"
import { MyGalleryProductArticle } from "../models/dom-models/MyGalleryProductArticle"
import { MyLi } from "../models/dom-models/MyLi"

export class MyHtmlFactory {
    static createLi(id?: string, className?: string) {
        return new MyLi(id, className)
    }

    static createAnchor(content: string, href: string, id?: string, className?: string) {
        return new MyAnchor(content, href, id, className)
    }

    static createGalleryProductArticle(data: ProductInterface, id: number) {
        return new MyGalleryProductArticle(data, id)
    }

}