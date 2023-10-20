import {html, css, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";

@customElement("card-component")
export class CardComponent extends LitElement {
    static styles = css`
      .card-container{
        border: 1px solid black;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        
      }
      
      .card-body {
        width: 10rem;
        display: flex;
 
      }
      
      .card-header {
        text-align:  center;
      }
      
      ul {
        list-style-type: none;

      }
      
      .item-info {
        text-align: left;
        padding-left: 5px;
      }
      
    
      
    `;

    @property({type: String})
    itemName?:string;

    @property({type: String})
    itemValue?: string;

    @property({type:String})
    itemColour?: string;

    @property({type: String})
    itemBrand?: string;


    render() {
        return html`
            <div class="card-container">
                <h4 class="card-header">
                    ${this.itemBrand}
                </h4>
                <div class="card-body">
                    <ul>
                        <li class="item-info">${this.itemName}</li>
                        <li class="item-info">${this.itemValue}</li>
                        <li class="item-info">${this.itemColour}</li>
                    </ul>
                </div>
                <button-component class="btn" name="Add to shopping cart"></button-component>
            </div>
        `
    }
}
