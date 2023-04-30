import { footerComponent } from "../components/footer.component";
import { headerComponent } from "../components/header.component";
import { Page } from "../interfaces/page.interface";

export const homePage: Page = {
    components: [
        headerComponent,
        footerComponent
    ]
};