export class MyHTMLElement {
  id?: string;
  className?: string;

  constructor(id?: string | number, className?: string) {
    this.id = typeof id == "string" ? id : id.toString();
    this.className = className;
  }

  consoleViewer() {
    console.log("this element =>", this);
  }
}
