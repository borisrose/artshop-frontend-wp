import titleComponent from "../components/titleComponent";
import headerComponent from "../layouts/headerComponent";
export default function (): string {
    return (
        `
            ${headerComponent()}
            <main class="main landing__main">
                ${titleComponent("<h1>Landing Page</h1>")}
                <section id="landing-message-container"></section>
            </main>
        
        `
    )
}