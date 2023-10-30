
import {html, css, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {UserService} from "../service/userService";

@customElement("user-creation-form")
export class UserCreationForm extends LitElement {
    static styles = css `
    `

    async createUser(e:Event) {
        e.preventDefault();
        if (this._username.value != "" && this._password.value != "") {
            await UserService.createNewUser(this._username.value, this._password.value);
        }
    }

    @query(".username")
    _username!: HTMLInputElement;

    @query(".password")
    _password!:HTMLInputElement;

    render() {
        return html`
            <form @submit="${this.createUser}">
                <input type="text" class="username" placeholder="Username">
                <input type="password" class="password" placeholder="Password">
                <input type="submit"  placeholder="Create User"">
            </form>
            
        `
    }

}
