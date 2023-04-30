import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";


const HTML_TEMPLATE = html` 
  <footer>
      Footer funciona!
  </footer>
`;

export const footerComponent: Component = {
  template: HTML_TEMPLATE
}