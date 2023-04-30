export interface Component {
  template: Element;
  afterViewInit?: () => void;
}
