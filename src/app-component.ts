import {css, html, LitElement} from "lit";
import {customElement, query} from "lit/decorators.js";
import { Router} from "@vaadin/router";

@customElement('app-component')
export class AppComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    * {
      margin: 0;
      padding: 0;
    }
    `

    @query("#content")
    _content;

    firstUpdated() {
        const router = new Router(this._content);
        router.setRoutes([
            {path: "/", component: "items-container"},
            {path: "/create-user", component: "user-creation-form"},
        ])
    }



    // Render the UI as a function of component state
    render() {
        return html`
            <search-bar></search-bar>
            <div id="content"></div>
        `;
    }
}