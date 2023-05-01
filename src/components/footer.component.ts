import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";

const template = () => html(` 
  <footer>
      Footer funciona!
  </footer>
`);

export const footerComponent: Component = {
  template: template()
}