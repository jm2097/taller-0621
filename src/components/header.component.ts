import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";

const HTML_TEMPLATE = html` 
  <header>
      header works!

      <button id="btn-ingresar">
          Ingresar
      </button>
  </header>
`;

export const headerComponent: Component = {
  template: HTML_TEMPLATE,
  afterViewInit() {
    const btnIngresar = this.template.querySelector<HTMLButtonElement>("#btn-ingresar");

    btnIngresar?.addEventListener("click", () => {
      alert("Lorem");
    });
  },
};





