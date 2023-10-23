import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ItemService} from "../service/itemService";
import {Router} from "@vaadin/router";

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
        height: 100%;
      }

      li:hover {
        background-color: lightcoral;
        cursor: pointer;
      }

      li:active {
        background-color: red;
      }

      .search-bar {
        height: 5rem;
        background-color: black;
        gap: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
      }
      
      ul  {
        height: 100%;
      }
      
    `;



    render() {
        const searchbarElements = ["Pullovers", "Shirts", "Pants", "Shoes"];

        return html`
            <div class="search-bar">
                <ul>

                    ${searchbarElements.map(item => {
                        return html`<li @click=${() => {
                            Router.go("/")
                            ItemService.getAllItems(item)
                        }}>${item}</li>`
                    })}
                </ul>
                <ul class="user-part">
                    <li @click="${() => Router.go("/create-user")}">Create User</li>
                </ul>
            </div>


        `;
    }
}