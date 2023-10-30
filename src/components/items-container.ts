import {LitElement, css, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {store} from "../store/itemStore";
import {ItemService} from "../service/itemService";

type Item = {
    id: string;
    brand: string;
    name: string;
    value: string;
    colour: string;
};

@customElement('items-container')
export class ItemsContainer extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
        
        .items-container {
          display: flex;
          flex-wrap: wrap;
          width: 80%;
          justify-content: center;
          margin: 2rem auto;
          gap: 1rem;
        }
      
    `;

    @state()
    private items: Item[] = [];

    connectedCallback() {
        super.connectedCallback();
        store.addListeners(this.handleStoreChange.bind(this))
    }

    handleStoreChange(newData: Item[]) {
        this.items = newData;
    }


    // Render the UI as a function of component state
    render() {


        return html`
            <div >
                <button>dd</button>
                <div class="items-container">
                    ${this.items.map(item => {
                        return html`
                            <card-component
                                    itemId="${item.id}"
                                    itemBrand="${item.brand}"
                                    itemName="${item.name}"
                                    itemValue="${item.value}"
                                    itemColour="${item.colour}"
                            >
                            </card-component>
                </div>

            </div>
                        `
                    })}
        `;
    }

    async test () {


    }
}