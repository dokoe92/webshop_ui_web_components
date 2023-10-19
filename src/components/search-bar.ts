import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ItemService} from "../service/itemService";

@customElement('search-bar')
export class SearchBar extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      * {
        margin: 0;
        padding: 0;
      }

      li {
        display: inline-flex;
        color: white;
        align-items: center;
        width: 5rem;
        justify-content: center;
      }

      li:hover {
        background-color: lightcoral;
        cursor: pointer;
      }

      li:active {
        background-color: red;
      }

      ul {
        width: 100%;
        height: 10vh;
        background-color: black;
        display: flex;
        gap: 20px;
      }
    `;

    render() {
        const searchbarElements = ["Pullovers", "Shirts", "Pants", "Shoes"];

        return html`
            <ul>
                ${searchbarElements.map(item => {
                    return html`<li @click=${() => ItemService.getAllItems(item)}>${item}</li>`
                })}
                
            </ul>

        `;
    }
}