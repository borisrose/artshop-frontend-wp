import { PALETTE_ICON } from "../constants/fontawesome";
import { MyHtmlFactory } from "../factory/MyHtmlFactory";
import { PubSubService } from "../services/PubSubService";

export class LandingPage {
  onNavigate: (path: string, hash:string) => void;
  constructor(onNavigate: (path: string, hash:string) => void) {
    this.onNavigate = onNavigate;
    const HEADER_NAV = document.getElementById("header-nav");
    const liElement = MyHtmlFactory.createLi("gallery-li", "nav-li").element;
    const anchorElement = MyHtmlFactory.createAnchor(
      PALETTE_ICON,
      "#gallery",
      "gallery-anchor",
      "nav-anchor",
    ).element;

    HEADER_NAV.appendChild(liElement);
    liElement.appendChild(anchorElement);
    const DISCOVER_BUTTON = document.getElementById("discover-button")
    DISCOVER_BUTTON.onclick = () => this.onDiscoverClick()
    new PubSubService();
  }

  onDiscoverClick(){
    this.onNavigate("","#gallery")
  }
}
