import {html, css, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";

@customElement("button-component")
export class ButtonComponent extends LitElement {
    static styles = css`
        button {
          width: 100%;
        }
      
    `;

    @property()
    name?:string;

    @property()
    color?: string;

    render() {
        return html`
            <button>${this.name}</button>

        `
    }
}
