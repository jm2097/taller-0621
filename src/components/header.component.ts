import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";

const HTML_TEMPLATE = html` 
  <header>
      header works!
  
      <button id="btn-theme">
          Cambiar tema
      </button>
  </header>
`;

export const headerComponent: Component = {
  template: HTML_TEMPLATE,
  afterViewInit() {
    const btnTheme = this.template.querySelector<HTMLButtonElement>("#btn-theme")!;

    btnTheme.onclick = () => {
      document.querySelector('html')?.classList.toggle('dark')
    }
  },
};





