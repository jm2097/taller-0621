import { Page } from "./interfaces/page.interface";
import { homePage } from "./pages/home.page";
import "./theme/style.css";

function bootstrapApplication(pages: Array<Page>): void {
    for (const page of pages) {
        for (const component of page.components) {
            document.querySelector<HTMLDivElement>("#app")!.appendChild(component.template);

            if (component.afterViewInit) {
                component.afterViewInit();
            }
        }
    }
}

bootstrapApplication([
    homePage,
]);

