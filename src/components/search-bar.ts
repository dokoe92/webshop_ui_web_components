import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('searchbar-component')
export class SearchbarComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
        li {
          display: inline;
        }
      
    `;
    render() {
        return html`
            <ul>
                <li>Pullover</li>
                <li>Shirts</li>
                <li>Pants</li>
                <li>Shoes</li>
            </ul>
            
        `;
    }
}