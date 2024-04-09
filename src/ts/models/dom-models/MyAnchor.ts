import { MyHTMLElement } from "./MyHtmlElement";

export class MyAnchor extends MyHTMLElement {
  element: HTMLAnchorElement;
  href: string;
  content: string;
  constructor(content: string, href: string, id?: string, className?: string) {
    super(id, className);
    this.href = href;
    this.content = content;
    this.init();
  }

  init() {
    this.element = document.createElement("a");
    this.element.id = this.id ? this.id : "";
    this.element.classList.add(this.className ? this.className : "");
    this.element.href = this.href;
    this.element.innerHTML = this.content;
  }
}
