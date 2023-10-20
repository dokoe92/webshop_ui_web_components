import {LitElement, css, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {store} from "../store/itemStore";
import {ItemService} from "../service/itemService";


@customElement('items-container')
export class ItemsContainer extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
  
    
    `;

    @state()
    private items = [];

    connectedCallback() {
        super.connectedCallback();
        store.addListeners(this.handleStoreChange.bind(this))
    }

    handleStoreChange(newData) {
        this.items = newData;
    }


    // Render the UI as a function of component state
    render() {


        return html`
            ${this.items.map(item  => {
                // @ts-ignore
                // @ts-ignore
                return html`
                    <card-component 
                            itemBrand="${item.brand}" 
                            itemName="${item.name}"
                            itemValue="${item.value}"
                            itemColour="${item.colour}"
                                        
                    ></card-component>
                `
            })}
        `;
    }

    async test () {


    }
}