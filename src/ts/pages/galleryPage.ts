import titleComponent from "../components/titleComponent";
import headerComponent from "../layouts/headerComponent";
export default function (): string {
  return `
            ${headerComponent()}
            <main class="main gallery__main">
                ${titleComponent("<h1>Gallery Page</h1>")}
                <section id="gallery-products-container"></section>
            </main>
        
        `;
}
