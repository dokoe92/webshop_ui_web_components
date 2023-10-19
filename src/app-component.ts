import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('app-component')
export class AppComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    * {
      margin: 0;
      padding: 0;
    }
    `



    // Render the UI as a function of component state
    render() {
        return html`
            <search-bar></search-bar>
            <items-container></items-container>
        `;
    }
}