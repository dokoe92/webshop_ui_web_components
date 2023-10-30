import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {ItemService} from "../service/itemService";
import {Router} from "@vaadin/router";
import {UserService} from "../service/userService";

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

      li.userId:hover {
        background-color: transparent;
        cursor: default;
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
      
      .userId {
        width: 10rem;      }
      
    `;


    @query(".userId-input")
    _userIdInput!: HTMLInputElement

    @state()
    userId = 0;

    async handleFindUser() {
        const inputUserId = parseInt(this._userIdInput.value);
        if (!isNaN(inputUserId)) {
            await UserService.getUser(inputUserId);
            this.userId = UserService.user.userId;
        }
    }



    render() {
        const searchbarElements = ["Pullovers", "Shirts", "Pants", "Shoes"];

        return html`

            <div class="search-bar">
                <ul>

                    ${searchbarElements.map(item => {
                        return html`
                            <li @click=${() => {
                                Router.go("/")
                                ItemService.getAllItems(item)
                            }}>${item}
                            </li>`
                    })}
                </ul>
                <ul class="user-part">
                    <li class="userId">Logged as User ID: ${this.userId}</li>
                    <li @click="${() => this.handleFindUser()}">Find User</li>
                    <input type="text" class="userId-input">
                    <li @click="${() => ItemService.clearShoppingCart()}">Clear Cart</li>
                    <li @click="${() => Router.go("/create-user")}">Create User</li>
                </ul>
            </div>


        `;
    }
}