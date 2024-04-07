import { MyHTMLElement } from "./MyHtmlElement";

export class MyLi extends MyHTMLElement {
    element:HTMLElement;
    constructor(id?: string, className?: string) {
        super(id, className)
        this.init()
    }

    init(){
        this.element = document.createElement('li')
        this.element.id = this.id ? this.id : "";
        this.element.classList.add(this.className ? this.className : "");
    }
}