import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ItemService} from "../service/itemService";

@customElement('items-container')
export class ItemsContainer extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
  
    
    `;


    // Render the UI as a function of component state
    render() {
        return html`
            <button-component name="Pullover" @click="${() => ItemService.getAllItems('pullovers')}"></button-component>
        `;
    }
}