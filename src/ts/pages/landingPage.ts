import buttonComponent from "../components/buttonComponent";
import titleComponent from "../components/titleComponent";
import cubeComponent from "../extra/cubeComponent";
import headerComponent from "../layouts/headerComponent";
export default function (): string {
    return `
            ${headerComponent()}
            <main class="main landing__main">
                ${titleComponent("<h1>Landing Page</h1>")}
                <section id="landing-cube-container">
                    ${cubeComponent()}
                </section>
                <section id="landing-message-container">
                    ${buttonComponent({ textContent: 'Découvir nos produits', id: "discover-button", type: "", className: "button" })}
                </section>
            </main>
        
        `;
}
