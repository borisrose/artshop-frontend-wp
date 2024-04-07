import { PALETTE_ICON } from "../constants/fontawesome";
import { MyHtmlFactory } from "../factory/MyHtmlFactory";

export class LandingPage {
    onNavigate: (path: string) => void;
    constructor(onNavigate: (path: string) => void) {
        this.onNavigate = onNavigate
        const HEADER_NAV = document.getElementById("header-nav");
        const liElement = MyHtmlFactory.createLi("gallery-li", "nav-li").element
        const anchorElement = MyHtmlFactory.createAnchor(PALETTE_ICON, "#gallery", "gallery-anchor", "nav-anchor").element

        HEADER_NAV.appendChild(liElement)
        liElement.appendChild(anchorElement)
    }


}