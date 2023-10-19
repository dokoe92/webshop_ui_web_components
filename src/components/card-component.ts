import {html, css, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";

@customElement("card-component")
export class CardComponent extends LitElement {
    static styles = css`
      
    `;


    render() {
        return html`
            <div class="card-container">
                <div class="card-header">
                    
                </div>
                <div class="card-body">
                    
                </div>
                <div class="card-footer">
                    
                </div>
            </div>
        `
    }
}
